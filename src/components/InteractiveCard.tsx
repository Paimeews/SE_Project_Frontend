
'use client'
import styles from './productcard.module.css'
import Image from 'next/image'
export default function InteractiveCard( {children,contentName} : {children:React.ReactNode,contentName:string}) {
   function OnCardSelected() {
    alert("You select " +  contentName);
   }

   function onCardMouseAction (event:React.SyntheticEvent) {
    if (event.type == 'mouseover') {
       event.currentTarget.classList.remove('shadow-lg');
       event.currentTarget.classList.add('shadow-2xl');
       event.currentTarget.classList.remove('bg-white');
       event.currentTarget.classList.add('bg-slate-200');
    } else {
        event.currentTarget.classList.remove('shadow-2xl');
        event.currentTarget.classList.add('shadow-lg');
        event.currentTarget.classList.remove('bg-slate-200');
        event.currentTarget.classList.add('bg-white');

    }
   }


    return (
        <div className='w-[300px] bg-white h-[400px] rounded-lg shadow-lg '
         
         onMouseOver={(e)=>onCardMouseAction(e)}
         onMouseOut={(e)=>onCardMouseAction(e) }>
         {children}
        </div>
    )
}