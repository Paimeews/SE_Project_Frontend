'use client'
import Router, { useRouter } from "next/navigation"
export default async function RefreshRouter() {
    
    const router = useRouter();
    router.refresh();
  }