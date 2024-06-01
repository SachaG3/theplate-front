'use client'
import React, {useEffect, useState} from "react";
import {Link, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import HttpService from "@/services/HttpService";
import {API_URLs} from "@/services/API_URLs";
import Header from "@/component/Header";

const columns = [
    {
        key: "name",
        label: "NAME",
    },
    {
        key: "address1",
        label: "ADDRESS",
    },
    {
        key: "id",
        label: "ID"
    }
];

export default function App() {
    const [restaurants, setRestaurants] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Fetching data from API...");
                const data = await HttpService.get(API_URLs.restos);
                console.log("Data received:", data);
                setRestaurants(data._embedded.restaurant);
            } catch (error: any) {
                console.error("Fetch error:", error);
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    const handleButtonClick = (id: string) => {
        console.log(`Button clicked for ID: ${id}`);
        // Ajoutez ici la logique supplémentaire que vous souhaitez
    };

    return (
        <div style={{minHeight: "100vh"}}>
            <Header returnText={"Restaurant"} returnLink={"/"}/>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <Table aria-label="Example table with dynamic content">
                    <TableHeader columns={columns}>
                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={restaurants}>
                        {(item) => (
                            <TableRow key={item.id}>
                                {(columnKey) => (
                                    <TableCell>
                                        {columnKey === "id" ? (
                                            <Link href={"/restos/" + item.id}>
                                                voir
                                            </Link>
                                        ) : (
                                            item[columnKey]
                                        )}
                                    </TableCell>
                                )}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            )}
        </div>
    );
}
