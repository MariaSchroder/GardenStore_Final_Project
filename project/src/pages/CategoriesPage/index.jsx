import React, { useEffect } from "react";
import s from './index.module.css'
import { useDispatch, useSelector } from "react-redux";
import { load_categories } from "../../request/categories_req";
import CategoriesContainer from "../../components/CategoriesContainer";

export default function CategoriesPage() {
  
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(load_categories)
  }, []);
  
  return (
    <div>
      <p className={s.category_p}>Categories</p>
      
      <div className={s.category_page}>
        {
          categories.map(el => <CategoriesContainer key={el.id} {...el} />)
        }
      </div>
      
    </div>
  );
}
