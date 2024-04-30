
import { getServerSession } from "next-auth"
import { authOptions } from "@/libs/auth"
import getUserProfile from "@/libs/getUserProfile"
import Image from "next/image"
import CampgroundCard from "@/components/CampgroundCard"
import { dbConnect } from "@/db/dbConnect"
import { revalidateTag } from "next/cache"
import User from "@/db/models/User"
import { useState } from "react"
import userRegister from "@/libs/userRegister"

export default async function Myprofile() {
    


   

    


    const session = await getServerSession(authOptions)
    if (!session || !session.user.token ) return <div>Please login to view your profile</div>
        

    const profile = await getUserProfile(session.user.token)


//     const testDelete = async () => {
//       "use server"
      
       
     
//         const response = await fetch("http://localhost:5000/api/v1/campgrounds/660008655c6ca3a0437af4ec" , {
//             method: "DELETE",
//             headers: {
//                authorization: `Bearer ${session.user.token}`,
   
//            }
//         });

//         if (!response.ok) {
//          throw new Error("Failed to delete campground")
 
//         }

       
//    }

   return (
    <main>
        <div className="shadow-xl h-[500px] w-[400px] rounded-xl bg-white px-5 py-5 mx-[450px] my-10"> 
        <div className="text-center font-bold text-4xl text-orange-500">MY PROFILE</div>
        <Image src='https://drive.google.com/uc?id=1p5fa8u-xn9LFnIWFQjoSv1Po7BqHaBPM' width={0} height={0} sizes="100vw" alt='profile' className="h-[150px] w-[150px] mx-24 my-5" ></Image>
        <div className="font-sm my-7">My Name : {profile.data.name}</div>
        <div className="font-sm my-7">Email : {profile.data.email}</div>
        <div className="font-sm my-7">My Role : {profile.data.role}</div>
        <div className="font-sm my-7">ID : {profile.data._id}</div>
        
        

       

        </div>
{/* 
        <form action={testDelete}>
        <button type="submit"> DELETE</button>

        </form> */}
        
        
    </main>

   )
}