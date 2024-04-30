'use client'

import Link from "next/link"
import styles from "./topmenu.module.css"
export default function TopMenuItem ({title,pageRef} : {title:string,pageRef:string}) {
    return (
      <Link href = {pageRef} className='width-[140px] text-center px-5 py-3 rounded-xl text-white font-bold mx-2 my-2 ' onMouseEnter={(e)=>e.currentTarget.classList.add('bg-cyan-600')} onMouseOut={(e)=>e.currentTarget.classList.remove('bg-cyan-600')}>
        {title}
      </Link>
    );
}