import React, {useEffect} from "react";
import s from './index.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { load_all_products } from "../../request/allProducts_req";
import SalesSectionCard from "../SalesSectionCard";


export default function SalesSectionContainer() {
  
  const products = useSelector(state => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(load_all_products)
  }, []);
  

  
  return (
    <section className={s.sales_section}>
      <div>
        <p className={s.sales_block}>Sale</p>
        
        <div className={s.sales_card}>
          {
            products.sort(() => 0.5 - Math.random())
                    .slice(0, 3)
                    .map( el => <SalesSectionCard key={el.id} {...el} />)
          }
        </div>
      
      </div>
         
    </section>
  );
}
