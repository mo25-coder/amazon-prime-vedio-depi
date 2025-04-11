import React from "react";
import "../../assets/css/MyStuff/MyStuff.css";
import Navbar from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

const MyStuff = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="myStuffPage">
          <div className="myStuffHeader">
            <h1>My Stuff</h1>
          </div>
          <div className="sub1">
            <h2 classname="subHeader">Watch List</h2>
            <p classname="subPara">
              Your Wishlist is Empty, Add <a href="/">TV shows</a> and{" "}
              <a href="/">Movies</a> that you want to watch later by clicking
              Add to Watch list.
            </p>
          </div>
          <div className="sub2">
            <h2 classname="subHeader">Pre-orders</h2>
            <p classname="subPara">
              You don't have any Pre-orders, If videos you were expecting aren't
              shown, make sure you're signed in and using the correct Amazon
              account and then <a href="#">refresh this page</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyStuff;
