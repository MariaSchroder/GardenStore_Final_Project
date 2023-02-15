import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../../components/CartCard";
import s from './index.module.css'
import { clearCart } from "../../store/reducers/cart";
import { Link } from "react-router-dom";


export default function CartPage() {
  
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const clear_cart = () => dispatch(clearCart()); 
  
  const total = Math.round(cart.reduce((prev, { discont_price, count }) => prev + discont_price * count, 0)).toFixed(2);



  return (
    <div className={s.cart}>
      <p>Shopping cart</p>
     
      <div className={s.cart_clear_back}>
        <p  onClick={clear_cart}>Clear cart</p>
        <Link to="/categories">
          <p>Back to the store <span>&#62;</span></p>
        </Link>
      </div>
      
      
        
      <div className={s.cart_end_order}>
        {
          cart.length === 0
          ? <p>The cart is empty ...</p>
          : <>  
              <div>
                {
                  cart.map(el => <CartCard key={el.id} {...el} />)
                }
              </div>
            </> 
        }

        <div className={s.order}>
          <p>Order details</p>
      
          <div className={s.total_price}>
            <p>Total</p>
            <span>
              { total }
              <span> €</span>
            </span>
          </div>

          <form className={s.order_form} id='order'>
            <input type="text" name="telNumber" placeholder="+49" />
            <button className={s.btn}>Order</button>
          </form>
        </div>

      </div>
    </div>
  );
}
