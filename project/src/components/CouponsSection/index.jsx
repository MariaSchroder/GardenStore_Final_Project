import React from "react";
import s from './index.module.css'
import gnome_img from './media/gnome_img.png'

export default function CouponsSection() {
  return (
    <section className={['wrapper', s.coupons_section].join(' ')}>
      <img src={gnome_img} alt="gnome" />
      
      <div>
        <p className={s.discount}>Discount 5%</p>
        <p className={s.first_order}>on first order</p>
      </div>
        
        
        <form className={s.discount_form} id='coupon'>
          <input type="text" name="telNumber" placeholder="+49" />
          <button>Get a discount</button>
        </form>
        
       
       
   
    </section>
  );
}