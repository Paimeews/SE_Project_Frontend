export default async function getRates(id : string) {
    // await new Promise((resolve)=>setTimeout(resolve,1000))

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/campgrounds/${id}/rates`, {next: {tags:['rates']}})
    if (!response.ok) {
        throw new Error("Failed to fetch rate")

    }
    
    return await response.json()
}