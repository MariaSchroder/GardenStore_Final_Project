import React from "react";
import s from './index.module.css'
import { Link } from 'react-router-dom'
import logo from './media/logo.png'
import { BsHandbag } from 'react-icons/bs'
import { HashLink } from "react-router-hash-link";


export default function Nav() {
  
  return (
    <header className={s.nav_container}>
      <div className={s.nav_left_container}>
        <Link to='/'>
          <img src={ logo } alt="logo" />
          <span className={s.shop_title}>Garden store</span>
        </Link> 
      </div> 
      
      <nav className={s.nav_right_container }>
        <Link to='/categories'>Catalogs</Link>
        <Link to='/allproducts'>All products</Link>
        
        <HashLink smooth to='/#coupon'>Coupon</HashLink>
        <HashLink smooth to='/#sale'>Sale</HashLink>
        <HashLink smooth to='/#contacts'>Contact</HashLink>

        <Link to='/cart' className={s.cart_logo}><BsHandbag /></Link>
      </nav>
    </header>
  );
}


