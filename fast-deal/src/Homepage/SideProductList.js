import { Link } from "react-router-dom";
import React from "react";

import styled from "styled-components";
import { updatePath } from "../Redux/ProductReducer/action";
import { useDispatch } from "react-redux";
// import "../Styles/HomeStyles/SideProductList.css";

export const SideProductList = () => {
  const dispatch = useDispatch();
  const handleClick = (data)=>{
    console.log(data);
    localStorage.setItem("path",JSON.stringify(data));
    dispatch(updatePath(data));
  }
  return (
    <DIV>
      <div className="leftside">
        <ul>
          <div className="topCat">TOP CATEGORIES</div>
          <li id="list1">
            <img
              src="https://n3.sdlcdn.com/imgs/d/h/3/Discount_Right_icon-f5105.png"
              alt=""
            />
            <span>All Offers</span>
            <div className="sublists">
              <div className="listitems">
                {/* 1st row */}
                <div>
                  <h4>AUTUMN/WINTER SPECIAL</h4>
                  <p>Air Purifiers Geysers Socks</p>
                  <p>Geysers</p>
                  <p>Socks</p>
                  <p>Air Fresheners</p>
                  <p>Blankets &amp; Comforters</p>
                  <p>Coffee &amp; Tea Makers</p>
                  <p>Hair Dryers</p>
                  <p>Air Conditioners</p>
                  <hr />
                  <h4>AUTUMN/WINTER SPECIAL</h4>
                  <p>Air Purifiers Geysers Socks</p>
                  <p>Geysers</p>
                  <p>Socks</p>
                  <p>Air Fresheners</p>
                </div>
                {/* 2nd row */}
                <div>
                  <h4>AUTUMN/WINTER SPECIAL</h4>
                  <p>Air Purifiers Geysers Socks</p>
                  <p>Geysers</p>
                  <p>Socks</p>
                  <hr />
                  <h4>AUTUMN/WINTER SPECIAL</h4>
                  <p>Air Purifiers Geysers Socks</p>
                  <p>Geysers</p>
                  <p>Socks</p>
                  <p>Air Fresheners</p>
                  <p>Blankets &amp; Comforters</p>
                  <p>Coffee &amp; Tea Makers</p>
                  <p>Hair Dryers</p>
                </div>
                {/* 3rd row */}
                <div>
                  <h4>AUTUMN/WINTER SPECIAL</h4>
                  <p>Air Purifiers Geysers Socks</p>
                  <p>Geysers</p>
                  <p>Socks</p>
                  <p>Air Fresheners</p>
                  <p>Blankets &amp; Comforters</p>
                  <p>Coffee &amp; Tea Makers</p>
                  <p>Hair Dryers</p>
                  <p>Air Conditioners</p>
                  <hr />
                  <h4>AUTUMN/WINTER SPECIAL</h4>
                  <p>Air Purifiers Geysers Socks</p>
                  <p>Geysers</p>
                  <p>Socks</p>
                  <p>Air Fresheners</p>
                  <p>Blankets &amp; Comforters</p>
                </div>
                {/* ---4th row */}
                <div id="listimg">
                  <img
                    src="https://n4.sdlcdn.com/imgs/i/f/f/BlockbusterDeals-cb277.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </li>
          <li id="list2">
            <img
              src="https://i1.sdlcdn.com/img/leftnavicon09/30x30mobile2.png"
              alt=""
            />
            <span>Mobile &amp; Tablets</span>
            <div className="sublists">
              <div className="listitems">
                {/* 1st row */}
                <div>
                  <h4>MOBILE PHONES</h4>
                  <a href="product.html">
                    {" "}
                    <p>PowerBanks</p>
                  </a>
                  <p>Feature Phones</p>
                  <hr />
                  <h4>MOBILE CASES &amp; COVERS</h4>
                  <p>New Launches Covers</p>
                  <p>Printed Back Covers</p>
                  <p>Plain Back Covers</p>
                  <p>Flip Covers</p>
                  <p>Premium Covers</p>
                  <hr />
                  <h4>TOP BRANDS</h4>
                  <p>Panasonic</p>
                  <p>Samsung</p>
                  <p>Apple</p>
                  <p>Redmi</p>
                </div>
                {/* 2nd row */}
                <div>
                  <h4>AUTUMN/WINTER SPECIAL</h4>
                  <p>Air Purifiers Geysers Socks</p>
                  <p>Geysers</p>
                  <p>Socks</p>
                  <hr />
                  <h4>AUTUMN/WINTER SPECIAL</h4>
                  <p>Air Purifiers Geysers Socks</p>
                  <p>Geysers</p>
                  <p>Socks</p>
                  <p>Air Fresheners</p>
                  <p>Blankets &amp; Comforters</p>
                  <p>Coffee &amp; Tea Makers</p>
                  <p>Hair Dryers</p>
                </div>
                {/* 3rd row */}
                <div>
                  <h4>AUTUMN/WINTER SPECIAL</h4>
                  <p>Air Purifiers Geysers Socks</p>
                  <p>Geysers</p>
                  <p>Socks</p>
                  <p>Air Fresheners</p>
                  <p>Blankets &amp; Comforters</p>
                  <p>Coffee &amp; Tea Makers</p>
                  <p>Hair Dryers</p>
                  <p>Air Conditioners</p>
                  <hr />
                  <h4>AUTUMN/WINTER SPECIAL</h4>
                  <p>Air Purifiers Geysers Socks</p>
                  <p>Geysers</p>
                  <p>Socks</p>
                </div>
                {/* ---4th row */}
                <div id="listimg">
                  <img
                    src="https://n2.sdlcdn.com/imgs/i/7/q/Mobiles_17jan-197ca.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </li>
          <li id="list3">
            <img
              src="https://n2.sdlcdn.com/imgs/d/2/c/Electronic-6212c.png"
              alt=""
            />
            <span>Electronics</span>
            <div className="sublists">
              <div className="listitems">
                {/* 1st row */}
                <div>
                  <h4>TELEVISIONS</h4>
                  <p>Top Selling TVs</p>
                  <p>Full HD Tvs</p>
                  <p>Smart Tvs</p>
                  <p>Ultra HD Tvs</p>
                  <p>DTH Services</p>
                  <hr />
                  <h4>Speakers</h4>
                  <p>Home Audio Systems</p>
                  <p>Bluetooth Speakers</p>
                  <p>2.0 &amp; 2.1 Speakers</p>
                  <hr />
                  <h4>Headphones &amp; Earphones</h4>
                  <p>Headphones</p>
                  <p>Earphones</p>
                  <p>Headsets with mic</p>
                  <p>iPods &amp; MP# Players</p>
                </div>
                {/* 2nd row */}
                <div>
                  <h4>Headphones &amp; Earphones</h4>
                  <p>Headphones</p>
                  <p>Earphones</p>
                  <p>Headsets with mic</p>
                  <p>iPods &amp; MP# Players</p>
                  <hr />
                  <h4>Speakers</h4>
                  <p>Home Audio Systems</p>
                  <p>Bluetooth Speakers</p>
                  <p>2.0 &amp; 2.1 Speakers</p>
                  <p>Full HD Tvs</p>
                  <p>Smart Tvs</p>
                  <p>Ultra HD Tvs</p>
                  <p>DTH Services</p>
                </div>
                {/* 3rd row */}
                <div>
                  <h4>TELEVISIONS</h4>
                  <p>Top Selling TVs</p>
                  <p>Full HD Tvs</p>
                  <p>Smart Tvs</p>
                  <p>Ultra HD Tvs</p>
                  <p>DTH Services</p>
                  <hr />
                  <h4>AUTUMN/WINTER SPECIAL</h4>
                  <p>Air Purifiers Geysers Socks</p>
                  <p>Geysers</p>
                  <p>Socks</p>
                </div>
                {/* ---4th row */}
                <div id="listimg">
                  <img
                    src="https://n4.sdlcdn.com/imgs/i/1/o/electronics-7e68c.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </li>
          <li id="list4">
            <img
              src="https://n2.sdlcdn.com/imgs/d/2/c/ComputerGaming-a02cf.png"
              alt=""
            />
            <span>Computers &amp; Gaming</span>
            <div className="sublists">
              <div className="listitems">
                {/* 1st row */}
                <div>
                  <h4>LAPTOPS</h4>
                  <p>Core i3 Laptops</p>
                  <p>Core i5 Laptops</p>
                  <p>Budget Laptops</p>
                  <p>Thin &amp; Light Laptops</p>
                  <hr />
                  <h4>PRinters &amp; INKS</h4>
                  <p>Printers</p>
                  <p>Scanners</p>
                  <p>Inks &amp; Toners</p>
                  <hr />
                  <h4>STORAGES</h4>
                  <p>External Hard Drives</p>
                  <p>Memory Cards</p>
                  <p>Pen Drives</p>
                  <p>SSD</p>
                </div>
                {/* 2nd row */}
                <div>
                  <h4>Headphones &amp; Earphones</h4>
                  <p>Headphones</p>
                  <p>Earphones</p>
                  <p>Headsets with mic</p>
                  <p>iPods &amp; MP# Players</p>
                  <hr />
                  <h4>Speakers</h4>
                  <p>Home Audio Systems</p>
                  <p>Bluetooth Speakers</p>
                  <p>2.0 &amp; 2.1 Speakers</p>
                  <p>Full HD Tvs</p>
                  <p>Smart Tvs</p>
                  <p>Ultra HD Tvs</p>
                  <p>DTH Services</p>
                </div>
                {/* 3rd row */}
                <div>
                  <h4>PRinters &amp; INKS</h4>
                  <p>Printers</p>
                  <p>Scanners</p>
                  <p>Inks &amp; Toners</p>
                  <hr />
                  <h4>STORAGES</h4>
                  <p>External Hard Drives</p>
                  <p>Memory Cards</p>
                  <p>Pen Drives</p>
                  <p>SSD</p>
                </div>
                {/* ---4th row */}
                <div id="listimg">
                  <img
                    src="https://n1.sdlcdn.com/imgs/i/1/r/Laptopacc_28oct-581f8.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </li>
          <li id="list5">
            <img
              src="https://n2.sdlcdn.com/imgs/c/0/x/Homekitchenfurnishing-3eda1.jpg"
              alt=""
            />
            <span>Home &amp; Kitchen</span>
            <div className="sublists">
              <div className="listitems">
                {/* 1st row */}
                <div>
                  <h4>AUTUMN/WINTER SPECIAL</h4>
                  <p>Air Purifiers Geysers Socks</p>
                  <p>Geysers</p>
                  <p>Socks</p>
                  <p>Air Fresheners</p>
                  <p>Blankets &amp; Comforters</p>
                  <p>Coffee &amp; Tea Makers</p>
                  <p>Hair Dryers</p>
                  <p>Air Conditioners</p>
                  <hr />
                  <h4>AUTUMN/WINTER SPECIAL</h4>
                  <p>Air Purifiers Geysers Socks</p>
                  <p>Geysers</p>
                  <p>Socks</p>
                  <p>Air Fresheners</p>
                </div>
                {/* 2nd row */}
                <div>
                  <h4>AUTUMN/WINTER SPECIAL</h4>
                  <p>Air Purifiers Geysers Socks</p>
                  <p>Geysers</p>
                  <p>Socks</p>
                  <hr />
                  <h4>AUTUMN/WINTER SPECIAL</h4>
                  <p>Air Purifiers Geysers Socks</p>
                  <p>Geysers</p>
                  <p>Socks</p>
                  <p>Air Fresheners</p>
                  <p>Blankets &amp; Comforters</p>
                  <p>Coffee &amp; Tea Makers</p>
                  <p>Hair Dryers</p>
                </div>
                {/* 3rd row */}
                <div>
                  <h4>AUTUMN/WINTER SPECIAL</h4>
                  <p>Air Purifiers Geysers Socks</p>
                  <p>Geysers</p>
                  <p>Socks</p>
                  <p>Air Fresheners</p>
                  <p>Blankets &amp; Comforters</p>
                  <p>Coffee &amp; Tea Makers</p>
                  <p>Hair Dryers</p>
                  <p>Air Conditioners</p>
                  <hr />
                  <h4>AUTUMN/WINTER SPECIAL</h4>
                  <p>Air Purifiers Geysers Socks</p>
                  <p>Geysers</p>
                  <p>Socks</p>
                  <p>Air Fresheners</p>
                  <p>Blankets &amp; Comforters</p>
                </div>
                {/* ---4th row */}
                <div id="listimg">
                  <img
                    src="https://n4.sdlcdn.com/imgs/i/f/f/BlockbusterDeals-cb277.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </li>
          <li className="moreCat">
            <p>MORE CATEGORIES</p>
          </li>
          <div className="moreli">
            <li onClick={()=>handleClick("menshoes")}>
              <Link to={"/product/mens-footware" } state = {{data : "menshoes"}}>Men's Footware</Link>
            </li>
            <li onClick={()=>handleClick("womenshoes")}>
              <Link to={"/product/mens-footware"}>Women's Footware</Link>
            </li>
            <li onClick={()=>handleClick("menclothing")}>
             <Link to={"/product/mens-footware"}>Men's Clothing</Link>
            </li>
            <li onClick={()=>handleClick("womenclothing")}>
             <Link to={"/product/mens-footware"}>Women's Clothing</Link>
            </li>
            <li>
              <span>Sports,Fitness &amp; Outdoor</span>
            </li>
            <li>
              <span>Car &amp; Motorbike</span>
            </li>
            <li>
              <span>Hobbies</span>
            </li>
            <li>
              <span>Books,Media &amp; Music</span>
            </li>
            <li>
              <a href="">See All Categories</a>
            </li>
          </div>
          <li className="moreCat">
            <p>TRENDING SEARCHES</p>
          </li>
          <div className="moreli">
            <li>
              <span>
                {" "}
                <i className="fas fa-search" /> Hair Straightener
              </span>
            </li>
            <li>
              <span>
                {" "}
                <i className="fas fa-search" /> Makeup Kit
              </span>
            </li>
            <li>
              <span>
                {" "}
                <i className="fas fa-search" /> Hookah
              </span>
            </li>
            <li>
              <span>
                {" "}
                <i className="fas fa-search" /> Sling Bag
              </span>
            </li>
            <li>
              <span>
                {" "}
                <i className="fas fa-search" /> Bluetooth Speaker
              </span>
            </li>
          </div>
        </ul>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  /* ----mainbody---- */

  * {
    margin: 0%;
    padding: 0%;
  }

  .container {
    margin-top: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-areas: "l l r r r r r r r r";
  }
  .leftside {
    grid-area: l;
    background-color: white;
    margin: 0 24px 0 42px;
    height: 130vh;
  }
  .topCat {
    font-size: 11px;
    color: #333333;
    padding: 12px;
    font-weight: bold;
  }
  .leftside li {
    display: flex;
    margin-bottom: 12px;
    position: relative;
    height: 36px;
  }
  .leftside li:hover {
    border-left: 3px solid red;
    background-color: whitesmoke;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
  }
  .sublists {
    display: none;
  }
  .sublists hr {
    margin-top: 10px;
    width: 60%;
    margin-left: 50px;
    color: lightgrey;
  }
  .sublists h4 {
    font-size: 11px;
    padding: 10px 30px 8px 10px;
    border-right: 1px solid lightgrey;
    margin-left: 20px;
    color: #333333;
  }
  .sublists p {
    font-size: 13px;
    padding-bottom: 8px;
    border-right: 1px solid lightgrey;
    padding-left: 10px;
    margin-left: 20px;
    color: #666666;
  }
  .listitems {
    display: flex;
  }
  #list1:hover .sublists {
    position: absolute;
    display: block;
    margin-top: -38px;
    z-index: 1;
    margin-left: 203px;
    width: 420%;
    height: 500px;
    background: whitesmoke;
  }
  #list2:hover .sublists {
    position: absolute;
    display: block;
    margin-top: -86px;
    z-index: 1;
    margin-left: 203px;
    width: 420%;
    height: 500px;
    background: whitesmoke;
  }
  #list3:hover .sublists {
    position: absolute;
    display: block;
    margin-top: -134px;
    z-index: 1;
    margin-left: 203px;
    width: 420%;
    height: 500px;
    background: whitesmoke;
  }
  #list4:hover .sublists {
    position: absolute;
    display: block;
    margin-top: -182px;
    z-index: 1;
    margin-left: 203px;
    width: 420%;
    height: 500px;
    background: whitesmoke;
  }
  #list5:hover .sublists {
    position: absolute;
    display: block;
    margin-top: -230px;
    z-index: 1;
    margin-left: 203px;
    width: 420%;
    height: 500px;
    background: whitesmoke;
  }
  #listimg img {
    width: 100%;
  }
  .leftside li img {
    width: 24%;
    padding: 1rem;
    padding-left: 12px;
  }
  .leftside li span {
    padding: 9px 0 0 8px;
    font-size: 12px;
    color: #666666;
    font-weight: bold;
  }
  .moreCat p {
    font-size: 11px;
    color: #333333;
    padding: 12px;
    font-weight: bold;
  }
  .moreli {
    margin-top: -14px;
  }
  .moreli li {
    margin-top: -2px;
    padding: 0px 0 0 10px;
    font-size: 12px;
    color: #666666;
    font-weight: bold;
    margin-bottom: -6px;
  }
  .moreli li a {
    color: #25a8ed;
    text-decoration: none;
    font-size: 13px;
    padding: 5px 0 0 10px;
  }
  .moreli i {
    font-size: 12px;
    color: #666666;
    margin-right: 6px;
  }
  .barcode {
    display: flex;
    width: 180%;
    margin-left: 30px;
    margin-top: -10px;
  }
  .barcode img {
    width: 30%;
  }
  .bartext p {
    margin-top: 18px;
    padding-left: 10px;
    margin-bottom: 10px;
    font-size: xx-small;
  }
  .bartext h3 {
    font-size: 1rem;
    padding-left: 10px;
    color: #666666;
  }

  @media only screen and (max-width: 1026px) {
    display: none;
  }
`;
