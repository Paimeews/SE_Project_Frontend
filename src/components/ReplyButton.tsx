'use client'
import React from "react";
import { useState } from "react";
import addReply from "@/libs/addReply";
import RefreshActionReplys from "../../refreshReply";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export default function ReplyButton({reviewId, token, checkCanReply} : {reviewId : string, token: string|undefined, checkCanReply:boolean}) {

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
    <div>
      <button onClick={()=>setShowButtons(!showButtons)} className="bg-indigo-600 text-white hover:bg-cyan-600 px-4 py-1 rounded-xl font-bold underline-offset-0 my-3 mx-2">
        {showButtons ? 'REPLY' : 'REPLY'}
      </button>
      {showButtons ?
        <div className="mx-5 flex flex-row w-full justify-center">
            <input type="text" id="replyText" name="replyText" placeholder="Add your reply" 
            className="border border-2 text-center mx-2"
            onChange={(e) => setReplyText(e.target.value)}/>
            <div className="w-fit h-fit font-semibold px-2 py-2" onClick={() => {addReply(replyText, reviewId, token , checkCanReply);  RefreshActionReplys();}}>SEND</div>
        </div> : null
              }
    </div>
  );
}


// export default ButtonComponent;