'use client'
import ProductCard from "./CampgroundCard"
import Link from "next/link"
import getCamps from "../libs/getCamps"
import { FormEvent, FormEventHandler, useState } from "react"
import CampRe from "./CampRe"
import RefreshAction from "../../RefreshActionCamps"
import addHistory from "@/libs/addHistory"
import RefreshHistory from "../../refreshHistory"
import passHistory from "../../passHistory"
export default  function CampCatalog({campJson}:{campJson:CampgroundJson}) {
  // {campJson}:{campJson:CampgroundJson}
    // const camps = await getCamps()

    const campJsonReady = campJson
    // const campJsonReady = await camps

    // class test {
    //   public tel:string;

    //   constructor(tel:string) {
    //     this.tel = tel
    //   }


    // }

    var madi = {
      address:'',
      activity:'',
      tag:'',
      avgRate:''
    }

    

    const [filter,setFilter] = useState(false)
    const [filterValue,setFilterValue] = useState('')
    const [object,setObject] = useState(madi)
    const [search,setSearch] = useState<string|null>('')
    const [sort, setsort] = useState<boolean>(false);
    

    // const addSearch = async (addReviewData:FormData) => {
    //   "use server"
    //    const searchText = addReviewData.get("searchText")
    //   if (searchText ) {
    //      console.log(searchText)
    //   }
    //   }
    // }
    
   

    function handleSubmit(e:any) {
      e.preventDefault()
      const formData = new FormData(e.target)
       const searchText = formData.get('searchText')
      //  alert(searchText)
       
       if (searchText && searchText.toString().length <= 50) {
        setFilter(true);
        setFilterValue(searchText.toString().toLowerCase())
        passHistory(searchText.toString());
        RefreshHistory();

       }
      
     } 


    

   
    
    return (
       <div>
            <div className='w-1/2 ml-0 justify-center '>
            <form onSubmit={handleSubmit} className='w-full items-center flex flex-row my-5 justify-center mx-[340px]'>
              <input type='text' required id="searchText" name="searchText" placeholder='Find campground name here' className="bg-white text-center rounded-xl w-[500px] h-[50px] p-2 text-gray-700 focus:outline-none focus:white" ></input>
              {/* <button type="submit" className="bg-indigo-600 text-white rounded-2xl px-3 h-[50px] font-bold my-5 mx-3 hover:bg-cyan-600 hover:transparent" onClick={(e)=>{var form = new FormData; var text = form.get('searchText'); alert(text)  }}>SEARCH</button> */}
              <button type='submit' id="searchButton" className="bg-indigo-600 text-white rounded-2xl px-3 h-[50px] font-bold my-5 mx-3 hover:bg-cyan-600 hover:transparent" >SEARCH</button>
            </form>
          </div>
      <div className="flex flex-row ">
        <div className="ml-10 my-40 w-[25%]">
        <div className="items-center bg-white rounded-xl p-2 shadow-xl">
         <div onClick={(e) => {setsort(!sort); let newobject = { address:'', activity:'',tag:object.tag,avgRate:''}; setObject(newobject);}} className="hover:text-black text-black px-4 py-1 rounded-md text-xl underline-offset-0 font-bold" id="filter">
           {sort ? 'FILTER⬏' : 'FILTER⬎'}
         </div>
         {sort && (
           <div className="flex flex-col items-center">
            <div id="main" className="w-[100%]">
            <div className="m-2">
                 <div className="flex flex-col">
                  <div className="font-bold">Activity</div>
                  <div className="flex items-center m-1">
                   <input type="radio" id="Hiking" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:object.address, activity:e.target.value,tag:object.tag,avgRate:object.avgRate};  setObject(newobject);} else {let newobject = { address:object.address, activity:'',tag:object.tag,avgRate:object.avgRate};  setObject(newobject);}}} value='Hiking' className="bg-white appearance-none border border-gray-300 rounded-full w-6 h-6 checked:bg-gray-600 checked:border-transparent mr-2" name="activity"></input>
                   <label htmlFor="Hiking">Hiking</label>
                  </div>
                  <div className="flex items-center m-1">
                   <input type="radio" id="Fishing" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:object.address, activity:e.target.value,tag:object.tag,avgRate:object.avgRate};  setObject(newobject);} else {let newobject = { address:object.address, activity:'',tag:object.tag,avgRate:object.avgRate};  setObject(newobject);}}} value='Fishing' className="bg-white appearance-none border border-gray-300 rounded-full w-6 h-6 checked:bg-gray-600 checked:border-transparent mr-2" name="activity"></input>
                   <label htmlFor="Fishing">Fishing</label>
                  </div>
                  <div className="flex items-center m-1">
                   <input type="radio" id="Biking" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:object.address, activity:e.target.value,tag:object.tag,avgRate:object.avgRate};  setObject(newobject);} else {let newobject = { address:object.address, activity:'',tag:object.tag,avgRate:object.avgRate};  setObject(newobject);}}} value='Biking' className="bg-white appearance-none border border-gray-300 rounded-full w-6 h-6 checked:bg-gray-600 checked:border-transparent mr-2" name="activity"></input>
                   <label htmlFor="Biking">Biking</label>
                  </div>
                  <div className="flex items-center m-1">
                   <input type="radio" id="Swimming" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:object.address, activity:e.target.value,tag:object.tag,avgRate:object.avgRate};  setObject(newobject);} else {let newobject = { address:object.address, activity:'',tag:object.tag,avgRate:object.avgRate};  setObject(newobject);}}} value='Swimming' className="bg-white appearance-none border border-gray-300 rounded-full w-6 h-6 checked:bg-gray-600 checked:border-transparent mr-2" name="activity"></input>
                   <label htmlFor="Swimming">Swimming</label>
                  </div>
                 </div>
            </div>
              <div className="m-2">
                    <div className="flex flex-col">
                      <div className="font-bold">State</div>
                      <div className="flex items-center m-1">
                        <input type="radio" id="United States" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:e.target.value, activity:object.activity,tag:object.tag,avgRate:object.avgRate};  setObject(newobject);  } else  { let newobject = { address:'', activity:object.activity,tag:object.tag,avgRate:object.avgRate};  setObject(newobject)}; }} value='United States' className="bg-white appearance-none border border-gray-300 rounded-full w-6 h-6 checked:bg-gray-600 checked:border-transparent mr-2" name="address"></input>
                        <label htmlFor="United States">United States</label>
                      </div>
                      <div className="flex items-center m-1">
                        <input type="radio" id="New Zealand" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:e.target.value, activity:object.activity,tag:object.tag,avgRate:object.avgRate};  setObject(newobject);  } else  { let newobject = { address:'', activity:object.activity,tag:object.tag,avgRate:object.avgRate};  setObject(newobject)}; }} value='New Zealand' className="bg-white appearance-none border border-gray-300 rounded-full w-6 h-6 checked:bg-gray-600 checked:border-transparent mr-2" name="address"></input> 
                        <label htmlFor="New Zealand">New Zealand</label>
                      </div>
                      <div className="flex items-center m-1">       
                        <input type="radio" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:e.target.value, activity:object.activity,tag:object.tag,avgRate:object.avgRate};  setObject(newobject);  } else  { let newobject = { address:'', activity:object.activity,tag:object.tag,avgRate:object.avgRate};  setObject(newobject)}; }} value='Finland' className="bg-white appearance-none border border-gray-300 rounded-full w-6 h-6 checked:bg-gray-600 checked:border-transparent mr-2" name="address"></input>
                        <label htmlFor="Finland">Finland</label>
                      </div>
                    </div>
              </div>
              <div className="m-2">
                    <div className="flex flex-col">
                      <div className="font-bold">Rating</div>
                      <div className="flex items-center m-1">
                        <input type="radio" id="5" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:object.address, activity:object.activity,tag:object.tag,avgRate:e.target.value};  setObject(newobject);  } else  { let newobject = { address:object.address, activity:object.activity,tag:object.tag,avgRate:''};  setObject(newobject)}; }} value='5' className="bg-white appearance-none border border-gray-300 rounded-full w-6 h-6 checked:bg-gray-600 checked:border-transparent mr-2" name="rate"></input>
                        <label htmlFor="5">5 ⭐</label>
                      </div>
                      <div className="flex items-center m-1">
                        <input type="radio" id="4" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:object.address, activity:object.activity,tag:object.tag,avgRate:e.target.value};  setObject(newobject);  } else  { let newobject = { address:object.address, activity:object.activity,tag:object.tag,avgRate:''};  setObject(newobject)}; }} value='4' className="bg-white appearance-none border border-gray-300 rounded-full w-6 h-6 checked:bg-gray-600 checked:border-transparent mr-2" name="rate"></input> 
                        <label htmlFor="4">≥4 ⭐</label>
                      </div>
                      <div className="flex items-center m-1">       
                        <input type="radio" id="3" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:object.address, activity:object.activity,tag:object.tag,avgRate:e.target.value};  setObject(newobject);  } else  { let newobject = { address:object.address, activity:object.activity,tag:object.tag,avgRate:''};  setObject(newobject)}; }} value='3' className="bg-white appearance-none border border-gray-300 rounded-full w-6 h-6 checked:bg-gray-600 checked:border-transparent mr-2" name="rate"></input>
                        <label htmlFor="3">≥3 ⭐</label>
                      </div>
                    </div>
              </div>
              </div>
              <div className="m-2">
                <div className="font-bold m-2">Tags</div>
              <button type="submit" id="all" onClick={(e)=>{setFilter(false);let newobject = { address:'', activity:'',tag:"",avgRate:object.avgRate};  setObject(newobject); setsort(false);}} className="bg-slate-200 text-black rounded-2xl px-3 h-[30px] my-1 mx-2 hover:bg-slate-400 hover:transparent" >All</button>
              <button type="submit" id="hill" onClick={(e)=>{setFilter(true); setFilterValue('') ; let newobject = { address:object.address , activity:object.activity,tag:'Hill',avgRate:object.avgRate};  setObject(newobject); }} className="bg-slate-200 text-black rounded-2xl px-3 h-[30px] my-1 mx-2 hover:bg-slate-400 hover:transparent text-sm" >Hill</button>        
              <button type="submit" id="beach" onClick={(e)=>{setFilter(true); setFilterValue('') ; let newobject = { address:object.address , activity:object.activity,tag:'Beach',avgRate:object.avgRate};  setObject(newobject);}} className="bg-slate-200 text-black rounded-2xl px-3 h-[30px] my-1 mx-2 hover:bg-slate-400 hover:transparent text-sm" >Beach</button>
              <button type="submit" id="forest" onClick={(e)=>{setFilter(true); setFilterValue('') ; let newobject = { address:object.address , activity:object.activity,tag:'Forest',avgRate:object.avgRate};  setObject(newobject);}} className="bg-slate-200 text-black rounded-2xl px-3 h-[30px] my-1 mx-2 hover:bg-slate-400 hover:transparent text-sm" >Forest</button>
              <button type="submit" id="lake" onClick={(e)=>{setFilter(true); setFilterValue('') ; let newobject = { address:object.address , activity:object.activity,tag:'Lake',avgRate:object.avgRate};  setObject(newobject);}} className="bg-slate-200 text-black rounded-2xl px-3 h-[30px] my-1 mx-2 hover:bg-slate-400 hover:transparent text-sm" >Lake</button>
              </div>
           </div>
         )}
         </div>
        </div>
         { 
        filter? <div className="justify-center"><CampRe value={filterValue} object={object}/></div> : 
        <div>
          <div className="my-10 flex flex-row mx-[90px] font-bold text-2xl">
          <div className="mx-4 text-4xl text-orange-400">{campJsonReady.count} </div>
          Campgrounds  Available
          </div> 
          <div style={{margin:"20Spx",display:"flex",flexDirection:"row",flexWrap:"wrap"
       ,justifyContent:"space-around" , alignContent:"space-around"}}>
        {
          campJsonReady.data.map((campItem:CampgroundItem)=> 
             <Link href={`campground/${campItem._id}`} className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:4 lg:p-8 mx-2" >
            <ProductCard carName={campItem.name} imgSrc={campItem.picture} address={campItem.address} tel={campItem.tel} campid={campItem._id}/>
             </Link>
          )
        }
      </div>
        </div>
       }
       </div>
        {/* <div className="my-10 flex flex-row mx-[90px] font-bold text-2xl">
          <div className="mx-4 text-4xl text-orange-400">{campJsonReady.count} </div>
          Campgrounds  Available
        </div>
        <div style={{margin:"20px",display:"flex",flexDirection:"row",flexWrap:"wrap"
       ,justifyContent:"space-around" , alignContent:"space-around"}}>
        {
          campJsonReady.data.map((campItem:CampgroundItem)=> 
             <Link href={`campground/${campItem._id}`} className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:4 lg:p-8" >
            <ProductCard carName={campItem.name} imgSrc={campItem.picture} address={campItem.address} tel={campItem.tel} campid={campItem._id}/>
             </Link>
          )
        }
      </div> */}

      {/* <button type="submit" onClick={(e)=>setFilter(!filter)} className="bg-indigo-600 text-white rounded-2xl px-3 h-[50px] font-bold my-5 mx-3 hover:bg-cyan-600 hover:transparent" >reverse</button> */}

      {/* <button type="submit" onClick={(e)=>{setFilter(false);let newobject = { address:'', activity:'',tag:"",avgRate:object.avgRate};  setObject(newobject); setsort(false);}} className="bg-indigo-600 text-white rounded-2xl px-3 h-[50px] font-bold my-5 mx-3 hover:bg-cyan-600 hover:transparent" >All</button>
       
      <button type="submit" onClick={(e)=>{setFilter(true); setFilterValue('') ; let newobject = { address:object.address , activity:object.activity,tag:'Hill',avgRate:object.avgRate};  setObject(newobject); }} className="bg-indigo-600 text-white rounded-2xl px-3 h-[50px] font-bold my-5 mx-3 hover:bg-cyan-600 hover:transparent" >Hill</button>

      <button type="submit" onClick={(e)=>{setFilter(true); setFilterValue('') ; let newobject = { address:object.address , activity:object.activity,tag:'Beach',avgRate:object.avgRate};  setObject(newobject);}} className="bg-indigo-600 text-white rounded-2xl px-3 h-[50px] font-bold my-5 mx-3 hover:bg-cyan-600 hover:transparent" >Beach</button> */}
      
      {/* <div className="items-center">
         <div onClick={sortButton} className="hover:text-black text-black px-4 py-1 rounded-md font-normal text-xl underline-offset-0">
           {sort ? 'FILTER⬏' : 'FILTER⬎'}
         </div>
         {sort && (
           <div className="flex flex-col items-center">
            <div id="main" className="w-[20%]">
            <div className="m-2">
                 <div className="flex flex-col">
                  Activity
                  <div className="flex items-center m-1">
                   <input type="radio" id="Hiking" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:object.address, activity:e.target.value,tag:object.tag,avgRate:object.avgRate};  setObject(newobject);} else {let newobject = { address:object.address, activity:'',tag:object.tag,avgRate:object.avgRate};  setObject(newobject);}}} value='Hiking' className="bg-white appearance-none border border-gray-300 rounded-full w-6 h-6 checked:bg-gray-600 checked:border-transparent mr-2" name="activity"></input>
                   <label htmlFor="Hiking">Hiking</label>
                  </div>
                  <div className="flex items-center m-1">
                   <input type="radio" id="Fishing" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:object.address, activity:e.target.value,tag:object.tag,avgRate:object.avgRate};  setObject(newobject);} else {let newobject = { address:object.address, activity:'',tag:object.tag,avgRate:object.avgRate};  setObject(newobject);}}} value='Fishing' className="bg-white appearance-none border border-gray-300 rounded-full w-6 h-6 checked:bg-gray-600 checked:border-transparent mr-2" name="activity"></input>
                   <label htmlFor="Fishing">Fishing</label>
                  </div>
                  <div className="flex items-center m-1">
                   <input type="radio" id="Biking" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:object.address, activity:e.target.value,tag:object.tag,avgRate:object.avgRate};  setObject(newobject);} else {let newobject = { address:object.address, activity:'',tag:object.tag,avgRate:object.avgRate};  setObject(newobject);}}} value='Biking' className="bg-white appearance-none border border-gray-300 rounded-full w-6 h-6 checked:bg-gray-600 checked:border-transparent mr-2" name="activity"></input>
                   <label htmlFor="Biking">Biking</label>
                  </div>
                 </div>
            </div>
              <div className="m-2">
                    <div className="flex flex-col">
                      Address
                      <div className="flex items-center m-1">
                        <input type="radio" id="United States" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:e.target.value, activity:object.activity,tag:object.tag,avgRate:object.avgRate};  setObject(newobject);  } else  { let newobject = { address:'', activity:object.activity,tag:object.tag,avgRate:object.avgRate};  setObject(newobject)}; }} value='United States' className="bg-white appearance-none border border-gray-300 rounded-full w-6 h-6 checked:bg-gray-600 checked:border-transparent mr-2" name="address"></input>
                        <label htmlFor="United States">United States</label>
                      </div>
                      <div className="flex items-center m-1">
                        <input type="radio" id="New Zealand" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:e.target.value, activity:object.activity,tag:object.tag,avgRate:object.avgRate};  setObject(newobject);  } else  { let newobject = { address:'', activity:object.activity,tag:object.tag,avgRate:object.avgRate};  setObject(newobject)}; }} value='New Zealand' className="bg-white appearance-none border border-gray-300 rounded-full w-6 h-6 checked:bg-gray-600 checked:border-transparent mr-2" name="address"></input> 
                        <label htmlFor="New Zealand">New Zealand</label>
                      </div>
                      <div className="flex items-center m-1">       
                        <input type="radio" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:e.target.value, activity:object.activity,tag:object.tag,avgRate:object.avgRate};  setObject(newobject);  } else  { let newobject = { address:'', activity:object.activity,tag:object.tag,avgRate:object.avgRate};  setObject(newobject)}; }} value='Nevada' className="bg-white appearance-none border border-gray-300 rounded-full w-6 h-6 checked:bg-gray-600 checked:border-transparent mr-2" name="address"></input>
                        <label htmlFor="Nevada">Nevada</label>
                      </div>
                    </div>
              </div>
              <div className="m-2">
                    <div className="flex flex-col">
                      Rating
                      <div className="flex items-center m-1">
                        <input type="radio" id="5" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:object.address, activity:object.activity,tag:object.tag,avgRate:e.target.value};  setObject(newobject);  } else  { let newobject = { address:object.address, activity:object.activity,tag:object.tag,avgRate:''};  setObject(newobject)}; }} value='5' className="bg-white appearance-none border border-gray-300 rounded-full w-6 h-6 checked:bg-gray-600 checked:border-transparent mr-2" name="rate"></input>
                        <label htmlFor="5">5 ⭐</label>
                      </div>
                      <div className="flex items-center m-1">
                        <input type="radio" id="4" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:object.address, activity:object.activity,tag:object.tag,avgRate:e.target.value};  setObject(newobject);  } else  { let newobject = { address:object.address, activity:object.activity,tag:object.tag,avgRate:''};  setObject(newobject)}; }} value='4' className="bg-white appearance-none border border-gray-300 rounded-full w-6 h-6 checked:bg-gray-600 checked:border-transparent mr-2" name="rate"></input> 
                        <label htmlFor="4">≥4 ⭐</label>
                      </div>
                      <div className="flex items-center m-1">       
                        <input type="radio" id="3" onChange={(e)=> {if (e.target.checked){setFilter(true); setFilterValue(''); let newobject = { address:object.address, activity:object.activity,tag:object.tag,avgRate:e.target.value};  setObject(newobject);  } else  { let newobject = { address:object.address, activity:object.activity,tag:object.tag,avgRate:''};  setObject(newobject)}; }} value='3' className="bg-white appearance-none border border-gray-300 rounded-full w-6 h-6 checked:bg-gray-600 checked:border-transparent mr-2" name="rate"></input>
                        <label htmlFor="3">≥3 ⭐</label>
                      </div>
                    </div>
              </div>
              </div>
           </div>
         )}
         </div> */}
        {/* {
          object.address
        }

         {
          object.activity
        } */}
       </div>

    )
}