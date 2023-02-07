import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import s from './index.module.css'
import { useDispatch, useSelector } from "react-redux";
import { load_product } from "../../request/product_req";


export default function ProductDescriptPage() {
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);

  useEffect(() => {
    dispatch(load_product(id))
  }, [])

  const { title, price, discont_price, description, image } = product;

  const discount = Math.round(((price - discont_price) / price) * 100);

  console.log(product)
  return (
    <div>
      
      <div>
        <p>{ title }</p>
        <img src={`http://localhost:3333${image}`} alt={ title } /> 
      </div>
      
      <div>
        
        <div className={s.category_price_block}>
          <p>{ discont_price } €</p>
          <p>{ price } €</p>
          <p>{ discount } %</p>
        </div>
        
        <button>To cart</button>
        <p>Description:</p>
        { description }
        
      </div>


    </div>
  );
}
