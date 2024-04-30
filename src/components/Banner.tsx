'use client'

import styles from './banner.module.css'
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Banner() {
    const router = useRouter()

   const covers = ['https://drive.google.com/uc?id=1F4hYyaj7oQbjjwKUm9z5Su_Ou7IowRNV' ,'https://drive.google.com/uc?id=1Avl4nP75JWxe4A5AjczvushfV51pKXAH','/img/cover3.jpg' ];
   const [index,setIndex] = useState(0);

   const {data : session} = useSession()

   
  //  alert(session.user?.name)
  console.log(session?.user.token)
    return (
    <div className={styles.banner} onClick={()=>{setIndex(index+1)}}>
      <Image src = {covers[index%3]} alt='cover' fill={true} objectFit='cover' priority className='opacity-[60%]'/>
      <div className='relative top-[210px] z-20 text-center text-white'>
        <h1 className='text-5xl font-bold'> CAMPGROUND BOOKING WEBSITE</h1>
        <h3 className='text-3xl font-semibold'> ADVENTURE AND EXPLORE THE WORLD</h3>
       </div>
        {/* {
          session? <div className='z-30 absolute right-[100px] top-10 font-semibold text-xl text-cyan-800'>Hello {session.user?.name}</div> : null
        } */}

        <div className='w-full h-fit flex flex-row justify-center absolute bottom-[25%]'>
          <button className='bg-indigo-600 text-white px-8 py-4  hover:bg-cyan-600 hover:transparent z-30 hover:text-white rounded-xl font-bold mx-8'
            onClick={(e)=>{e.stopPropagation(); router.push('/register')}}>
            REGISTER
          </button>

          <button className='bg-orange-500 text-white px-4 py-4  hover:bg-cyan-600 hover:transparent z-30 hover:text-white rounded-xl font-bold mx-8'
            onClick={(e)=>{e.stopPropagation(); router.push('/campground')}}>
            VIEW CAMPGROUND
          </button>
        </div>
    </div>
    

    );
}