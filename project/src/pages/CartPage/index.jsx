import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../../components/CartCard";
import s from './index.module.css'

export default function CartPage() {
  
  const cart = useSelector(state => state.cart);
  console.log(cart)
  
  return (
    <div className={s.cart}>
      <p>Shopping cart</p>
      
      <div className={s.cart_clear_back}>
        <p>Clear cart</p>
        <p>Back to the store &#62;</p>
      </div>
        
      <div className={s.cart_end_order}>
        <div>
          {
            cart.map(el => <CartCard key={el.id} {...el} />)
          }
        </div>

        <div>
          <p>Order details</p>
      
          <div>
            <p>Total</p>
            <p>total price</p>
          </div>

          <form className={s._form} id='order'>
            <input type="text" name="telNumber" placeholder="+49" />
            <button>Order</button>
          </form>
        </div>

      </div>
    </div>
  );
}
