// "use client"
import { revalidateTag } from "next/cache"
import ReservationCart from "@/components/ReservationCart"

export default function MyBookPage() {
    
    return (
      <main >
       

        {/* <div className="bg-black h-[100vw] w-100vw py-4">  */}
        <ReservationCart></ReservationCart>
        {/* </div> */}
        
      </main>

    )
}