import {AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useRef} from "react";
import L from "leaflet";
import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";

const ICON = L.icon({
    iconUrl: "utilisateur.png",
    iconSize: [30, 32],
});

const ICONRESTAURANT = L.icon({
    iconUrl: "restaurant.svg",
    iconSize: [30, 32],
});

// @ts-ignore
const LocateControl = ({center}) => {
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
                position: 'absolute',
                top: '10px',
                right: '10px',
                zIndex: 1000,
            }}
        >
            <img src="/locate-fixed.svg" alt="Locate Me"/>
        </button>
    );
};

// @ts-ignore
const Map = ({latitude, longitude, restaurants, defaultDistance, handleDistanceChange}) => {
    const locationMap = useRef(null);

    const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
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

    const deg2rad = (deg: number) => {
        return deg * (Math.PI / 180);
    };

    const filteredRestaurants = restaurants.filter(
        (restaurant: { latitude: number; longitude: number; }) =>
            calculateDistance(latitude, longitude, restaurant.latitude, restaurant.longitude) <= defaultDistance
    );

    return (
        <div>
            <MapContainer
                center={[latitude, longitude]}
                zoom={13}
                scrollWheelZoom={false}
                style={{height: '600px', width: '100%'}}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={ICON} position={[latitude, longitude]}>
                    <Popup>Moi !</Popup>
                </Marker>
                {filteredRestaurants.map((item: {
                    id: Key | null | undefined;
                    latitude: number;
                    longitude: number;
                    name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined;
                    address1: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined;
                }) => (
                    <Marker key={item.id} icon={ICONRESTAURANT} position={[item.latitude, item.longitude]}>
                        <Popup>
                            <div>
                                <h3>{item.name}</h3>
                                <p>{item.address1}</p>
                                <Link href={`/restos/${item.id}`}>Voir</Link>
                            </div>
                        </Popup>
                    </Marker>
                ))}
                <LocateControl center={[latitude, longitude]}/>
            </MapContainer>
            <div style={{margin: '10px 0'}}>
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
                <span>{defaultDistance === 3000 ? 'Toute la distance' : `${defaultDistance} km`}</span>
            </div>
        </div>
    );
};

export default Map;
