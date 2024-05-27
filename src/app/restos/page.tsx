import HttpService from "@/services/HttpService";
import Restaurant from "@/models/Restaurant";
import {Table} from "antd";
import Link from "next/link";
import {API_URLs} from "@/services/API_URLs";

export default async function Page() {
    const data = (await HttpService.get(API_URLs.restos))._embedded.restaurant;
    const dData = data.map((item: Restaurant) => {
        return {
            key: item.id,
            name: item.name,
            address1: item.address1,
            action: <Link href={`/restos/${item.id}`}>Voir</Link>
        }
    });

    const columns = [{
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
        }
    ];

    return (
        <>
            <h2>Restaurant</h2>
            <Table dataSource={dData} columns={columns}/> {/* Utilisation de dData comme source de données */}
        </>
    );
}