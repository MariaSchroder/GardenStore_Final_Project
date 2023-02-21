import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import s from './index.module.css'
import { useDispatch, useSelector } from "react-redux";
import { load_product } from "../../request/product_req";
import { addToCart } from '../../store/reducers/cart'


export default function ProductDescriptPage() {
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);

  useEffect(() => {
    dispatch(load_product(id))
  }, [])

  const { title, price, discont_price, description, image } = product;

  const discount = Math.round(((price - discont_price) / price) * 100);

  const add_to_cart = () => dispatch(addToCart({id: +id, title, image, price, discont_price }))
  
  
  return (
    <div className={s.descr_page}>

      <Link to="/categories">
        <p>Back to the store <span>&#62;</span></p>
      </Link>

      <p>{ title }</p>
      
      <div className={s.descr_page_info}>
        <img src={`http://localhost:3333${image}`} alt={ title } />

        <div>
          <div className={s.product_price_block}>
            <span> 
              { discont_price }
              <span> €</span>
            </span>
            <p>{ price } €</p>
            <p>- { discount } %</p>
          </div>
        
          <button className={s.btn} onClick={add_to_cart}>To cart</button>
          <p className={s.descr}>Description:</p>
          <p className={s.product_descr}>{ description }</p>
        </div>
      </div>
    </div>
  );
}

