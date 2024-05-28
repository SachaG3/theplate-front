// middleware/checkRole.ts
import {NextRequest} from 'next/server';
import {getSession} from 'next-auth/react';

const checkRole = async (req: NextRequest, allowedRoles: string[]) => {
    // @ts-ignore
    const session = await getSession({req});
    // @ts-ignore
    if (!session || !allowedRoles.includes(session.user?.role)) {
        return false;
    }
    return true;
};

export default checkRole;