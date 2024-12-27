import React from "react";
import "../App.css";
import Home from "../assets/Menu-Button-Item (1).png";
import Messenger from "../assets/Menu-Button-Item (2).png";
import AddNew from "../assets/Menu-Button-Item (3).png";
import Navigation from "../assets/Menu-Button-Item (4).png";
import Liked from "../assets/Menu-Button-Item (5).png";
import ProfilePic from "../assets/Profile-Pic-S.png";
import Logo from "../assets/Logo.png";

import HomeWhite from "../assets/Home_white.png";
import MessengerWhite from "../assets/message_white.png";
import AddNewWhite from "../assets/Added.png";
import NavigationWhite from "../assets/navigation.png";
import LikedWhite from "../assets/like_white.png";
import LogoWhite from "../assets/logos_instagram.png";
export default function NavBar({ theme }) {
  return (
    <div className="nav-bar">
      <div className="nav">
        <div>
          <img src={theme === "light" ? Logo : LogoWhite} alt="" />
        </div>
        <div className="nav_input">
          <input type="text" placeholder="Search" />
        </div>
        <div className="nav_buttons">
          <img src={theme === "light" ? Home : HomeWhite} alt="" />
          <img src={theme === "light" ? Messenger : MessengerWhite} alt="" />
          <img src={theme === "light" ? AddNew : AddNewWhite} alt="" />
          <img src={theme === "light" ? Navigation : NavigationWhite} alt="" />
          <img src={theme === "light" ? Liked : LikedWhite} alt="" />
          <img src={ProfilePic} alt="" />
        </div>
      </div>
    </div>
  );
}
