import React,{useEffect} from 'react'
import './Notification.css'

function Notification({message , show, onClose }) {
useEffect(()=>{
    if (show){
        const timer = setTimeout(onClose, 3000);
        return ()=> clearTimeout(timer);

        }
},[show, onClose]);

  return (
    show?(
    <div className='notification'>{message}</div>
  ): null
);
}

export default Notification