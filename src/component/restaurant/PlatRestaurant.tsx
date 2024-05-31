import React from 'react';
import {API_URLs} from "@/services/API_URLs";
import HttpService from "@/services/HttpService";
import {Card, CardBody, CardFooter, CardHeader} from '@nextui-org/react';

export async function PlatRestaurant({restaurantId}: { restaurantId: string }) {
    const plat = (await HttpService.get(API_URLs.findRestaurantById(restaurantId)))._embedded.plat;
    return (
        <div className="container mx-auto px-4 py-8">

            {plat.map((plat: {
                name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
                description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
                price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
                id: string;
            }) => (
                <Card key={plat.id} isHoverable isPressable>
                    <CardHeader>
                        <p>{plat.name}</p>
                    </CardHeader>
                    <CardBody>
                        <p>{plat.description}</p>
                    </CardBody>
                    <CardFooter>
                        <p>Prix: {plat.price} €</p>
                    </CardFooter>
                </Card>

            ))}

        </div>
    );
}

export default PlatRestaurant;
