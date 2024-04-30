

export default async function getCamp(id:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/campgrounds/${id}`)
    if (!response.ok) {
        throw new Error("Failed to fetch car")

    }
    return await response.json()
}