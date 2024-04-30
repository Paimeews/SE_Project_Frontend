'use client'
import ProductCard from "./CampgroundCard"
import Link from "next/link"
import getCamps from "@/libs/getCamps"
import { FormEvent, FormEventHandler, useState } from "react"
import CampRe from "./CampRe"
import RefreshAction from "../../RefreshActionCamps"

export default  function TopRatesCatalog({campJson}:{campJson:CampgroundJson}) {
    const campJsonReady = campJson
    
    return (
       <div>
         
        <div>
          <div style={{margin:"20Spx",display:"flex",flexDirection:"row",flexWrap:"wrap"
       ,justifyContent:"space-around" , alignContent:"space-around"}}>
        {
          campJsonReady.data.map((campItem:CampgroundItem)=> 
             <Link href={`campground/${campItem._id}`} className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:4 lg:p-8" >
            <ProductCard carName={campItem.name} imgSrc={campItem.picture} address={campItem.address} tel={campItem.tel} campid={campItem._id}/>
             </Link>
          )
        }
      </div>

        </div>
       </div>

    )
}