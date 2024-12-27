import React from "react";
import profile from "../assets/Profile-Pic-S.png";
import "../Reuse/profile.css";

export default function Profile() {
  return (
    <div className="image">
      <img src={profile} alt="" />
    </div>
  );
}
