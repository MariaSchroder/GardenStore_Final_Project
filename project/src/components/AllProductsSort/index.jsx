import React from "react";
import s from './index.module.css'
import { useDispatch } from "react-redux";
import { searchAllProductsPrice, sortAllProducts } from "../../store/reducers/allProducts";

export default function AllProductsSort() {
  
  const dispatch = useDispatch();
  const sort_all_products = event => dispatch(sortAllProducts(event.target.value));

  const search_all_products = event => {
    event.preventDefault();
    const { min, max } = event.target;
    const min_value = min.value || 0;
    const max_value = max.value || Infinity;
    dispatch(searchAllProductsPrice({ min_value, max_value }))
  }
  

  return (
    <div className={s.sort}>   
        
        <div className={[s.sort, s.sort_price].join(' ')}>
          <span>Price</span>
          <form onSubmit={search_all_products}>
            <input type="number" name="min" placeholder="from" />
            <input type="number" name="max" placeholder="to" />
            <button>Search</button>
          </form>
        </div>

        <div className={[s.sort, s.sort_sale_price].join(' ')}>
          <span>Discounted items</span>
          <input type="checkbox"/>
        </div>

        <div className={[s.sort, s.sort_by].join(' ')}>
          <span>Sorted by</span>
          <select onInput={sort_all_products}>
            <option value="default">default</option>
            <option value="title">title</option>
            <option value="price">price</option>
          </select>
        </div>
      </div>
  );
}

