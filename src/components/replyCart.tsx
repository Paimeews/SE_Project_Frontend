import Replylist from "./replylist"
import getReplys from "@/libs/getReplys"
export default async function replyCart({ReviewId} : {ReviewId : string}) {
   const util = require('util')
   const replys = await getReplys(ReviewId)
    //เเตก array
   util.inspect(replys, {showHidden: false, depth: null, colors: true})
  //  console.log(replys)

   

    return (
       
        
           <div className="bg-slate-400"> 
           {
            replys.data.map((replyItems:ReplyItem)=>(
                 
                <Replylist replyItems={replyItems}/>
                
              ))
        }

           </div>

    )
}
