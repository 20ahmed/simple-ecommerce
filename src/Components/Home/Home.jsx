import React from "react";
import Nav from "../Nav/Nav";
import Products from "../Products/Products";
import Slider from "../Slider/Slider";

export default function Home() {
  return (
    <div>
      <Nav />
      <Slider />
      <Products />
    </div>
  );
}
