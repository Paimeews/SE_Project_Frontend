
import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import getUserProfile from "@/libs/getUserProfile";
// import { profile } from "console";
// import { ReservationItem } from "../../interfaces"

// var userid:string;



//    async function eiei2() {
//     const session = await getServerSession(authOptions)
//     if (!session || !session.user.token ) return 
     
       
//        const profile = await getUserProfile(session.user.token)
//        userid = profile.data._id
//        console.log("here")
//        console.log(profile.data._id)
// }





type CartState = {
    carItems: ReservationItem[]
}

const initialState:CartState = {carItems:[]}

export const cartSlice =  createSlice({
    name: "cart",
    initialState,
    reducers: {
        addReservation: (state,action:PayloadAction<ReservationItem>)=> {
        //   eiei2()
        //   action.payload.user = userid
         
          state.carItems.push(action.payload)
          
        },
        removeReservation: (state, action:PayloadAction<ReservationItem>) => {
         const remainItems =  state.carItems.filter( obj => {
            return ( (obj.campground !== action.payload.campground)
             || (obj.bookDate !== action.payload.bookDate)
              || (obj.night !== action.payload.night));
            
          })
          state.carItems = remainItems
          console.log("delete")
        }



        
    }
})

export const { addReservation,removeReservation} = cartSlice.actions
export default cartSlice.reducer
