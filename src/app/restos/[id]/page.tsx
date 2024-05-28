import HttpService from "@/services/HttpService";
import {API_URLs} from "@/services/API_URLs";


export default async function Page({params}: { params: { id: string } }) {
    const data = await HttpService.get(API_URLs.restoById(params.id));

    return (
        <>
            <h2>Restaurant Details</h2>
            <p>Restaurant Name: {data.name}</p>
            <p>Restaurant description: {data.decription}</p>
            <p>Restaurant cité: {data.city}</p>
            <p>Restaurant longitude: {data.longitude}</p>
            <p>Restaurant latitude: {data.latitude}</p>



        </>


    );
}