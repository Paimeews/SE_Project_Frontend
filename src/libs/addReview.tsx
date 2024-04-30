import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import getUserProfile from "./getUserProfile"
import { authOptions } from "@/libs/auth"
import { revalidateTag } from "next/cache"
export default async function addReview(contentReview:string,idcamp:string) {
    if (contentReview.length > 50) {
       alert('Your review is too long')
       return
    }



    const session = await getServerSession(authOptions)
    if (!session || !session.user.token ) return 
        

    const profile = await getUserProfile(session.user.token)

    




    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/campgrounds/${idcamp}/reviews` , {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            content: contentReview,
            user:profile.data._id,
            
        }),
    } )
     if (!response.ok) {
        throw new Error("Failed to add Review")
        
     } 
      
     
     
     return await response.json

}