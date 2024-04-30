import { Dayjs } from "dayjs"
import { getServerSession } from "next-auth"
import { authOptions } from "./auth"
import RefreshAction from "../../refreshAction"
export default async function editBooking(bookingid:string,date:Dayjs | null,nights:number,campid:string,token:string) {
     
   // console.log(campid.toString())
     if (date && nights>=1 && nights <=3) {
        
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/bookings/${bookingid}` , {
        method : "PUT",
        headers : {
            "Content-Type" : "application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
           bookDate : date,
           campground : campid,
           night : nights
        }),
    } )
    RefreshAction()
     if (!response.ok) {
        console.log(response)
        throw new Error("Failed to update bookings")
        
     }
   
     } if (date==null) {
        alert('Plese select date before save changes')
     } if (nights<1 || nights>3) {
        alert('Nights must be between 1-3')
     }

}