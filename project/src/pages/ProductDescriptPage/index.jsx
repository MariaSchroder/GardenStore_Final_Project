import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import s from './index.module.css'
import { useDispatch, useSelector } from "react-redux";
import { load_product } from "../../request/product_req";
import Button from "../../components/Button";


export default function ProductDescriptPage() {
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);

  useEffect(() => {
    dispatch(load_product(id))
  }, [])

  const { title, price, discont_price, description, image } = product;

  const discount = Math.round(((price - discont_price) / price) * 100);

  
  
  
  return (
    <div className={s.descr_page}>
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
        
          <Button>To cart</Button>
          <p className={s.descr}>Description:</p>
          <p className={s.product_descr}>{ description }</p>
          
          
        </div>
  
      </div>
    </div>
  
  );
}
