//'use client'
import getUserProfile from "@/libs/getUserProfile";
import Replylist from "./replylist"
import getReplys from "@/libs/getReplys"
import ReplyCart from "./replyCart"
import React from "react";
import { useState } from "react";
import ReplyButton from "./ReplyButton";
import { profile } from "console";
import deleteReview from "@/libs/deleteReview";
import DeleteReviewButton from "./deleteReview";

export default async function reviewlist({reviewItems, token, checkCanReply, role} : {reviewItems:ReviewItem, token:string|undefined, checkCanReply:boolean, role:string|undefined}) {
//    const util = require('util')
//    const replys = await getReplys(reviewItems._id)
//     //เเตก array
//    util.inspect(replys, {showHidden: false, depth: null, colors: true})
//    console.log(replys)
    // const [showButtons, setShowButtons] = useState<boolean>(false);
    // const [replyText, setReplyText] = useState<string>("");

    // const handleButtonClick = () => {
    // setShowButtons(!showButtons);
    // };

    

    var isAdmin = false

    if (token != undefined) {
        const profile = await getUserProfile(token)
        if (profile.data.role == 'admin') {
            isAdmin = true
        }
    }
   

    return (
        <div className="bg-white my-3">
            <div className="font-semibold pt-3"> {reviewItems.user.name}</div>
            <div className="pt-1"> {reviewItems.content}</div>
            <div className="flex flex-row justify-center">
                <ReplyButton reviewId={reviewItems._id} token={token} checkCanReply={checkCanReply}/>

                <DeleteReviewButton reviewId={reviewItems._id} token={token} isAdmin={isAdmin}/>
            </div>
{/* 
           <div className="bg-slate-400"> 
           {
            replys.data.map((replyItems:ReplyItem)=>(
                 
                <Replylist replyItems={replyItems}/>
                
              ))
        }

           </div> */}

           <ReplyCart ReviewId={reviewItems._id}/>

        </div>
    )
}
