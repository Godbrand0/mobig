import React from "react";
import Profile from "../Reuse/Profile";
import "../App.css";
import Blue from "../Reuse/Blue";

export default function Follow() {
  const followers = [
    {
      id: "0",
      profile: Profile,
      name: "John",
      by: "mark",
      other: "2 more",
    },
    {
      id: "1",
      profile: Profile,
      name: "Laura",
      by: "brandon",
      other: "6 more",
    },
    {
      id: "2",
      profile: Profile,
      name: "nikki",
      by: "mk",
      other: "1 more",
    },
    {
      id: "3",
      profile: Profile,
      name: "Elani",
      by: "adrianna",
      other: "1 more",
    },
    {
      id: "4",
      profile: Profile,
      name: "Tomaska",
      by: "Katerinasterling",
      other: "2 more",
    },
  ];
  return (
    <div className="follow">
      <div className="follow_profile">
        <Profile />
        <div className="profile_text">
          <p className="profile_text_1">Mediamodify</p>
          <p className="profile_text_2">Mediamodifier. Building Brands</p>
        </div>
        <Blue content="switch" />
      </div>
      <div className="follow_header">
        <p>Suggestions For you</p>
        <p>See All</p>
      </div>
      <div className="suggestion">
        {followers.map((follower) => (
          <div key={follower.id} className="suggest">
            <Profile />
            <div className="suggest_text">
              <p className="text_1">{follower.name}</p>
              <p className="text_2">
                Followed by {follower.by}.{follower.other}
              </p>
            </div>
            <Blue content="follow" />
          </div>
        ))}
      </div>
    </div>
  );
}
