

export default function replylist({replyItems} : {replyItems:ReplyItem}) {
     
   
    return (
        <div className="bg-slate-200 my-3 p-3">
            <div className="font-semibold "> {replyItems.user.name}</div>
            <div> {replyItems.replyContent}</div>
          
        </div>
    )
}