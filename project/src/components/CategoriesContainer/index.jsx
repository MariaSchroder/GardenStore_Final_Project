import React from "react";
import MainPage from "../../pages/MainPage";
import s from './index.module.css'

export default function CategoriesContainer({ title, image }) {
  return (
    <div className={s.categories}>
      
      <img src={`http://127.0.0.1:3333${image}`} alt={ title } />
      <p className={s.categories_title}>{ title }</p>
      

    </div>
  );
}
