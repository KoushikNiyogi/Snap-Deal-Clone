import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "../ProductCard/ProductCard.js";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardCarosal.css";

let slides = [
  {
    id: 37,
    name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    type: "menclothing",
    price: 695,
    "strikeoff-price": 999,
    discount: 31,
    category: "Shirt",
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    image: [
      "https://n3.sdlcdn.com/imgs/k/e/6/SREY-Cotton-Blend-Slim-Fit-SDL704117029-1-a88b7.jpg",
      "https://n4.sdlcdn.com/imgs/k/e/6/SREY-Cotton-Blend-Slim-Fit-SDL704117029-2-c5341.jpg",
      "https://n4.sdlcdn.com/imgs/k/e/6/SREY-Cotton-Blend-Slim-Fit-SDL704117029-3-8d88c.jpg",
    ],
    productline: "Hangup",
    color: "Black",
    size: "36",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 43,
    name: "Blue Polycotton Regular - Fit Men's Trousers",
    type: "menclothing",
    category: "Trouser",
    price: 799,
    "strikeoff-price": 999,
    discount: 20,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    image: [
      "https://n1.sdlcdn.com/imgs/k/f/l/Excalibur-Polyester-Regular-Regular-Blue-SDL389857083-1-519f1.jpg",
      "https://n2.sdlcdn.com/imgs/k/f/l/Excalibur-Polyester-Regular-Regular-Blue-SDL389857083-2-aad44.jpg",
      "https://n2.sdlcdn.com/imgs/k/f/l/Excalibur-Polyester-Regular-Regular-Blue-SDL389857083-3-35db9.jpg",
    ],
    productline: "Dennis Lingo",
    color: "Blue",
    size: "40",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 44,
    name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    type: "menclothing",
    price: 114,
    "strikeoff-price": 1270,
    discount: 25,
    category: "Trouser",
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    image: [
      "https://n4.sdlcdn.com/imgs/k/b/a/SREY-Black-Slim-Fit-Flat-SDL362379972-3-abd45.jpg",
      "https://n2.sdlcdn.com/imgs/k/b/a/SREY-Black-Slim-Fit-Flat-SDL362379972-2-530e4.jpg",
      "https://n2.sdlcdn.com/imgs/k/b/a/SREY-Black-Slim-Fit-Flat-SDL362379972-4-7cb18.jpg",
    ],
    productline: "Dennis Lingo",
    color: "Black",
    size: "42",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 50,
    name: "MBJ men's Solid Short Sleeve Boat Neck V ",
    type: "menclothing",
    price: 1999,
    "strikeoff-price": 625,
    discount: 69,
    category: "Jacket",
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    image: [
      "https://n4.sdlcdn.com/imgs/k/m/a/Forbro-White-Nylon-Regular-Fit-SDL330769577-1-bf696.jpg",
      "https://n1.sdlcdn.com/imgs/k/m/a/Forbro-White-Nylon-Regular-Fit-SDL330769577-3-277bf.jpg",
      "https://n3.sdlcdn.com/imgs/k/m/a/Forbro-White-Nylon-Regular-Fit-SDL330769577-4-0ab68.jpg",
    ],
    productline: "Dennis Lingo",
    color: "White",
    size: "38",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 64,
    name: "Bargain Rayon Harem/Patiala",
    type: "womenclothing",
    price: 775,
    "strikeoff-price": 1349,
    discount: 41,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    image: [
      "https://n4.sdlcdn.com/imgs/h/o/g/Indi-Bargain-Rayon-Harem-Patiala-SDL506363949-2-161ec.jpeg",
      "https://n4.sdlcdn.com/imgs/h/o/g/Indi-Bargain-Rayon-Harem-Patiala-SDL506363949-3-4274b.jpeg",
      "https://n4.sdlcdn.com/imgs/h/o/g/Indi-Bargain-Rayon-Harem-Patiala-SDL506363949-1-d2533.jpeg",
    ],
    productline: "Dennis Lingo",
    category: "Trouser",
    color: "Blue",
    size: "40",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 71,
    name: "Polyester White Jackets",
    type: "womenclothing",
    price: 1249,
    "strikeoff-price": 1600,
    discount: 30,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    image: [
      "https://n2.sdlcdn.com/imgs/k/k/n/Honey-Bell-Polyester-White-Jackets-SDL168993703-1-5bb61.jpg",
      "https://n4.sdlcdn.com/imgs/k/k/n/Honey-Bell-Polyester-White-Jackets-SDL168993703-2-bf79c.jpg",
      "https://n1.sdlcdn.com/imgs/k/k/n/Honey-Bell-Polyester-White-Jackets-SDL168993703-3-dd03f.jpg",
    ],
    productline: "Dennis Lingo",
    category: "Jacket",
    color: "White",
    size: "38",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 56,
    name: "Navy Cotton Blend Shirt",
    type: "womenclothing",
    price: 999,
    "strikeoff-price": 1050,
    discount: 5,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    image: [
      "https://n2.sdlcdn.com/imgs/k/f/s/HELLCAT-Navy-Cotton-Blend-Shirt-SDL293591917-1-f9319.jpg",
      "https://n3.sdlcdn.com/imgs/k/f/s/HELLCAT-Navy-Cotton-Blend-Shirt-SDL293591917-2-c4a7a.jpg",
      "https://n1.sdlcdn.com/imgs/k/f/s/HELLCAT-Navy-Cotton-Blend-Shirt-SDL293591917-4-9f8dc.jpg",
    ],
    productline: "Dennis Lingo",
    category: "Shirt",
    color: "Blue",
    size: "40",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 37,
    name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    type: "menclothing",
    price: 695,
    "strikeoff-price": 999,
    discount: 31,
    category: "Shirt",
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    image: [
      "https://n3.sdlcdn.com/imgs/k/e/6/SREY-Cotton-Blend-Slim-Fit-SDL704117029-1-a88b7.jpg",
      "https://n4.sdlcdn.com/imgs/k/e/6/SREY-Cotton-Blend-Slim-Fit-SDL704117029-2-c5341.jpg",
      "https://n4.sdlcdn.com/imgs/k/e/6/SREY-Cotton-Blend-Slim-Fit-SDL704117029-3-8d88c.jpg",
    ],
    productline: "Hangup",
    color: "Black",
    size: "36",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 43,
    name: "Blue Polycotton Regular - Fit Men's Trousers",
    type: "menclothing",
    category: "Trouser",
    price: 799,
    "strikeoff-price": 999,
    discount: 20,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    image: [
      "https://n1.sdlcdn.com/imgs/k/f/l/Excalibur-Polyester-Regular-Regular-Blue-SDL389857083-1-519f1.jpg",
      "https://n2.sdlcdn.com/imgs/k/f/l/Excalibur-Polyester-Regular-Regular-Blue-SDL389857083-2-aad44.jpg",
      "https://n2.sdlcdn.com/imgs/k/f/l/Excalibur-Polyester-Regular-Regular-Blue-SDL389857083-3-35db9.jpg",
    ],
    productline: "Dennis Lingo",
    color: "Blue",
    size: "40",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 44,
    name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    type: "menclothing",
    price: 114,
    "strikeoff-price": 1270,
    discount: 25,
    category: "Trouser",
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    image: [
      "https://n4.sdlcdn.com/imgs/k/b/a/SREY-Black-Slim-Fit-Flat-SDL362379972-3-abd45.jpg",
      "https://n2.sdlcdn.com/imgs/k/b/a/SREY-Black-Slim-Fit-Flat-SDL362379972-2-530e4.jpg",
      "https://n2.sdlcdn.com/imgs/k/b/a/SREY-Black-Slim-Fit-Flat-SDL362379972-4-7cb18.jpg",
    ],
    productline: "Dennis Lingo",
    color: "Black",
    size: "42",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 50,
    name: "MBJ men's Solid Short Sleeve Boat Neck V ",
    type: "menclothing",
    price: 1999,
    "strikeoff-price": 625,
    discount: 69,
    category: "Jacket",
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    image: [
      "https://n4.sdlcdn.com/imgs/k/m/a/Forbro-White-Nylon-Regular-Fit-SDL330769577-1-bf696.jpg",
      "https://n1.sdlcdn.com/imgs/k/m/a/Forbro-White-Nylon-Regular-Fit-SDL330769577-3-277bf.jpg",
      "https://n3.sdlcdn.com/imgs/k/m/a/Forbro-White-Nylon-Regular-Fit-SDL330769577-4-0ab68.jpg",
    ],
    productline: "Dennis Lingo",
    color: "White",
    size: "38",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 64,
    name: "Bargain Rayon Harem/Patiala",
    type: "womenclothing",
    price: 775,
    "strikeoff-price": 1349,
    discount: 41,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    image: [
      "https://n4.sdlcdn.com/imgs/h/o/g/Indi-Bargain-Rayon-Harem-Patiala-SDL506363949-2-161ec.jpeg",
      "https://n4.sdlcdn.com/imgs/h/o/g/Indi-Bargain-Rayon-Harem-Patiala-SDL506363949-3-4274b.jpeg",
      "https://n4.sdlcdn.com/imgs/h/o/g/Indi-Bargain-Rayon-Harem-Patiala-SDL506363949-1-d2533.jpeg",
    ],
    productline: "Dennis Lingo",
    category: "Trouser",
    color: "Blue",
    size: "40",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 71,
    name: "Polyester White Jackets",
    type: "womenclothing",
    price: 1249,
    "strikeoff-price": 1600,
    discount: 30,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    image: [
      "https://n2.sdlcdn.com/imgs/k/k/n/Honey-Bell-Polyester-White-Jackets-SDL168993703-1-5bb61.jpg",
      "https://n4.sdlcdn.com/imgs/k/k/n/Honey-Bell-Polyester-White-Jackets-SDL168993703-2-bf79c.jpg",
      "https://n1.sdlcdn.com/imgs/k/k/n/Honey-Bell-Polyester-White-Jackets-SDL168993703-3-dd03f.jpg",
    ],
    productline: "Dennis Lingo",
    category: "Jacket",
    color: "White",
    size: "38",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 56,
    name: "Navy Cotton Blend Shirt",
    type: "womenclothing",
    price: 999,
    "strikeoff-price": 1050,
    discount: 5,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    image: [
      "https://n2.sdlcdn.com/imgs/k/f/s/HELLCAT-Navy-Cotton-Blend-Shirt-SDL293591917-1-f9319.jpg",
      "https://n3.sdlcdn.com/imgs/k/f/s/HELLCAT-Navy-Cotton-Blend-Shirt-SDL293591917-2-c4a7a.jpg",
      "https://n1.sdlcdn.com/imgs/k/f/s/HELLCAT-Navy-Cotton-Blend-Shirt-SDL293591917-4-9f8dc.jpg",
    ],
    productline: "Dennis Lingo",
    category: "Shirt",
    color: "Blue",
    size: "40",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
];

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};
function ProductSlider() {
 
  return (
    <div>
      <Slider {...settings}>
        {slides?.map((slide, index) => {
          return (
            <div key={index}>
              <ProductCard imgSrc={slide.image[0]} {...slide} key={index} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ProductSlider;
