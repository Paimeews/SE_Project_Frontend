import { getServerSession } from "next-auth"
import { authOptions } from "@/libs/auth"
import getUserProfile from "@/libs/getUserProfile"

export default async function getUserID () {
    const session = await getServerSession(authOptions)
    if (!session || !session.user.token ) return             

    const profile = await getUserProfile(session.user.token)

    return profile.data._id;
}