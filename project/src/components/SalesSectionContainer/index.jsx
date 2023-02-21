import React, {useEffect} from "react";
import s from './index.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { load_all_products } from "../../request/allProducts_req";
import SalesSectionCard from "../SalesSectionCard";
import { Link } from "react-router-dom";


export default function SalesSectionContainer() {
  
  const products = useSelector(state => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(load_all_products)
  }, []);
  

  return (
    <section className={s.sales_section} id="sale">
      <div>
        <div className={s.sales_route}>
          <span className={s.sales_block}>Sale</span>
          
          <Link to="/allproducts">
            <button className={s.allSales}>All sales</button>
          </Link>
        </div>
        
        <div className={s.sales_card}>
          {
            products.sort(() => 0.5 - Math.random())
                    .slice(0, 8)
                    .map( el => <SalesSectionCard key={el.id} {...el} />)
          }
        </div>
      </div> 
    </section>
  );
}

