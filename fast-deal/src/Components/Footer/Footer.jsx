import styled from "styled-components";

export default function Footer() {
  return (
    <DIV>
      {/* <!-- ---secure--- --> */}

      <div className="secure">
        <div className="cardsitems">
          <div className="cards">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <h3>100% SECURE PAYMENTS</h3>
            <p>Moving your card details to a much more</p>
            <p>secured place</p>
          </div>
          <div className="cards">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <h3>TRUSTPAY</h3>
            <p>100% Payment Protection. Easy</p>
            <p>Return Policy</p>
          </div>
          <div className="cards">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <h3>HELP CENTER</h3>
            <p>Got a question? Look no further.</p>
            <p>Browse our FAQs or submit your query here.</p>
          </div>
          <div className="cards">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAvCAYAAACCLMghAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMToxMjoxNSAxMjozNTo1NEDSUKQAAALjSURBVFhH7ZjPTxNREMfndaHYFg1gwkVMoHAwGCNQDInWg/FHYowU0cpFQuIvJCb6D+jBKwYT9aBwU0+yitQLB/UgVhKIFX8k4KG0jQIxxEiB0k2h5bnzGBdWLBSoctlP0sybme3M9715TdqCwUbDyGo4HI7MuW32ds74ERMwC+dLn0kVxoDPAVcYZy9MIwG3z+ebpZSGrnhVjds5y1kX5zzbXlTES+wlLHtzNmVXT2QqAv6AnweCQaYSyWT8aG+n7KW0QBOAO+cFxT+tFqut6eIlVr67jDLrp//jB7jXdp9Hleg0Gx7KW3wSJrIgjl3d+XLNY7EYhMNh3UtRFMqqO45EIDwRJm8BrId1sb7aR6awIIMs4MyLC+1cffivM4/NzEDT1ctCxGIkkwlamltgdHQUmm/dFLHqY8eh7tRpsf4NisCxDoUChykk0ATghcOZk7uELLMZzjWchYnJCYrMY7VYYGtuHtisVmg4Uw/xeAIqyiooqwfrB0NBC7kCrWF5tZvX1pyAk65aiqSfp54O6Oh8Bv3PZa2vdgc2CkOAIcAQYAgwBBgCDAGGAEOAIWDDBei+ljv3OWH/XidF0s+bHi9433p1X8t1Amj5z0kqwFWZAy5HLkXSj8c3Dp534eQCGg/lQ+PBfIqkn9ZXY9D6ciw9v4wedP+A860BYdfDmgT0+SNwu+s7vA9FhUV/rWgCGHAlPJ0gb3nGp+O0mudPPxlYH/uQK9AEcMa+fP4WTUnBgZ1boNJuE2u06KfCp6/RBPYhV7AwAg6PBoYVqXtwigLJMWeYoO1CEfTcKBUW/ZV4PTAJgyOKxIA9pJBAe2dJFtxhjPddk4fjqYhANplXboxg8+tPRuJYv9jM71JYoH0ckCpXXeEsJNo5Z3tKCyyJXdutUo5NouzqwZnjsYudq80zQarr9TwOUVqgE4C43W7JH4Mraqaecb6DA9P9pbIa8MLhzPHYceeyLKd2yw3+HwC/AEPNJ+gDNsFyAAAAAElFTkSuQmCC"
              alt=""
            />
            <h3>SHOP ON THE GO</h3>
            <p>Download the app and get exciting</p>
            <p>app only offers at your fingertips</p>
          </div>
        </div>
      </div>

      {/* -----footer--- */}
      <div className="footer1">
        <div className="footCard">
          <div className="footitems">
            <h3>Policy Info</h3>
            <p>Privacy Policy</p>
            <p>Terms of Sale</p>
            <p>Terms of Use</p>
            <p>Report Abuse &amp; Takedown Policy</p>
          </div>
          <div className="footitems">
            <h3>COMPANY</h3>
            <p>About Us</p>
            <p>Impact@Snapdeal</p>
            <p>Core Values</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Site Map</p>
          </div>
          <div className="footitems">
            <h3>SNAPDEAL BUSINESS</h3>
            <p>Shopping App</p>
            <p>Sell on Snapdeal</p>
            <p>Advertise on Snapdeal</p>
            <p>Media Enquiries</p>
            <p>Be an Affiliate</p>
          </div>
          <div className="footitems">
            <h3>Policy Info</h3>
            <p>Privacy Policy</p>
            <p>Terms of Sale</p>
            <p>Terms of Use</p>
            <p>Report Abuse &amp; Takedown Policy</p>
          </div>
          <div className="footitems">
            <h3>NEED HELP ?</h3>
            <p>FAQ</p>
            <p>Contact Us</p>
            <p>Online Shopping</p>
          </div>
          <div className="footitems">
            <h3>SUBSCRIBE</h3>
            <input type="text" placeholder="Your email address" />
            <button>SUBSCRIBE</button>
            <p>Register now to get updates on promotions and coupons</p>
            <span> Or Download App</span>
          </div>
        </div>
      </div>
      {/* ------payments---- */}
      <div className="payments">
        <div className="pay">
          <h2>PAYMENTS</h2>
          <div className="icons">
            <i className="fab fa-cc-mastercard" />
            <i className="fab fa-cc-visa" />
            <i className="fab fa-cc-paypal" />
            <i className="fab fa-cc-amex" />
            <i className="fab fa-cc-apple-pay" />
          </div>
        </div>
        <div className="social">
          <h2>CONNECT</h2>
          <div className="icons">
            <i className="fab fa-facebook" />
            <i className="fab fa-youtube" />
            <i className="fab fa-twitter" />
            <i className="fab fa-instagram" />
            <i className="fab fa-pinterest" />
          </div>
        </div>
      </div>
      {/* -----about---- */}
      <div className="about">
        <h2>ABOUT SNAPDEAL</h2>
        <p>
          About Snapdeal :- India's Ultimate Online Shopping Site Snapdeal's
          vision is to create India's most reliable and frictionless commerce
          ecosystem that creates life-changing experiences for buyers and
          sellers. In February 2010, Kunal Bahl along with Rohit Bansal, started
          Snapdeal.com - Indias largest online shopping marketplace, with the
          widest assortment of 35 million plus products across 800 plus diverse
          categories from over 125,000 regional, national, and international
          brands and retailers. With millions of users and more than 300,000
          sellers, Snapdeal is the online shopping site for Internet users
          across the country, delivering to 6000+ cities and towns in India. In
          its journey till now, Snapdeal has partnered with several global
          marquee investors and individuals such as SoftBank, BlackRock,
          Temasek, Foxconn, Alibaba, eBay Inc., Premji Invest, Intel Capital,
          Bessemer Venture Partners, Mr. Ratan Tata, among others. Online
          Shopping A Boon The trend of online shopping is becoming a household
          name and so is Snapdeal. Snapdeal is the preferred choice of hundreds
          of thousands of online shoppers given its mammoth assortment of 15
          million+ products, quick delivery even to the remotest corners of the
          country, and daily deals, discounts &amp; offers to make products
          available at slashed down prices to our valuable customers. Get
          Started! Shop Online Today at Snapdeal If you have been missing out on
          all the fun of online shopping thinking it requires one to be a
          technology aficionado then we have good news for you. Shopping online
          particularly at Snapdeal is a child's play; all you need is a mobile
          phone or laptop or tablet with Internet connection to get started.
          Simply log into Snapdeal.com and browse through the wide assortment of
          products across categories. Once you have zeroed in on your favorite
          products, simply place the order by filling in the details; the
          products will be delivered right at your doorstep. Fulfill Your
          Entrepreneurial Dreams! Sell Today at Snapdeal Thanks to
          easy-to-understand, flexible policies and SD Advisors to help sellers
          at each step, anyone from a manufacturer to wholesaler to retailer can
          sell on Snapdeal. Begin your entrepreneurial journey with Snapdeal as
          a seller by filling a simple registration form here. Once the
          registration process is done, you can start selling your products to
          the entire country by sitting at your home or office. Doesn't it sound
          thrilling? Of course, it is and the excitement will build up with
          every order you receive! Start selling at Snapdeal today and see your
          business reach staggering heights. Shop on the Go Install Snapdeal App
          Today! You can shop for your favourite products at Snapdeal even on
          the go using Snapdeal App. Available for both Android and Apple users,
          the app can be downloaded from Google Play Store and Apple App Store
          respectively. The app is quick, user-friendly, and enables shoppers
          buy products with a breeze. What's more, get timely notifications on
          your phone or tablet so that you don't miss amazing deals and offers.
          Download the app right now and experience how fun it is to shop on
          your mobile!
        </p>
      </div>
      {/* ----copyright-- */}
      <div className="copyright">
        <h2>Copyright © 2021, Snapdeal Limited. All Rights Reserved</h2>
        <h3>
          Made with <i className="fas fa-heart" /> in India
        </h3>
        <div className="pay" />
        <div className="social" />
      </div>
    </DIV>
  );
}

