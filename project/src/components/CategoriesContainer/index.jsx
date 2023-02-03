import React from 'react'; 
import s from './index.module.css' 


export default function CategoriesContainer({ title, image }) { 
  
return ( 

  <div className={s.categories}> 
    <img src={`http://localhost:3333${image}`} alt={ title } /> 
    <p className={s.categories_title}>{ title }</p> 
  </div> 
  ); 
}