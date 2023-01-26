import React from "react";
import s from './index.module.css'
import { Link } from 'react-router-dom'
import logo from './media/logo.png'
import { BsHandbag } from 'react-icons/bs'

export default function Nav() {
  return (
    <header className={['wrapper', s.nav_container].join(' ')}>
      <div className={s.nav_left_container }>
        <Link to='/'><img src={ logo } alt="logo" /></Link> 
        <p>Catalog</p>
      </div> 
      
      <nav className={s.nav_right_container }>
        <Link to='/categories'>Categories</Link>
        <p><a href="#">Coupon</a></p>
        <p><a href="#">Sale</a></p>
        <p>Contacts</p> 
        <Link to='/cart' className={s.cart_logo}><BsHandbag /></Link>
      </nav>
      
    </header>
  );
}
