import React from "react";
import s from './index.module.css'

export default function SalesSectionCard({ id, title, image, price, discont_price }) {
  
  const random_id = Math.round(Math.random(id) * 50);
  console.log(random_id);
  
  
  return (
    <div className={s.sales_section}>

        <img src={`http://localhost:3333${image}`} alt={ title } />
        <div>
          <p>{ discont_price }€</p>
          <p>{ price }€</p>
          <p>7%</p>
        </div>
        <p>{ title }</p>
   
    </div>
  );
}



