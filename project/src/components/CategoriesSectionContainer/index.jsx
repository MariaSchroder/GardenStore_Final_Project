import React, { useEffect }from "react";
import s from './index.module.css'
import { useSelector, useDispatch } from "react-redux";
import CategorySectionCards from "../CategoriesSectionCard";
import { load_categories } from "../../request/categories_req";
import { Link } from "react-router-dom";


export default function CategoriesSectionContainer() {
  
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(load_categories)
  }, [])


  return (
    <section className={s.categories_section}>
      <div>
        <div className={s.categories_route}>
          <span className={s.categories_catalog}>Catalog</span>
          
          <Link to="/categories">
            <button className={s.allCategories}>All categories</button>
          </Link>
        </div>
        
       <div className={s.categories_card}>
          {
            categories.sort(() => 0.5 - Math.random())
                      .slice(0, 4)
                      .map(el => <CategorySectionCards key={el.id} {...el}/>)
          }
       </div>
      </div>
    </section>
  );
}

