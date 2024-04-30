import { Dayjs } from "dayjs"
import { getServerSession } from "next-auth"
import { authOptions } from "./auth"
import RefreshAction from "../../refreshAction"
export default async function editCamp(cid:string, avg:number, total:number) {
  
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/campgrounds/${cid}` , {
        method : "PUT",
        headers : {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
           avgRate: avg,
           totalRate: total
        }),
    } )
     if (!response.ok) {
        console.log(response)
        throw new Error("Failed to update bookings")
        
     }
}