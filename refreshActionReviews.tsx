'use server'


import { revalidateTag } from "next/cache";

export default async function RefreshActionReviews() {
  revalidateTag("reviews");
}