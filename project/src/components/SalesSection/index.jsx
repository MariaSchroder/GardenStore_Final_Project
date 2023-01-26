import React from "react";
import s from './index.module.css'
import flowerbed_img from './media/flowerbed_img.png'

export default function SalesSection() {
  return (
    <div  className='wrapper'>
       <section className={s.sales_section}>
          
          <div className={s.info_block}>
            <p>Sale</p>
            <p>In honor of the new season</p>
            <a href= '#'>All promotions</a>
            
            
            <p>More</p>
          </div>
          
          <img src={ flowerbed_img } alt="flowerbed" />
        
        </section>
    </div>
  );
}
