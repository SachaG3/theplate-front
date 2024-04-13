'use client'
import HttpService from '@/services/HttpService';
import Link from 'next/link';
import {Table} from 'react-daisyui';
import {AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal} from 'react';

export default async function Page() {
    const data = (await HttpService.get("restaurant"))._embedded.restaurant;


    return (

        <>
            <h2>Restaurant</h2>
            <Table>
                <Table.Head>
                    <span>Name</span>
                    <span>Address</span>
                    <span>Action</span>
                </Table.Head>
                <Table.Body>
                    {data.map((item: {
                        name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined;
                        address1: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined;
                        id: any;
                    }, index: Key | null | undefined) => (
                        <Table.Row key={index}>
                            <span>{item.name}</span>
                            <span>{item.address1}</span>
                            <span> <Link href={`/restos/${item.id}`}>Voir</Link> </span>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </>
    );
}
