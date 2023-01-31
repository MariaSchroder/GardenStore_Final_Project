import React from "react";
import BannerSection from "../../components/BannerSection";
import CategorySection from "../../components/CategorySection";
import CouponsSection from "../../components/CouponsSection";
import SalesSection from "../../components/SalesSection";
import s from './index.module.css'

export default function MainPage() {
  return (
    <div className='wrapper'>
      
      <BannerSection />
      <CategorySection />
      <CouponsSection />
      <SalesSection />
    </div>
  );
}
