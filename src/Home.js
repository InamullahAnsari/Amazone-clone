import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How constant innovation creates rapidly successful business paperbach"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/617pswQUCXL._AC_SX880_SY660_.jpg"
        />
        <Product
          id="12321342"
          title="All-new Fire TV stick, All-new Fire TV stick, All-new Fire TV stick,All-new Fire TV stick, All-new Fire TV stick"
          price={99.96}
          rating={3}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/02_379x304_Desktop_Card_SP._SY304_CB404302689_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321343"
          title="New Echo Dot with clock"
          price={61.96}
          rating={3}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/06_379x304_Desktop_Card_GE._SY304_CB404302721_.jpg"
        />
        <Product
          id="12321344"
          title="Echo smart speakers"
          price={51.96}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/08_379x304_Desktop_Card_Mix._SY304_CB404302420_.jpg"
        />
        <Product
          id="12321345"
          title="Smartify your home"
          price={41.96}
          rating={2}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/DC-Cards/05_379X304_Desktop_Card_SH._SY304_CB404302803_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321346"
          title="L'Oreal Paris Total Repair 5 Shampoo 704ml Combo with Conditioner, 192.5ml + Serum, 40ml"
          price={31.96}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/41rmsc40wNL._AC_UL246_SR190,246_FMwebp_QL70_.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
