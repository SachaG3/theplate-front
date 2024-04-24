'use client'
import {useSession} from "next-auth/react"

function Name() {
    const {data: session} = useSession()
    return (
        <div>
            {session ? <p>Utilisateur connecté</p> : <p>Non connecté</p>}
        </div>
    )
}

export default Name;