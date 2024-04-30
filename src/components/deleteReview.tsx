'use client'
import React from "react";
import { useState } from "react";
import addReply from "@/libs/addReply";
import RefreshActionReplys from "../../refreshReply";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import deleteReview from "@/libs/deleteReview";
import RefreshActionReviews from "../../refreshActionReviews";


export default function DeleteReviewButton({reviewId, token, isAdmin} : {reviewId : string, token: string|undefined, isAdmin: boolean}) {

// const ButtonComponent: React.FC = ({id} : {id:String}) => {

  const [showButtons, setShowButtons] = useState<boolean>(false);
  const [replyText, setReplyText] = useState<string>("");

  // const handleButtonClick = () => {
  //   setShowButtons(!showButtons);
  // };

  // const postReply = () => {
  //   addReply(replyText, reviewId)
  //   revalidateTag('replys')
  // }


  return (
    <>
    {isAdmin?
        <div>
            <div className="rounded-xl px-4 py-1 hover:bg-indigo-600 text-white bg-green-500 font-bold mx-2 my-3" onClick={() => {deleteReview(reviewId, token); RefreshActionReviews();}}>DELETE</div>
        </div> 
        : null
    }
    </>
  );
}


// export default ButtonComponent;