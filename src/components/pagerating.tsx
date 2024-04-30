import { getServerSession } from "next-auth"
import { authOptions } from "@/libs/auth"
import getUserProfile from "@/libs/getUserProfile"
import Ratingg from "./rating"
import getRates from "@/libs/getRates"

export default async function Pagerating({paa,checkCanRate} : {paa:string,checkCanRate:boolean}) {
    const session = await getServerSession(authOptions)
    if (!session || !session.user.token ) return 

    const profile = await getUserProfile(session.user.token)

    var rateOnce = false
    const campRates = await getRates(paa)
    if (campRates != null && campRates != undefined) {
        for (let i = 0; i < campRates.count; i++) {
            if (campRates.data[i].user._id == profile.data._id) {
                rateOnce = true
            }
        }
    }

    return (   
    <div>
        <Ratingg par={paa} checkCanRate={checkCanRate} user={profile.data._id} rateOnce={rateOnce}/>
    </div>
    )
}