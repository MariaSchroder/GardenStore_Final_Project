import React, { useEffect } from "react";
import s from './index.module.css'
import { useDispatch, useSelector } from "react-redux";
import AllProducts from "../../components/AllProducts";
import { load_all_products } from "../../request/allProducts_req";
import { Link } from "react-router-dom";
import AllProductsSort from "../../components/AllProductsSort";


export default function AllProductsPage() {
  
  const dispatch = useDispatch();
  const allProducts = useSelector(state => state.allProducts);

  useEffect(() => {
    dispatch(load_all_products)
  }, []);
  
  
  return (
    <div className={s.all_products_container}>
      
      <Link to="/categories">
        <p>Back to the store <span>&#62;</span></p>
      </Link>

      <p>All Products</p>
      
      <AllProductsSort />

      <div className={s.all_products_page}>
        {
          allProducts
            .filter(el => !el.hide)
            .map(el => <AllProducts key={el.id} {...el} />)
        }
      </div>
    </div>
  );
}

