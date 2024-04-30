export default async function getReplys(id : string) {
    // await new Promise((resolve)=>setTimeout(resolve,1000))
    

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/reviews/${id}/replys`, {next: {tags:['replys']}})
    if (!response.ok) {
        throw new Error("Failed to fetch review")

    }
    
    return await response.json()
}