const DIV = styled.div`
  /* ---footer1--- */
  * {
    margin: 0%;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #f7f7f7;
    font-family: "Lato", sans-serif;
  }
  /* ------secure-- */

  .secure {
    margin-top: 40px;
    width: 100%;
    background-color: white;
    height: 200px;
    border-top: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
  }
  .cardsitems {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    height: 100%;
    margin: 0 100px;
  }
  .cards {
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-left: 1px solid #e2e2e2;
    border-right: 1px solid #e2e2e2;
    align-items: center;
  }

  .cards h3 {
    font-size: 18px;
    color: #5a5a5a;
    margin: 4px 0;
    margin-top: 10px;
  }

  .cards p {
    font-size: 12px;
    color: #a4a3a3;
    margin: 2px 0;
  }

  /* ---footer1--- */

  .footer1 {
    width: 100%;
    background-color: white;
    height: 40vh;
  }

  .footCard {
    display: flex;
    justify-content: center;
  }
  .footitems {
    margin: 40px 10px 0 30px;
  }
  .footitems h3 {
    font-size: 14px;
    color: #344c55;
  }
  .footitems p {
    font-size: 12px;
    padding-top: 14px;
    color: #a5a5a5;
    cursor: pointer;
  }
  .footitems p:hover {
    text-decoration: underline;
  }

  .footitems input {
    font-size: 13px;
    color: #999;
    border: none;
    border-radius: 2.9px;
    background-color: #f7f8fa;
    height: 37.5px;
    margin-top: 12px;
  }
  .footitems input:placeholder-shown {
    padding-left: 10px;
  }

  .footitems button {
    height: 38px;
    font-size: 12px;
    padding: 8px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-color: #333;
    background: #333;
    color: white;
    cursor: pointer;
  }

  .footitems span {
    color: #25a8ed;
    font-size: 12px;
    cursor: pointer;
  }

  /* ----payment-- */

  .payments {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 20px;
    background-color: white;
    border-top: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
  }
  .pay h2 {
    font-size: 14px;
  }
  .social h2 {
    font-size: 14px;
  }

  .icons {
    font-size: 28px;
    cursor: pointer;
  }
  .icons i {
    padding-right: 16px;
    padding-top: 10px;
  }

  .fa-facebook {
    color: blue;
  }
  .fa-twitter {
    color: blue;
  }
  .fa-youtube {
    color: red;
  }
  .fa-instagram {
    color: red;
  }
  .fa-pinterest {
    color: red;
  }

  .fa-cc-mastercard {
    color: #25a8ed;
  }
  .fa-cc-visa {
    color: lightskyblue;
  }
  .fa-cc-paypal {
    color: blue;
  }
  .fa-cc-apple-pay {
    color: red;
  }
  .fa-cc-amex {
    color: black;
  }
  /* ---about--- */

  .about {
    width: 100%;
    padding: 40px;
  }
  .about h2 {
    font-size: 18px;
    color: #344c55;
    font-weight: bold;
  }
  .about p {
    font-size: 14px;
    color: #777;
    line-height: 24px;
    word-spacing: 1px;
    margin-top: 15px;
  }

  /* ---copy */

  .copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: white;
    padding: 18px 28px 18px 28px;
  }
  .copyright h2 {
    color: #666666;
    font-size: 12px;
  }
  .copyright h3 {
    font-size: 12px;
    color: #666;
  }

  .copyright h3 i {
    color: #fd4b4b;
    padding-left: 4px;
    font-size: 16px;
    margin-right: 9px;
    margin-left: 3px;
  }
  a {
    text-decoration: none;
  }
`;
