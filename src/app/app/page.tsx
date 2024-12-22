'use lient'

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TopCategories from "./components/TopCategories";
import LatestProducts from "./components/LatestProducts";
import Feature from "./components/FeatureProduct";
import Offers from "./components/Offers";
import Unique from "./components/Unique";
import TrendingProducts from "./components/TrendingProducts";
import Discount from "./components/Discount";
import BlogSection from "./components/BlogSection";
import Newslater from "./components/Newslater";

function Homepage(){
  return(
    <div>
      <Header />
      <Hero />
      <Feature />
      <LatestProducts />
      <Offers />
      <Unique />
      <TrendingProducts />
      <Discount />
      <TopCategories />
      <Newslater />
      <BlogSection />
      <Footer />
    </div>
  )
}

export default Homepage;