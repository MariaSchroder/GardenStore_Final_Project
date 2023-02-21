import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/reducers/cart";
import s from './index.module.css'

export default function AllProducts({id, title, image, price, discont_price }) {
  

  const discount = Math.round(((price - discont_price) / price) * 100);

  const dispatch = useDispatch();
  const add_to_cart = () => dispatch(addToCart({id, title, image, price, discont_price }));

  
  return (
    <div className={s.all_products_card}>
      <Link to={`/products/${id}`}>
        <img src={`http://localhost:3333${image}`} alt={title} />
      
        <div className={s.product_price_block}>
          <span> 
            { discont_price }
            <span> €</span>
          </span>
          <p>{ price } €</p>
          <p>- { discount } %</p>
        </div>
      
        <p className={s.product_title}>{title}</p>
      </Link>

      <button onClick={add_to_cart}>Add to cart</button>
  </div>
    
  );
}


