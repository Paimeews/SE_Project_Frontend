import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import getUserProfile from "./getUserProfile"
import { authOptions } from "@/libs/auth"
import { revalidateTag } from "next/cache"
import { StringExpressionOperatorReturningNumber } from "mongoose"
export default async function addHistory(contentHistory:string) {


    
    const session = await getServerSession(authOptions)
    if (!session || !session.user.token ) return 
        

    const profile = await getUserProfile(session.user.token)


    console.log(contentHistory)

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/historys` , {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            authorization: `Bearer ${session.user.token}`,
        },
        body: JSON.stringify({
            content: contentHistory,
            //user:profile.data._id,
            user:"65fed212e81ddda40bd9408b"
        }),
    } )
     if (!response.ok) {
        throw new Error("Failed to add History")
        
     } 
      
     
     
     return await response.json

}