import React from "react";
import CategoriesContainer from "../CategoriesContainer";
import s from './index.module.css'


export default function CategorySection() {
  return (
    <div className='wrapper'>
      <section className={s.categories_section}>
        
        <div className={s.categories_route}>
          <span className={s.categories_catalog}>Catalog</span>
          
          <button className={s.allCategories}>All categories</button>
        </div>
        
        <CategoriesContainer />
      </section>
    </div>
  );
}
