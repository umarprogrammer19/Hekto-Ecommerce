import Banner from "@/components/Banner";
import DiscountItem from "@/components/DiscountItem";
import FeaturedProducts from "@/components/FeaturedProducts";
import LeatestBlog from "@/components/LeatestBlog";
import LeatestProducts from "@/components/LeatestProducts";
import Logos from "@/components/Logos";
import OurNewslater from "@/components/OurNewslater";
import TopCategories from "@/components/TopCategories";
import TrendingProducts from "@/components/TrendingProducts";
import UniqueFeatures from "@/components/UniqueFeatures";
import WhatShopexOffer from "@/components/WhatShopexOffer";
export default function Home() {
  return (
    <main className="">
      <Banner />
      <FeaturedProducts />
      <LeatestProducts />
      <WhatShopexOffer />
      <UniqueFeatures />
      <TrendingProducts />
      <DiscountItem />
      <TopCategories />
      <OurNewslater />
      <Logos />
      <LeatestBlog />
    </main>
  );
}
