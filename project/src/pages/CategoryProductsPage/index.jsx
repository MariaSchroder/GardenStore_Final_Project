import React, { useEffect } from "react";
import s from './index.module.css'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { load_category_products } from "../../request/categoryProducts_req";
import ProductCard from "../../components/ProductCard";

export default function CategoryProductsPage() {
  
  const { category } = useParams();
  const dispatch = useDispatch();
  const category_products = useSelector(state => state.categoryProducts);
  
  useEffect(() => {
    dispatch(load_category_products(category))
  }, []);
  
  
  
  console.log(category_products);
  
  
  
  return (
    <div>
      <p>{ category } </p>  
      <div>
        {/* {
          category_products.map(el => <ProductCard key={el.id} {...el} />)
        } */}
      </div>
    
    </div>
  );
}
