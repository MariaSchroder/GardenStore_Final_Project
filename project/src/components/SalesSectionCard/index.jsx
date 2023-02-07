import React from "react";
import s from './index.module.css'

export default function SalesSectionCard({ id, title, image, price, discont_price }) {
  
  const discount = Math.round(((price - discont_price) / price) * 100);
  
  
  return (
    <div className={s.sales_section}>

        <img src={`http://localhost:3333${image}`} alt={ title } />
        
        <div className={s.price_block}>
          <p>{ discont_price } €</p>
          <p>{ price } €</p>
          <p>{ discount } %</p>
        </div>
        
        <p>{ title }</p>
   
    </div>
  );
}



