import React from "react";
import s from './index.module.css'

export default function CategoriesContainer({ title, image }) {
  return (
    <div>
        
      <img src={`http://127.0.0.1:3333${image}`} alt={ title } />
      <p>{ title }</p>
      
    </div>
  );
}
