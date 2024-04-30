

export default async function deleteReview(id:string,token:string|undefined) {
    if (token == undefined) {
        return
    }
      
    console.log(id)
    console.log(token)
   const response = await fetch(`${process.env.BACKEND_URL}/api/v1/reviews/${id}` , {
       method: "DELETE",
       headers: {
        //   authorization: `Bearer ${token}`,

      }
   });
   
   console.log(response)

   // if (!response.ok) {
       
   //  throw new Error("Failed to delete campground")

   // }

  

}