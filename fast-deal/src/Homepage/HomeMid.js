import React, { Component } from "react";

import "../Styles/HomeStyles/HomeMid.css";

import { Banner } from "./Banner";

import { Pincode } from "./PinCode";
import { SideProductList } from "./SideProductList";

export class HomeMid extends Component {
  render() {
    return (
      <div className="main-bar">
        <div className="main-bar__container">
          <div className="main-bar__sidebar">
            <SideProductList />
          </div>
          <div className="main-bar__carousel">
            <div className="main-bar__pin-cont">
              <div className="main-bar__banner-carousel">
                <Banner />
              </div>
              <div className="main-bar__pin">
                <Pincode />
              </div>
            </div>
            <h2 className="main-bar__trending">TRENDING PRODUCTS</h2>
            <div className="main-bar__products-carousel">
              {/* ALL Cards willbe herer */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
