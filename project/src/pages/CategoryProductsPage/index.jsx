import React, { useEffect } from "react";
import s from './index.module.css'
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { load_category_products } from "../../request/categoryProducts_req";
import CategoryProductCard from "../../components/CategoryProductCard";


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


      <div>   
        <div>
          <span>Price</span>
          <form>
            <input type="number" name="min" placeholder="from" min="0"/>
            <input type="number" name="max" placeholder="to" />
            <button>Search</button>
          </form>
        </div>

        <div>
          <p>Discounted items</p>
          <input type="checkbox"/>
        </div>

        <div>
          <p>Sorted by</p>
          <select>
            <option value="default">default</option>
            <option value="title">title</option>
            <option value="price">price</option>
          </select>
        </div>
      </div>
      
      

      <div className={s.category_products}>
        {
          category_products.map(el => <CategoryProductCard key={el.id} {...el} />)
        }
      </div>
    </div>
  );
}
