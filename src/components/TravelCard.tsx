'use client'

import { VlogPlayer } from "./VlogPlayer"
import { useState } from "react"
import { useWindowListener } from "@/hooks/useWindowListener"
export function TravelCard() {
  const [playing,setPlaying] = useState(true)
  const [pointerPosition,setPointerPosition] = useState({x:0 ,y:0})

  useWindowListener('pointermove',(e)=> {
    setPointerPosition( {x: (e as PointerEvent).clientX , y:(e as PointerEvent).clientY  })
  })

  return ( 
    <div className='shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row'>
          <div className="px-3 py-5">  Lets start your adventure with us.</div>
         <button className='block bg-white text-cyan-600 border border-cyan-600 px-2 py-2 hover:bg-cyan-600 hover:transparent z-30 hover:text-white rounded-md font-semibold mx-2 my-3'
        onClick={(e)=> setPlaying(!playing)}>
         {playing? 'Pause' : 'Play'}
       </button>
        
         <VlogPlayer isPlaying={playing} vdoSrc="/video/ThailandNatural.mp4"></VlogPlayer>
        
       
    </div>
  )
}