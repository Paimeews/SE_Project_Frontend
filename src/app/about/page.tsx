
import Image from "next/image"
export default function About() {
    return (
        <main>
           <div className='block p-5 m-0 w-[100vw] h-[60vh] relative bg-black' >
      <Image src = 'https://drive.google.com/uc?id=1Avl4nP75JWxe4A5AjczvushfV51pKXAH' alt='cover' fill={true} objectFit='cover' priority className='opacity-[50%]'/>
      <div className='relative top-[140px] z-20 text-center text-white'>
        <h1 className='text-5xl font-medium font-semibold h-[100px] py-4 w-[400px] mx-[410px] font-bold border border-5 border-orange-500'>ABOUT  US</h1>
       </div>

         </div>
         <div className='bg-black text-white h-[200px] text-center '> 
          <div className="font-semibold text-md py-6"> Nice to meet you. Welcome to our website, our team has been develop this website for a years.We hopefully wish this will help you</div>
          <div className="font-semibold text-md py-2"> got what you want from this website.Lets start your journey here if you have a problem you can contact us down below</div>
          <div className="font-semibold text-md py-2">Thankyou.</div>
         </div>

         <div className="text-center font-bold text-4xl text-orange-500 my-10">OUR TEAM</div>

         <div className="flex flex-row w-[100vw]">

         <div className="relative shadow-xl h-[380px] w-[280px] rounded-xl bg-white px-5 py-5 left-[330px]  my-10"> 
        
        <Image src='https://drive.google.com/uc?id=11At5lPri9U_q4_w2hekb2tUwlo9EE2AO' width={0} height={0} sizes="100vw" alt='profile' className="h-[150px] w-[150px] mx-[45px] my-5" ></Image>
        <div className="font-sm my-7 text-center">Krittiphat Trakultangmun</div>
        <div className="font-sm my-7 text-center">Contact : 044-434-4334</div>
    
        </div>

        <div className="relative shadow-xl h-[380px] w-[280px] rounded-xl bg-white px-5 py-5 left-[400px] my-10"> 
        
        <Image src='https://drive.google.com/uc?id=11At5lPri9U_q4_w2hekb2tUwlo9EE2AO' width={0} height={0} sizes="100vw" alt='profile' className="h-[150px] w-[150px] mx-[45px] my-5" ></Image>
        <div className="font-sm my-7 text-center">Theerathan Kulpedngammaitree</div>
        <div className="font-sm my-7 text-center">Contact : 090-437-4334</div>
    
        </div>

        </div>

        
        </main>

// display: block;
// padding: 5px;
// margin: 0;
// width: 100vw;
// height: 90vh;
// position:relative;
// background-color: black;
    )
}