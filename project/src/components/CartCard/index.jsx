import React from "react";
import s from './index.module.css'
import { RiCloseLine } from 'react-icons/ri'



export default function CartCard({ id, title, price, discont_price, image, count }) {
  

  
  return (
    <div className={s.cart_card}>
      
      <div className={s.products_overview}>
        
          <img src={`http://localhost:3333${image}`} alt={ title } /> 
          <p>{ title }</p>
          
          <div className={s.triggers}>
            <button>&ndash;</button>
            <p>{ count }</p>
            <button>+</button>
          </div>
          
          <div className={s.price_block}>
            <span> 
              { discont_price }
              <span> €</span>
            </span>
            <p>{ price } €</p>
          </div>
          
          <RiCloseLine className={s.cross}/>
       
        
        
        </div>
      </div>
    
  )
}
