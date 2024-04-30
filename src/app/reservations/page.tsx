"use client"
import LocationDateReserve from "@/components/LocationDateReserve";
import { useSearchParams } from "next/navigation";
import { useReducer, useState } from "react";
import dayjs , {  Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addReservation } from "@/redux/cartSlice";
// import { ReservationItem } from "../../../interfaces";
import { getServerSession } from "next-auth"
import { authOptions } from "@/libs/auth";
import getUserProfile from "@/libs/getUserProfile"
import { useSession } from "next-auth/react";
import Image from "next/image";
import { MyActions } from "../../../MyActions";
import User from "@/db/models/User";
import { dbConnect } from "@/db/dbConnect";
import { revalidateTag } from "next/cache";
import RefreshAction from "../../../refreshAction";

export default  function Reservations () {

   const urlParams = useSearchParams()
   const cid = urlParams.get('id')
   const model = urlParams.get('model')
   console.log(model)
   // console.log(MyActions('dvsoil')) 

   const {data : session} = useSession()
    
   const dispatch = useDispatch<AppDispatch>()

  
        
   // if (!session || !session.user.token ) return <div>Please login to book the campground</div>
   // const profile =  getUserProfile(session.user.token)
   
   

   const makeReservation = ()=> {
      // alert("mamai")
      

      // if (nights<1 || nights>3) {
      //    alert("Please book nights again with number 1-3")
         
      // }
      // else if (cid && model && date && nights && session) {
      //   let returnid =  MyActions(dayjs(date).format("YYYY/MM/DD"),cid,nights)

      //     if(returnid!=null) {
      //    const item:ReservationItem = {
      //        _id : 'ss',
      //        bookDate: dayjs(date).format("YYYY/MM/DD"),
      //       //  campground:model,
      //        user : 'ss',
      //        night: nights
           
      //    }
         
      //    dispatch(addReservation(item))
         
      //    // console.log(MyActions('dvsoil')) 
      // }
         
      // }
   }

   //  const [pickupDate,setPickupDate] = useState<Dayjs|null>(null)
   //  const [pickupLocation,setPickupLocation] = useState<string>("BKK")
   //  const [returnDate,setReturnDate] = useState<Dayjs|null>(null)
   //  const [returnLocation,setReturnLocation] = useState<string>("BKK")
       const [date,setDate] = useState<Dayjs|null>(null)
    
      const [nights,setNight] = useState<number>(1)


      

      
     
      
   //   const addCamp = async (addCampForm:FormData) => {
   //     const model = addCampForm.get("model")
    //}
    return (
      // <form action={ MyActions}>
     <div className = "w-full flex flex-col items-center space-y-4 relative">
       <Image src = 'https://drive.google.com/uc?id=12WoXGEpeXz_n3BMW6B6cqAWaezJhsv5b' alt='image'  width={0} height={0} sizes='100vw' className=' m-0 relative w-full h-[600px] opacity-[70%] '/>
       <div className="bg-black w-[50%] h-[400px] opacity-[80%] absolute my-20 left-[300px] top-[70px]">  </div>
        
        <div className="absolute py-5 left-[400px] top-[70px]">
        <div className=" text-white font-bold text-center text-4xl my-3">BOOKING</div>
        <div className="text-sm uppercase text-gray-400 bg-white px-2 py-3 rounded-sm w-[410px]"> Campground {model}</div>

        <div className='flex items-center w-1/2 my-2'>
                 <label className="w-auto block text-white pr-4" htmlFor='night'>
                  Nights: </label>
                  <input type='number' required id="night" name="night" value={nights} placeholder='3' min={1} max={3} className="bg-white border border-2 border-gray-200 w-full h-[55px] rounded p-2 text-gray-700 text-center"
                   onChange={(e)=>setNight(parseInt(e.target.value))}></input>
             </div>

       
           <div className="text-md flex flex-row text-left text-white p-0">
            <div className="my-7">Pick Date</div>
            <LocationDateReserve onDateChange={(value:Dayjs)=>{setDate(value)}}/>
            </div>
       
       
        <div className="flex flex-row">
         <div className="text-white my-10 text-sm"> LETS START YOUR JOURNEY!!</div>

        <button type='submit' className="rounded-xl bg-orange-500 text-white font-bold  px-4 py-3 hover:bg-indigo-600 hover:text-white mx-[20px] my-6" onClick={(e)=>{makeReservation; MyActions(dayjs(date).format("YYYY/MM/DD"),cid,nights); RefreshAction()} }>BOOK FOR NOW</button>
        </div>
        </div>

        {/* <div className="bg-black w-full h-[30px]  my-0"></div> */}
 
     </div>
      // </form>
      
     
    );

}