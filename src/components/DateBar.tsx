

export default function DateBar() {

    const today = new Date()

   return (
    <div className="flex items-center rounded-xl px-2 py-2  mx-auto my-4 shadow-xl w-[60%] h-[120px] bg-white">

    <div className="flex flex-row">
        <div className="w-[33%] h-[50%] mx-20">
            <div className="my-2 text-sm">Months</div>
            <div className="text-5xl font-bold">{today.getMonth()+1}</div>
        </div>

        <div className="text-7xl font-thin"> | </div>

        <div className="w-[33%] h-[50%] mx-20">
            
            <div className="my-2 text-sm">Dates</div>
            <div className="text-5xl font-bold">{today.getDate()}</div>
        </div>

        <div className="text-7xl font-thin "> | </div>

        <div className="w-[33%] h-[50%] mx-20">
            <div className="my-2">Years</div>
            <div className="text-5xl font-bold">{today.getFullYear()}</div>
        </div>
        

    </div>


    </div>
   )
}