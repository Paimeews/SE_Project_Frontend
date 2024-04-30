import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import getUserProfile from "./getUserProfile"
import { authOptions } from "@/libs/auth"
import { revalidateTag } from "next/cache"
export default async function addRate(contentRate:Number,idcamp:string,User:string,checkCanRate:boolean, rateOnce:boolean) {
    // const session = await getServerSession(authOptions)
    // if (!session || !session.user.token ) return 
        

    // const profile = await getUserProfile(session.user.token)


    console.log(contentRate)
    console.log(idcamp)
    console.log(User)

    if(checkCanRate && !rateOnce) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/campgrounds/${idcamp}/rates` , {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            rateContent: contentRate,
            user:User,
            campground:idcamp,
        }),
    } )
     if (!response.ok) {
        
        throw new Error("Failed to add Rate")
        
     } 
      
     
     
     return await response.json

    }

}