import styles from './topmenu.module.css'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/libs/auth';
import { Link } from '@mui/material';

export default async function TopMenu() {
   const session = await getServerSession(authOptions)
   console.log(session)
    return (
    <div className={styles.menucontainer}>
      <Image src={'https://drive.google.com/uc?id=17OIFA7ZDzeX0V4ty0BDGtRtK6d0cah8z'} className={styles.logoimg} alt='logo' width={0} height={0} sizes='100vh'/>
      <TopMenuItem title='HOME' pageRef='/'/>
      <TopMenuItem title='CAMPGROUND' pageRef='/campground'/>
      <TopMenuItem title='BOOKINGS' pageRef='/reservations' />
      <TopMenuItem title='ABOUT' pageRef='/about' />
      {
         session? 
         <TopMenuItem title='MY_PROFILE' pageRef='/profile' />
         : null
       }
      
       
       <div className='flex flex-row absolute right-0 h-full z-50'>
        <TopMenuItem title='MYBOOK' pageRef='/mybooking' />
       {
         session? 
         <TopMenuItem title='LOG_OUT' pageRef='/api/auth/signout' />
         : <TopMenuItem title='LOG_IN' pageRef='/api/auth/signin' />
       }

       </div>

    </div>
    );
}