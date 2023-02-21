import React, { useEffect } from "react";
import s from './index.module.css'
import { useDispatch, useSelector } from "react-redux";
import { load_categories } from "../../request/categories_req";
import CategoriesCards from "../../components/CategoriesCards";


export default function CategoriesPage() {
  
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(load_categories)
  }, []);
  
  
  return (
    <div className={s.categories_container}>
      <div>
        <p className={s.categories_p}>Categories</p>
      
        <div className={s.categories_page}>
          {
            categories.map(el => <CategoriesCards key={el.id} {...el} />)
          }
        </div>
      </div>
    </div>
  );
}

