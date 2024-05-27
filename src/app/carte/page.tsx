'use client';
import React, {useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {icon} from "leaflet";
import HttpService from "@/services/HttpService";
import Link from "next/link";
import {API_URLs} from "@/services/API_URLs";

const ICON = icon({
    iconUrl: "utilisateur.png",
    iconSize: [30, 32],
});

const ICONRESTAURANT = icon({
    iconUrl: "restaurant.svg",
    iconSize: [30, 32],
});

// @ts-ignore
function LocateControl({center}) {
    const map = useMap();

    const handleLocateClick = () => {
        map.setZoom(15); // Zoom sur la position de l'utilisateur en premier
        map.setView(center); // Puis déplacez la carte vers la position de l'utilisateur
    };

    return (
        <button
            onClick={handleLocateClick}
            role="button"
            style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                zIndex: 1000,
            }}
        >
            <img src="/locate-fixed.svg" alt="Locate Me"/>
        </button>
    );
}

function Page() {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [loading, setLoading] = useState(true);
    const [restaurants, setRestaurants] = useState([]);
    const [defaultDistance, setDefaultDistance] = useState(5); // Valeur de distance par défaut

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                    setLoading(false);
                },
                () => {
                    setLoading(false);
                }
            );
        } else {
            setLoading(false);
        }

        const fetchData = async () => {
            try {
                const response = await HttpService.get(API_URLs.restaurant);
                const formattedRestaurants = response._embedded.restaurant.map((item: {
                    id: any;
                    name: any;
                    address1: any;
                    latitude: any;
                    longitude: any;
                }) => ({
                    id: item.id,
                    name: item.name,
                    address1: item.address1,
                    latitude: item.latitude,
                    longitude: item.longitude,
                }));
                setRestaurants(formattedRestaurants);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    // @ts-ignore
    const handleDistanceChange = (event) => {
        setDefaultDistance(event.target.value);
    };
    // @ts-ignore
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Rayon de la terre en km
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const dist = R * c; // Distance en km
        return dist;
    };
    // @ts-ignore
    const deg2rad = (deg) => {
        return deg * (Math.PI / 180);
    };


    const filteredRestaurants = restaurants.filter(
        (restaurant) =>
            // @ts-ignore
            calculateDistance(latitude, longitude, restaurant.latitude, restaurant.longitude) <= defaultDistance
    );
// @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            {!loading && (
                <MapContainer
                    center={[latitude, longitude]}
                    zoom={13}
                    scrollWheelZoom={false}
                    style={{height: "600px", width: "100%"}}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker icon={ICON} position={[latitude, longitude]}>
                        <Popup>Moi !</Popup>
                    </Marker>

                    {filteredRestaurants.map((item) => (
                        // @ts-ignore
                        <Marker key={item.id} icon={ICONRESTAURANT} position={[item.latitude, item.longitude]}>
                            <Popup>
                                <div>

                                    <h3>{item["name"]}</h3>
                                    <p>{item["address1"]}</p>
                                    <Link href={`/restos/${item["id"]}`}>Voir</Link>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                    <LocateControl center={[latitude, longitude]}/>
                </MapContainer>
            )}

            <div style={{margin: "10px 0"}}>
                <label htmlFor="distanceRange">Distance (km):</label>
                <input
                    type="range"
                    id="distanceRange"
                    name="distanceRange"
                    min="1"
                    max="3000"
                    step="100"
                    value={defaultDistance}
                    onChange={handleDistanceChange}
                />

                <span>{defaultDistance === 3000 ? "Toute la distance" : `${defaultDistance} km`}</span>
            </div>

        </div>
    );
}

export default Page;
