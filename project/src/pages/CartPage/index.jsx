import React from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
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
            <Button>Order</Button>
          </form>
        </div>

      </div>
    </div>
  );
}
