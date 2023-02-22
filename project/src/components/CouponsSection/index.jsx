import React from "react";
import s from './index.module.css'
import gnome_img from './media/gnome_img.png'
import { useForm } from "react-hook-form";


export default function CouponsSection() {
 
  const { register, handleSubmit, formState: { errors }, reset } = 
  useForm({
    mode:'onBlur'
  });

  const submit = (data) => {
    console.log(data);
    reset();
  };
  
  const telNumberRegister = register('telNumber', {
    required: ' * The field "telephone number" is required',
    pattern: {
      value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      message: '* The password must contain only numbers'
    }
  });


  return (
    <section className={s.coupons_section} id='coupon'>
      <div>
        <img src={gnome_img} alt="gnome" />
      
        <div>
          <p className={s.discount}>5% off</p>
          <p className={s.first_order}>on the first order</p>
        </div>
        
        <form className={s.discount_form} id='coupon' onSubmit={handleSubmit(submit)}>
          <input 
            type="text" 
            name="telNumber" 
            placeholder="+49 ..."
            {...telNumberRegister}
          />
          <button onSubmit={submit}>Get a discount</button>
        </form>

        <div className={s.error_message}>
          {errors.telNumber && <p>{errors.telNumber?.message}</p>}
        </div>
      </div>
    </section>
  );
}


