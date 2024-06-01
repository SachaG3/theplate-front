import HttpService from "@/services/HttpService";
import {API_URLs} from "@/services/API_URLs";
import PlatRestaurant from "@/component/restaurant/PlatRestaurant";
import Header from "@/component/Header";
import React from "react";


export default async function Page({params}: { params: { id: string } }) {
    const data = await HttpService.get(API_URLs.restoById(params.id));


    return (
        <div style={{minHeight: "100vh"}}>
            <Header returnText={"Restaurant Details"} returnLink={"/"}/>
            <p>Restaurant Name: {data.name}</p>
            <p>Restaurant description: {data.decription}</p>
            <p>Restaurant cité: {data.city}</p>
            <p>Restaurant longitude: {data.longitude}</p>
            <p>Restaurant latitude: {data.latitude}</p>
            <PlatRestaurant restaurantId={params.id}></PlatRestaurant>

        </div>


    );
}
