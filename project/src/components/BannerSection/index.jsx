import React from "react";
import SalesSection from "../SalesSection";
import s from './index.module.css'
import flowerbed_img from './media/flowerbed_img.png'


export default function BannerSection() {
  
  
  return (
    <div  className='wrapper'>
       <section className={s.sales_section}>
          
          <div className={s.info_block}>
            <p>Sale</p>
            <p>New season</p>
            <a href='#sale'>Sale</a>
            <p>Learn more</p>
          </div>
          
          <img src={ flowerbed_img } alt="flowerbed" />
        
        </section>
    </div>
  );
}
