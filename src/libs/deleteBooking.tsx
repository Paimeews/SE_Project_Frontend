

export default async function deleteBooking(id:string,token:string|undefined) {
    
      
         console.log(id)
         console.log(token)
        const response = await fetch(`${process.env.BACKEND_URL}/api/v1/bookings/${id}` , {
            method: "DELETE",
            headers: {
               authorization: `Bearer ${token}`,
   
           }
        });
        
        console.log(response)
  
        // if (!response.ok) {
            
        //  throw new Error("Failed to delete campground")
  
        // }
  
       
   
}