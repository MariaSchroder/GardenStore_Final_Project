import React, { useEffect } from "react";
import s from './index.module.css'
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { load_category_products } from "../../request/categoryProducts_req";
import CategoryProductCard from "../../components/CategoryProductCard";
import ProductsSort from "../../components/ProductsSort";


export default function CategoryProductsPage() {
  
  const { category } = useParams();
  const dispatch = useDispatch();
  
  const category_products = useSelector(state => state.categoryProducts);
  const category_title = useSelector(state => state.categories);
  
  
  useEffect(() => {
    dispatch(load_category_products(category))
  }, []);

  const categoryTitle = category_title.length >= 1 ? category_title[category - 1].title : "";

  
  return (
    <div className={s.products_page}>

      <Link to="/categories">
        <p>Back to the store <span>&#62;</span></p>
      </Link>
      
      <p>{categoryTitle}</p>  

      <ProductsSort />
    
      <div className={s.category_products}>
        {
          category_products
            .filter(el => !el.hide)
            .map(el => <CategoryProductCard key={el.id} {...el} />)
        }
      </div>
    </div>
  );
}


