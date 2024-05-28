'use client';
import React, {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import HttpService from '@/services/HttpService';
import {API_URLs} from '@/services/API_URLs';

// Dynamic import for Map component
const Map = dynamic(() => import('@/component/map/Map'), {ssr: false});

function Page() {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [loading, setLoading] = useState(true);
    const [restaurants, setRestaurants] = useState([]);
    const [defaultDistance, setDefaultDistance] = useState(5); // Valeur de distance par défaut

    useEffect(() => {
        if (typeof window !== 'undefined' && navigator.geolocation) {
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
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleDistanceChange = (event: { target: { value: React.SetStateAction<number>; }; }) => {
        setDefaultDistance(event.target.value);
    };

    return (
        <div>
            {!loading && (
                <Map
                    latitude={latitude}
                    longitude={longitude}
                    restaurants={restaurants}
                    defaultDistance={defaultDistance}
                    handleDistanceChange={handleDistanceChange}
                />
            )}
        </div>
    );
}

export default Page;
