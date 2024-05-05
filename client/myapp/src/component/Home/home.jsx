import React from "react";
import Hero from "./Hero/hero";
import Product from "./Product/product";
import Choose from "./Choose_us/choose";
import Help from "./Help/help";
import Popular from "./Popular/popular";
import Testimonial from "./Testimonial/testimonial";
import Blog from "./Blog/blog";

const Home = () => {
  return (
    <>
      <Hero />
      <Product />
      <Choose />
      <Help />
      <Popular />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home;
