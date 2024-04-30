'use server'
import { getServerSession } from "next-auth"
import { authOptions } from "@/libs/auth"
import getUserProfile from "@/libs/getUserProfile"
import { dbConnect } from "@/db/dbConnect"
import Booking from "@/db/models/Booking"
export async function MyActions( date:string ,camp:string|null,nights:number)  {
    // alert("scioshci")
    // {date,camp,nights} : {date:string ,camp:string,nights:number}

    

    const session = await getServerSession(authOptions)
    if (!session || !session.user.token ) return <div>You need to login to book campground</div>
        

    const profile = await getUserProfile(session.user.token)
    console.log(date)
    console.log(camp)
    console.log(nights)
    console.log(profile.data._id)


    try {
        await dbConnect()
        if (date && nights>=1 && nights <=3) {
        const booking = await Booking.create({
          "bookDate" : date,
          'user' : profile.data._id,
          "campground" : camp,
          "night" : nights,
          
         
        })
        
        return booking._id
      } else {
        alert("Please check your date and nights")
      }
      
     } catch (error) {
      console.log(error)
     }

     

    //  const response = await fetch(`http://localhost:5000//api/v1/campgrounds/${camp}/bookings` , {
    //     method: "POST",
    //     headers: {
    //         "Content-Type" : "application/json",
    //        authorization: `Bearer ${session?.user.token}`,
           
    //    },
    //    body: JSON.stringify({
    //     bookDate: date,
    //     user: profile.data._id,
    //     campground : camp,
    //     night : nights
    // }),
    // });

    // if (!response.ok) {
    //   console.log(response)
    //  throw new Error("Failed to create campground")

    // }

    

    
   
}