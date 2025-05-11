import React from 'react'
import Hero from '../components/Hero'
import Service from '../components/Service'
import BestDeals from '../components/BestDeals'
import ShopCategory from '../components/ShopCategory'
import FeaturesProducts from '../components/FeaturesProducts'
import IntroductNewProduct from '../components/IntroductNewProduct'
import ComputerAccessories from '../components/ComputerAccessories'
import DiscountPart from '../components/DiscountPart'
import HightRatingProduct from '../components/HightRatingProduct'
import LatestNews from '../components/LatestNews'
import SubscribePart from '../components/SubscribePart'

const Home = () => {
  return (
    <>
    <Hero/>
    <Service/>
    <BestDeals/>
    <ShopCategory/>
    <FeaturesProducts/>
    <IntroductNewProduct/>
    <ComputerAccessories/>
    <DiscountPart/>
    <HightRatingProduct/>
    <LatestNews/>
    <SubscribePart/>
    </>
  )
}

export default Home