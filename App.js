/**
 * <div id="parent">
 *    <div id= "child">
 *      <h1>I'm h1 tag</h1>
 *    </div>
 * </div>
 */
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="url" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
   return (
      <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
         <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kctsaavrl3spve81uhor" />
         <h3>Meghna Foods</h3>
         <h4>Biryani, North India, Asia</h4>
         <h4>4.4 star</h4>
         <h4>38 minutes</h4>
      </div>
   )
}
const Body = () => {
   return (
      <div className= "body">
        <div className="Search">Search</div>
        <div className="res-container">
           <RestaurantCard />
           <RestaurantCard />

        </div>
      </div>
   )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
