import React from "react";
import s from './index.module.css'
import { Link } from 'react-router-dom'
import logo from './media/logo.png'
import { BsHandbag } from 'react-icons/bs'


export default function Nav() {
  return (
    <header className={s.nav_container}>
      <div className={s.nav_left_container }>
        <Link to='/'><img src={ logo } alt="logo" /></Link> 
        <Link to='/allproducts' className={s.catalog}>Catalog</Link>
      </div> 
      
      <nav className={s.nav_right_container }>
        <Link to='/categories'>Catalogs</Link>
        <p><a href="/#coupon">Coupon</a></p>
        <p><a href="/#sale">Sale</a></p>
        <p><a href="#contacts">Contact</a></p>
        <Link to='/cart' className={s.cart_logo}><BsHandbag /></Link>
      </nav>
      
    </header>
  );
}
