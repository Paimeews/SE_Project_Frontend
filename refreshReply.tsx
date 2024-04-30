'use server'


import { revalidateTag } from "next/cache";

export default async function RefreshActionReplys() {
    await new Promise( (resolve)=>setTimeout(resolve,1000) )
    revalidateTag("replys");
}