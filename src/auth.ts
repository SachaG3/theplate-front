import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import HttpService from "@/services/HttpService";
import {API_URLs} from "@/services/API_URLs";
import {jwtDecode} from "jwt-decode";
// Your own logic for dealing with plaintext password strings; be careful!

export const {handlers, auth, signIn, signOut} = NextAuth({
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async session({session, token}) {
            // @ts-ignore
            session.user = token.user;
            return session;
        },
        async jwt({token, user}) {
            if (user) {
                token.user = user;
            }
            return token;
        },
    },
    providers: [
        Credentials({
            id: 'credentials',
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {

                // logic to salt and hash password
                const pwHash = credentials.password

                // logic to verify if user exists
                const response = await HttpService.post(API_URLs.auth, {
                    username: credentials.email,
                    password: pwHash

                })
                console.log(response)
                const token = response.token
                if (!token) {
                    // No user found, so this is their first attempt to login
                    // meaning this is also the place you could do registration
                    throw new Error("User not found.")
                }
                const decodedToken = jwtDecode(token)
                // @ts-ignore
                return {id: decodedToken.user_id, role: decodedToken.role, token: token}
            },
        }),
    ],
})
