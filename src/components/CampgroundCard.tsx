import styles from './productcard.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { Rating } from '@mui/material';
import { useState } from 'react'
import getRates from '@/libs/getRates';
import { revalidateTag } from 'next/cache';
import editCamp from '@/libs/editCamp';
export default async function CampgroundCard( {carName,address,tel,imgSrc,onCompare,campid} : {carName:string,address:string,tel:string,imgSrc:string,onCompare?:Function,campid:string}) {

    const campRates = await getRates(campid)

    console.log(campRates)

    var p = 0
    var a = 0
    for(let i = 0 ; i<campRates.count ; i++) {
      if(campRates.data[i].campground == campid) {
        a += campRates.data[i].rateContent
        p += 1
      }
    }
    var ravg = a/p

    if(ravg > 0) {
      editCamp(campid, ravg, p);
    }

    return (
      <InteractiveCard contentName={carName}>
          <div className={'w-[300px] h-[60%] relative rounded-t-lg'}>
             <Image src={imgSrc} alt='Campground Picture' fill={true} className='object-cover rounded-t-lg relative h-full'/>
             
          </div>
          <div className='w-full  h-[8%] text-center font-bold text-xl' >{carName}</div>
          <Rating defaultValue={ravg} precision={0.1} readOnly/>
          <div className='w-full  h-[8%] text-center text-xs' >Address : {address}</div>
          <div className='w-full  h-[8%] text-center font-semi-bold text-xs' >Contact us : {tel}</div>

          {
            onCompare?
          <div className='bg-sky-600 h-[10%] mx-3 px-1 py-1 rounded-md text-white hover:bg-indigo-600'
           onClick={(e)=>{e.stopPropagation(); e.preventDefault(); onCompare(carName)}}> Compare</div>:''
          }

        


        
        </InteractiveCard>
    );
}