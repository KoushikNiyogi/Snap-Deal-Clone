import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import chappal from "../assets/Products/chappal.jpg";
import mala from "../assets/Products/mala.jpg";
import chopper from "../assets/Products/chopper.jpg";
import socks from "../assets/Products/socks.jpg";
import trim from "../assets/Products/trim.jpg";
import wallet from "../assets/Products/wallet.jpg";
import tshirt from "../assets/Products/tshirt.jpg";
import lighter from "../assets/Products/lighter.jpg";
import leftarrow from "../assets/Banner/leftIcon.png";
import rightarrow from "../assets/Banner/rightIcon.png";
import { ProductCard } from "./ProductCard";
import "../Styles/HomeStyles/ProductCaro.css";

const productsCarouselData = [
  [
    {
      src: chappal,
      alt: "chappal",
      title: "ASIAN Brown Flip Flops",
      oldPrice: "499",
      newPrice: "433",
      offer: "13%",
    },
    {
      src: mala,
      alt: "mala",
      title:
        "Bhawna Collection Loard Shiv Trishul Damru Locket With Puchmukhi Rudraksha Mala Gold-plated Brass, Wood For Men & Women",
      oldPrice: "399",
      newPrice: "194",
      offer: "51%",
    },
    {
      src: wallet,
      alt: "wallet",
      title:
        "DARK ROMANCE - Beige Faux Leather Men's Zip Around Wallet ( Pack of 1 )",
      oldPrice: "999",
      newPrice: "191",
      offer: "81%",
    },
    {
      src: tshirt,
      alt: "tshirt",
      title:
        "Veirdo - Multicolor Cotton Regular Fit Men's T-Shirt ( Pack of 1 )",
      oldPrice: "399",
      newPrice: "299",
      offer: "25%",
    },
  ],
  [
    {
      src: trim,
      alt: "trim",
      title: "Battlestar Tummy Trimmer Double String Abdominal Exercise- Black",
      oldPrice: "699",
      newPrice: "313",
      offer: "55%",
    },
    {
      src: socks,
      alt: "socks",
      title: "Stay Healthy - Foot Protector (Free Size)",
      oldPrice: "499",
      newPrice: "110",
      offer: "78%",
    },
    {
      src: chopper,
      alt: "chopper",
      title:
        "Bentag kitchenware Vegetable & Fruit Clever Cutter Stainless Steel Vegetable Scissor ",
      oldPrice: "499",
      newPrice: "175",
      offer: "65%",
    },
    {
      src: lighter,
      alt: "lighter",
      title: "Maxbell USB Rechargeable Electronic Flameless Lighter",
      oldPrice: "299",
      newPrice: "149",
      offer: "50%",
    },
  ],
];

export const ProductCaro = () => {
  return (
    <>
      <div className="desktop-only"></div>
    </>
  );
};
