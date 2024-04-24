export {auth as middleware} from "@/auth"
import {auth} from "./auth"

/*import {NextResponse} from "next/server";

export default auth((req) => {
    if (!req.auth) {
        return NextResponse.redirect(new URL("/login",req.url));
    }
})

 */
