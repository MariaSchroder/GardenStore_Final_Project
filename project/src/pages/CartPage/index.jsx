import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../../components/CartCard";
import s from './index.module.css'
import { clearCart } from "../../store/reducers/cart";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


export default function CartPage() {
  
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const clear_cart = () => dispatch(clearCart()); 
  
  const total = cart.reduce((prev, el) => prev + el.discont_price * el.count, 0).toFixed(2);


  const { register, handleSubmit, formState: { errors }, reset } = 
  useForm({
    mode:'onBlur'
  });

  const submit = (data) => {
    console.log(data);
    reset();
  };
  
  console.log(cart);

  const telNumberRegister = register('telNumber', {
    required: ' * The field "telephone number" is required',
    pattern: {
      value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      message: '* The password must contain only numbers'
    }
  });


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

          <form className={s.order_form} id='order' onSubmit={handleSubmit(submit)}>
            <input 
              type="text" 
              name="telNumber" 
              placeholder="+49 ..."
              {...telNumberRegister}
              />
            <button className={s.btn} onSubmit={submit}>Order</button>
          </form>

          <div className={s.error_message}>
            {errors.telNumber && <p>{errors.telNumber?.message}</p>}
          </div>
        </div>

      </div>
    </div>
  );
}

