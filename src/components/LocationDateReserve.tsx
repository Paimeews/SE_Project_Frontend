
"use client"
import { useState } from "react";
import {DatePicker} from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import {Select,MenuItem} from "@mui/material"
import { Dayjs} from "dayjs"


export default function LocationDateReserve({onDateChange} : {onDateChange:Function }) {

   const[reserveDate, setReserveDate] = useState<Dayjs |null>(null)
   // const [location,setLocation] = useState('BKK')
    return (
      <div className=" rounded-lg space-x-5 space-y-2 
       w-fit px-3 py-5 flex flex-col justify-center" >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
             <DatePicker className="bg-white w-[300px]"
             value={reserveDate}
             onChange={(value)=>{setReserveDate(value); onDateChange(value)}}/>
          </LocalizationProvider>

          {/* <Select variant="standard" name = "bookdate" id="bookdate" value={location}
          onChange={(e)=>{setLocation(e.target.value); } }
           className="h-[2em] w-[200px]">
             <MenuItem value="1">1</MenuItem>
             <MenuItem value="2">2</MenuItem>
             <MenuItem value="3">3</MenuItem>

          </Select> */}
      </div>
    );
}