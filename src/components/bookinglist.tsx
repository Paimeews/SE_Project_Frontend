
'use client'
import deleteBooking from "@/libs/deleteBooking"
import { revalidateTag } from "next/cache";
import RefreshAction from "../../refreshAction";
import { use, useState } from "react";
import { TextField } from "@mui/material";
import LocationDateReserve from "./LocationDateReserve";
import {Dayjs} from "dayjs";
import dayjs from "dayjs";
import editBooking from "@/libs/editBooking"
import {Select,MenuItem} from "@mui/material"


export default function Bookinglist({bookingItems , token}:{bookingItems:ReservationItem,token:string}) {
    const [edit,setEdit] = useState(false);
    const [nights,setNight] = useState<number>(0)
    const [date,setDate] = useState<Dayjs | null>(null)
    const [index,setIndex] = useState(0);
    const [camp,setCamp] = useState(bookingItems.campground._id)
    const arr = [false,true]

   return (
    <div className="bg-slate-200 rounded-2xl  px-5 mx-[400px] py-2 my-2 text-black my-7 mx-4"
    >

     <div className="text-xl" >User : {bookingItems.user} </div>
     
     <div className="text-sm">bookingid : {bookingItems._id} </div>
     

     <div className="text-sm">Date : 
     { edit? <LocationDateReserve onDateChange={(value:Dayjs)=>{setDate(value)}}/> :
      dayjs(bookingItems.bookDate).format("YYYY/MM/DD")

      }
     </div>
     <div className="text-sm">Campground : 
      {
         edit? <Select variant="standard" name = "camp" id="camp" value={camp}
         onChange={(e)=>setCamp(e.target.value)}
          className="h-[2em] w-[200px]">
            <MenuItem value="65fd9bdeb477d9016553c767">Grand Canyon</MenuItem>
            <MenuItem value="65fd9a8ab477d9016553c764">Rocks National Lakeshore</MenuItem>
            <MenuItem value="65fd99a7b477d9016553c761">Valley of Fire State Park</MenuItem>
            <MenuItem value="662f783fe80bb48c8b06168b">The Headwaters Eco Lodge</MenuItem>
            <MenuItem value="662f7703e80bb48c8b061688">Tasman Holiday Parks</MenuItem>
            <MenuItem value="662f7933e80bb48c8b06168e">Hossa National Park</MenuItem>

            


         </Select> : bookingItems.campground.name
      }
     
     
     </div>
     <div className="text-sm"> Nights : 
     { edit ? <input type='number' required id="night" name="night" value={nights} placeholder='1-3' min={1} max={3} className="bg-white border border-2 border-gray-200 w-[300px] h-[50px] rounded p-2 text-gray-700 text-center"
                   onChange={(e)=>setNight(parseInt(e.target.value))}></input> :  bookingItems.night}
      
     
     </div>
     <div className="flex flex-row my-3">
     <div className="rounded-2xl mx-4 bg-orange-500 text-center font-bold h-[50px] w-[150px] text-white px-3 py-3 hover:bg-indigo-600 hover:text-white " onClick={()=>{ deleteBooking(bookingItems._id,token); RefreshAction()} } >REMOVE</div>
     <div className="rounded-2xl bg-indigo-600 mx-8 text-center font-bold h-[50px] w-[150px] text-white px-3 py-3 hover:bg-indigo-600 hover:text-white " onClick={()=>{ setIndex((index+1)%2); setEdit(arr[index])} } >EDIT</div>
     {
      edit? <div className="rounded-2xl bg-green-400 text-center font-bold h-[50px] w-[150px] text-white px-3 py-3 hover:bg-indigo-600 hover:text-white " onClick={()=>{editBooking(bookingItems._id,date,nights,camp,token); setEdit(false); RefreshAction()} } >SAVE</div>
      : null
     }
     </div>


  </div>

   )
}