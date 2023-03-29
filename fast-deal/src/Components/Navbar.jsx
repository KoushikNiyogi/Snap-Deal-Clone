import React, { useContext } from "react";
import styled from "styled-components";
import { LoginSignUpContext } from "../context/Login-SignUpContext";
const Navbar = () => {
  const { onOpen } = useContext(LoginSignUpContext);
  return (
    <DIV>
      <header>
        <nav class="topnav">
          <h2>Brand Waali Quality, Bazaar Waali Deal!</h2>
          <ul>
            <li>
              <a href="">Impact@Snapdeal</a>
            </li>
            <li>
              <a href="">Gift Cards</a>
            </li>
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Sell On Snapdeal</a>
            </li>
            <li>
              <a href="">
                {" "}
                <i class="fas fa-mobile-alt"></i> Download App
              </a>
            </li>
          </ul>
        </nav>

        <nav class="mainnav">
          <div class="logoimg">
            <img
              src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"
              alt=""
            />
          </div>
          <div class="search">
            <input type="text" placeholder="Search products & brands" />
            <button class="btn">
              <i class="fas fa-search"></i> Search
            </button>
          </div>
          <div class="moreitemslist">
            <div class="moreitems1">
              <a href="">
                Cart <i class="fas fa-shopping-cart"></i>
              </a>
            </div>
            <div class="moreitems2">
              <a href="" id="user_name">
                Sign In <i class="fas fa-user-circle"></i>
              </a>

              <div class="signsub">
                <ul>
                  <li>
                    <i class="far fa-user"></i>Your Account
                  </li>
                  <li>
                    <i class="fas fa-box-open"></i>Your Orders
                  </li>
                  <li>
                    <i class="far fa-heart"></i>Shortlist
                  </li>
                  <li>
                    <i class="fas fa-hand-holding-usd"></i>SD Cash
                  </li>
                </ul>

                <hr />

                <p>If you are a new user</p>

                <a href="signin.html">
                  {" "}
                  <h3>Register</h3>
                </a>

                <h3 onClick={onOpen} >
                  Login
                </h3>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </DIV>
  );
};

export default Navbar;

const DIV = styled.div`
  * {
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #f7f7f7;
    font-family: "Lato", sans-serif;
  }

  .topnav {
    background-color: #c7003d;
    display: flex;
    height: 28px;
    justify-content: space-between;
  }

  .topnav ul {
    display: flex;
    margin-right: 40px;
  }

  .topnav ul li {
    padding-right: 36px;
    padding-top: 6px;
    font-size: 12px;
    list-style-type: none;
  }

  .topnav ul li a {
    color: white;
    text-decoration: none;
  }

  .topnav h2 {
    font-size: 12px;
    padding-top: 6px;
    padding-left: 70px;
    color: white;
  }

  /* -----mainnav--- */
  .mainnav {
    background-color: #e40046;
    display: flex;
    justify-content: space-around;
  }

  .logoimg {
    margin-top: 15px;
    margin-left: 24px;
  }

  .search {
    width: 50%;
    margin-left: 40px;
  }

  .search input {
    width: 72%;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 2px;
    margin: 12px;
    font-size: 16px;
  }

  .search input:placeholder-shown {
    font-size: 16px;
    padding-left: 20px;
  }

  .search button {
    width: 18%;
    height: 38px;
    margin-left: -16px;
    background-color: #333333;
    color: white;
    outline: none;
    border-radius: 2px;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }

  .btn i {
    font-size: 16px;
  }

  .moreitemslist {
    display: flex;
    margin-right: 34px;
  }

  .moreitems1,
  .moreitems2 {
    padding-top: 18px;
    border-left: 1px solid rgba(0, 0, 0, 0.07);
    padding-left: 20px;
    padding-right: 57px;
    position: relative;
  }

  .moreitems2 a {
    font-size: 18px;
    text-decoration: none;
    color: white;
  }

  .moreitems1 a {
    font-size: 18px;
    text-decoration: none;
    color: white;
  }

  .moreitems2:hover {
    background-color: #333333;
    border-radius: 4px 4px 0 0;
  }

  .moreitems1,
  .moreitems2 a i {
    font-size: 22px;
    color: white;
    margin-left: 10px;
  }

  .signsub {
    display: none;
  }

  .signsub ul {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .signsub ul li {
    list-style: none;
    padding-top: 10px;
    padding-left: 26px;
    cursor: pointer;
  }

  .signsub ul li i {
    padding-right: 10px;
  }

  .signsub p {
    text-align: center;
    margin-top: 10px;
    font-size: 13px;
  }

  .signsub h3 {
    text-align: center;
    font-size: 14px;
    margin-bottom: 14px;
    cursor: pointer;
  }

  #login {
    background-color: #e40046;
    font-weight: bold;
    font-size: 16px;
    padding: 6px 30px 8px 30px;
    margin: 55px;
    cursor: pointer;
  }

  .moreitems2:hover .signsub {
    width: 129%;
    position: absolute;
    height: 400%;
    margin-top: 21px;
    margin-left: -67px;
    display: block;
    background-color: #333333;
    color: white;
    border-radius: 4px 0 4px 4px;
    z-index: 1;
  }
`;
