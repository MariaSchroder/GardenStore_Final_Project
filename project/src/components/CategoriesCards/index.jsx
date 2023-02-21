import React from 'react'; 
import { Link } from 'react-router-dom';
import s from './index.module.css' 


export default function CategoriesCards({ id, title, image }) { 
  
return ( 
  <div className={s.categories}> 
    
    <Link to={`/categories/${id}`}>
      <img src={`http://localhost:3333${image}`} alt={ title } /> 
      <p className={s.categories_title}>{ title }</p> 
    </Link>
    
  </div> 
  ); 
}
