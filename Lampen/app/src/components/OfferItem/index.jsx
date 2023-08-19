import React from 'react'
import s from './style.module.css'
import { BsArrowRight } from "react-icons/bs";

export default function OfferItem({title, img}) {
  return (    
    <div className={s.item}>
        <img src={img} alt={title} />  
        <div className={s.info}>   
           <p>{title}</p>
           <button> <BsArrowRight /> </button>
         </div> 
    </div>
  )
}