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
  
  const random_id = Math.round(Math.random() * 50);
  console.log(random_id);
  
  return (
    <section className={s.sales_section}>
      <div>
        <p>Sale</p>
        <div className={s.sales_card}>
          {

            products.slice(0, 4)
                      .map( el => <SalesSectionCard key={el.id} {...el} />)
          }
        </div>
      </div>
         
    </section>
  );
}
