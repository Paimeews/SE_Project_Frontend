// "use client"
import { removeReservation } from "@/redux/cartSlice";
import { AppDispatch,useAppSelector } from "@/redux/store"
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import getBookings from "@/libs/getBookings";
import Bookinglist from "./bookinglist";
import deleteBooking from "@/libs/deleteBooking";
const util = require('util')
// import { useSession}
export default async function ReservationCart() {

  // const carItems = useAppSelector((state)=> state.cartSlice.carItems)
  // const dispatch = useDispatch<AppDispatch>()
  // // console.log(carItems)

  // const {data : session} = useSession()

  const session = await getServerSession(authOptions)
  if (!session || !session.user.token ) return <div>Please login to view your bookings</div>
  
   const bookings = await getBookings(session.user.token)
    

//   const testDelete = async (id:string) => {
      
   
//       const response = await fetch(`http://localhost:5000/api/v1/bookings/${id}` , {
//           method: "DELETE",
//           headers: {
//              authorization: `Bearer ${session.user.token}`,
 
//          }
//       });

//       if (!response.ok) {
//        throw new Error("Failed to delete campground")

//       }

     
//  }
 console.log(util.inspect(bookings, {showHidden: false, depth: null, colors: true}))
  return (
    <>
    {
      // carItems.map((reservationItems)=>(
      //   <div className="bg-slate-200 rounded-2xl px-5 mx-10 py-2 my-2 text-black my-7 mx-4"
      //     >
      //      <div className="text-xl">{reservationItems.campground}</div>
      //      {/* <div className="text-sm"> Pick-up{reservationItems.pickupDate} from {reservationItems.pickupLocation}</div> */}
      //      <div className="text-sm">Date : {reservationItems.bookDate}</div>
      //      <div className="text-sm">User : {reservationItems.user}</div>
      //      <div className="text-sm"> Nights : {reservationItems.night}</div>
      //      <button className="rounded-2xl bg-orange-500 font-bold text-white px-3 py-2 hover:bg-indigo-600 hover:text-white " onClick={()=>{{dispatch(removeReservation(reservationItems))}; testDelete(); } } >Remove from Cart</button>


      //   </div>
      // ))
       
      //  console.log(bookings)
       
      
        
      
        


    }
    

    <div className="bg-orange-100 px-7 py-7  relative w-full">
{

bookings.data.map((bookingItems:ReservationItem)=>(
  
  <Bookinglist bookingItems={bookingItems} token={session.user.token} />
  
))

}
  </div>
    
    </>

  );
}