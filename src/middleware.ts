import {NextResponse} from 'next/server';

// Définition du type pour le paramètre request
type Request = {
    headers: {
        get: (name: string) => string | null;
    };
};

export function middleware(request: Request) {
    const trustedHosts = ['localhost:9090', 'srv2-vm-2121.sts-sio-caen.info'];
    const host = request.headers.get('host');

    return NextResponse.next();
}
