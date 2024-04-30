'use server'

import addHistory from "@/libs/addHistory"

export default async function(searchText: string) {
    addHistory(searchText);
}