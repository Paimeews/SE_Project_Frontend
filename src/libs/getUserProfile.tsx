

export default async function getUserProfile(token:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/me` , {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`,

        }

    })
     if (!response.ok) {
        console.log(response)
        throw new Error("Cannot get user profile")
        

     }
     return response.json()
}