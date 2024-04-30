import Image from "next/image";
import styles from "./page.module.css";
import ProductCard from '@/components/CampgroundCard'
import Banner from '@/components/Banner'
// import { CarPanel } from "@/components/CarPanel"
import { TravelCard } from "@/components/TravelCard";
export default function Home() {
  return (
    <main>
       <Banner/>
       <div className="h-[30px] w-full bg-black"></div>
        {/* <div className='h-[400px] w-100vw bg-white py-4'>
        <TravelCard></TravelCard>
        </div> */}
        
    </main>
  );
}
