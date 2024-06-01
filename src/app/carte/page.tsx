import Carte from "@/component/restaurant/Carte";
import Header from "@/component/Header";
import React from "react";

export default function Login() {
    return (
        <div style={{minHeight: "100vh"}}>
            <Header returnText={"Carte"} returnLink={"/"}/>
            <Carte></Carte>
        </div>
    );
}