import React from "react";
import BannerSection from "../../components/BannerSection";
import CategoriesSection from "../../components/CategoriesSection";
import CouponsSection from "../../components/CouponsSection";
import SalesSection from "../../components/SalesSection";
import s from './index.module.css'

export default function MainPage({ image, title }) {
  
  
  return (
    
    
    <div className='wrapper'>
      
      <BannerSection />
      <CategoriesSection />
      <CouponsSection />
      <SalesSection />
    </div>
  );
}
