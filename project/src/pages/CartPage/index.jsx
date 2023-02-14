import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../../components/CartCard";
import s from './index.module.css'
import { clearCart } from "../../store/reducers/cart";

export default function CartPage() {
  
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const clear_cart = () => dispatch(clearCart()); 
  
  return (
    <div className={s.cart}>
      <p>Shopping cart</p>
     
      <div className={s.cart_clear_back}>
        <p  onClick={clear_cart}>Clear cart</p>
        <p>Back to the store <span>&#62;</span></p>
      </div>
      
      
        
      <div className={s.cart_end_order}>
        <div>
          {
            cart.map(el => <CartCard key={el.id} {...el} />)
          }
        </div>

        <div className={s.order}>
          <p>Order details</p>
      
          <div className={s.total_price}>
            <p>Total</p>
            <span> 
              12345
              {/* { discont_price } */}
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
