import React from "react";
import s from './index.module.css'


export default function CategorySection() {
  return (
    <div className={['wrapper', s.categories_section].join(' ')}>
      <section>
       
        <p>Categories</p>
        
        <p>All categories</p>
       
      </section>
    </div>
  );
}
