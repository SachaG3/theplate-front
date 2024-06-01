'use client'
import {useEffect, useState} from "react";
import {Button, Input} from "@nextui-org/react";
import axios from "axios";
import HttpService from "@/services/HttpService";
import {API_URLs} from "@/services/API_URLs";

const OPENCAGE_API_KEY = 'aa10f27eef3a4e388484f6448a7bad6f'; // Remplacez par votre clé API OpenCage

async function fetchUserInfo(userId: string) {
    const response = await HttpService.get(API_URLs.findByUserId(userId));
    return response;
}

async function updateUserInfo(userId: string, userInfo: {
    login: string,
    email: string,
    latitude: number,
    longitude: number
}) {
    const response = await HttpService.put(API_URLs.findByUserId(userId), userInfo);
    return response;
}

async function getAddressFromCoordinates(latitude: number, longitude: number) {
    const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OPENCAGE_API_KEY}`);
    const data = response.data;
    if (data.results.length > 0) {
        return data.results[0].formatted;
    } else {
        throw new Error('No results found');
    }
}

export default function UserInfo({userId}: { userId: string }) {
    const [userInfo, setUserInfo] = useState<{
        login: string,
        email: string,
        latitude: number,
        longitude: number
    } | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedUserInfo, setEditedUserInfo] = useState<{
        login: string,
        email: string,
        latitude: number,
        longitude: number
    }>({login: '', email: '', latitude: 0, longitude: 0});
    const [address, setAddress] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && userId) { // Vérification côté client
            fetchUserInfo(userId).then(data => {
                setUserInfo(data);
                setEditedUserInfo(data);
                getAddressFromCoordinates(data.latitude, data.longitude).then(addr => {
                    setAddress(addr);
                });
            });
        }
    }, [userId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setEditedUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = () => {
        updateUserInfo(userId, editedUserInfo).then(() => {
            setUserInfo(editedUserInfo);
            setIsEditing(false);
            getAddressFromCoordinates(editedUserInfo.latitude, editedUserInfo.longitude).then(addr => {
                setAddress(addr);
            });
        });
    };

    if (!userInfo) {
        return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="card w-full max-w-sm p-4 shadow-lg">
                {isEditing ? (
                    <>
                        <Input
                            label="Login"
                            name="login"
                            value={editedUserInfo.login}
                            onChange={handleChange}
                            fullWidth
                        />
                        <Input
                            label="Email"
                            name="email"
                            value={editedUserInfo.email}
                            onChange={handleChange}
                            fullWidth
                        />
                        <Input
                            label="Latitude"
                            name="latitude"
                            type="number"
                            // @ts-ignore
                            value={editedUserInfo.latitude}
                            onChange={handleChange}
                            fullWidth
                        />
                        <Input
                            label="Longitude"
                            name="longitude"
                            type="number"
                            // @ts-ignore
                            value={editedUserInfo.longitude}
                            onChange={handleChange}
                            fullWidth
                        />
                        <Button onClick={handleSave} className="mt-4 w-full">Save</Button>
                        <Button onClick={() => setIsEditing(false)} className="mt-2 w-full">Cancel</Button>
                    </>
                ) : (
                    <>
                        <p className="text-lg"><strong>Login:</strong> {userInfo.login}</p>
                        <p className="text-lg"><strong>Email:</strong> {userInfo.email}</p>
                        <p className="text-lg"><strong>Latitude:</strong> {userInfo.latitude}</p>
                        <p className="text-lg"><strong>Longitude:</strong> {userInfo.longitude}</p>
                        <p className="text-lg"><strong>Address:</strong> {address}</p>
                        <Button onClick={() => setIsEditing(true)} className="mt-4 w-full">Edit</Button>
                    </>
                )}
            </div>
        </div>
    );
}
