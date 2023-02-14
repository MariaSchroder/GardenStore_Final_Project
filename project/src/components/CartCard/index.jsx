import React from "react";
import s from './index.module.css'
import { RiCloseLine } from 'react-icons/ri'
import { useDispatch } from "react-redux";
import { deleteCard } from "../../store/reducers/cart"; 





export default function CartCard({ id, title, price, discont_price, image, count }) {
  
  const dispatch = useDispatch();
  
  const delete_card = () => dispatch(deleteCard(id)); 

  
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
          
          <RiCloseLine onClick={delete_card} className={s.cross}/>
          
          
       
        
        
        </div>
      </div>
    
  )
}
