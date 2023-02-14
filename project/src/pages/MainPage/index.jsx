import React from "react";
import BannerSection from "../../components/BannerSection";
import CategoriesSectionContainer from "../../components/CategoriesSectionContainer";
import CouponsSection from "../../components/CouponsSection";
import SalesSectionContainer from "../../components/SalesSectionContainer";
import s from './index.module.css'

export default function MainPage() {
  
  
  return (
    <div>
      <BannerSection />
      <CategoriesSectionContainer />
      <CouponsSection />
      <SalesSectionContainer />
    </div>
  );
}
