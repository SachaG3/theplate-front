import HttpService from "@/services/HttpService";
import Restaurant from "@/models/Restaurant";
import Plat from "@/models/Plat";
import { Table } from "antd";
import Link from "next/link";
import { API_URLs } from "@/services/API_URLs";

export async function getStaticProps() {
    let data = [];

    try {
        const response = await HttpService.get(API_URLs.restos);
        data = response._embedded.restaurant;
    } catch (error) {
        console.error('Failed to fetch restaurants:', error);
        // Fallback data in case of an error
        data = [];
    }

    return {
        props: {
            data,
        },
        revalidate: 10, // Re-generate the page at most once every 10 seconds
    };
}

export default function Page({ data }) {
    const dData = data.map((item: Restaurant) => {
        return {
            key: item.id,
            name: item.name,
            address1: item.address1,
            action: <Link href={`/restos/${item.id}`}>Voir</Link>
        };
    });

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Address',
            dataIndex: 'address1',
            key: 'address',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        },
        {
            title: 'Menu',
            dataIndex: 'menu',
            key: 'menu',
        }
    ];

    return (
        <>
            <h2>Restaurant</h2>
            <Table dataSource={dData} columns={columns} /> {/* Utilisation de dData comme source de données */}
        </>
    );
}
