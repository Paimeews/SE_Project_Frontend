import { getServerSession } from "next-auth"
import { authOptions } from "@/libs/auth"
import getUserProfile from "./getUserProfile"


export default async function getHistorys() {
    // await new Promise((resolve)=>setTimeout(resolve,1000))

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token ) return 
        

    // const profile = await getUserProfile(session.user.token)

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/historys`,  {
        next: {tags:['historys']},
        method: "GET",
        headers: {
            authorization: `Bearer ${session.user.token}`,
        
        }

    })

    
    if (!response.ok) {
        throw new Error("Failed to fetch historys")

    }
    
    return await response.json()
}