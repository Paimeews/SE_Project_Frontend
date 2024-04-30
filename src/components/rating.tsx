'use client'

import addRate from "@/libs/addRate"
import { Rating } from "@mui/material"
import { useState } from "react"
import RefreshActionRates from "../../refreshRate"

export default function Ratingg( {par,user,checkCanRate, rateOnce} : {par:string,user:string,checkCanRate:boolean, rateOnce:boolean}) {

    const [rate, setRate] = useState(0)

    
    return (
        <div>
            <Rating id="ratingnum" name="ratingnum" className="bg-white px-3 py-3 rounded-xl" onChange={(event,newvalue)=>{if(newvalue!=null) { setRate(newvalue); addRate(newvalue, par,user,checkCanRate, rateOnce); RefreshActionRates();}}}/>
        </div>
    )
}