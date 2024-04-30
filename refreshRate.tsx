'use server'


import { revalidateTag } from "next/cache";

export default async function RefreshActionRates() {
    await new Promise( (resolve)=>setTimeout(resolve,1000) )
    revalidateTag("rates");
}