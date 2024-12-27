import React from "react";
import file from "../assets/Profile-Pic-S.png";
import Add from "../Reuse/Add";
import Profile from "../Reuse/Profile";

export default function Story() {
  const storys = [
    {
      id: "0",
      profile: Profile,
      name: "John",
    },
    {
      id: "1",
      profile: Profile,
      name: "Laura",
    },
    {
      id: "2",
      profile: Profile,
      name: "nikki",
    },
    {
      id: "3",
      profile: Profile,
      name: "Elani",
    },
    {
      id: "4",
      profile: Profile,
      name: "Tomaska",
    },
    {
      id: "4",
      profile: Profile,
      name: "Tomaska",
    },
    {
      id: "4",
      profile: Profile,
      name: "Tomaska",
    },
    {
      id: "4",
      profile: Profile,
      name: "Tomaska",
    },
    {
      id: "4",
      profile: Profile,
      name: "Tomaska",
    },
  ];
  return (
    <div className="story_board">
      <div className="story_left">
        <img src={file} className="profile" />
        <Add />
      </div>
      <div className="story_grid">
        {storys.map((story) => (
          <div key={story.id} className="story_right">
            <Profile />
            <p>{story.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
