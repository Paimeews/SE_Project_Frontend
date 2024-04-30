


export default async function getBookings(token:string|undefined) {
    // await new Promise((resolve)=>setTimeout(resolve,1000))
    if(token == undefined) return

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/bookings`,  {
        next: {tags:['bookings']},
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,
        
        }

    })

    
    if (!response.ok) {
        throw new Error("Failed to fetch bookings")

    }
    
    return await response.json()
}