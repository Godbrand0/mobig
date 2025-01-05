import React, { useMemo } from "react";
import Profile from "../Reuse/Profile";
import "../App.css";
import Blue from "../Reuse/Blue";
import useFetch from "../Api/useFetch";

export default function Follow() {
  const options = useMemo(
    () => ({
      method: "GET",
      url: "https://instagram-scraper-api2.p.rapidapi.com/v1/followers",
      params: {
        username_or_id_or_url: "mrbeast",
      },
      headers: {
        "x-rapidapi-key": "64728cf656msh1775344a295e74dp1dd74ajsne3557ca01283",
        "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
      },
    }),
    []
  );

  const profile = useMemo(
    () => ({
      method: "GET",
      url: "https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts",
      params: {
        username_or_id_or_url: "mrbeast",
      },
      headers: {
        "x-rapidapi-key": "64728cf656msh1775344a295e74dp1dd74ajsne3557ca01283",
        "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
      },
    }),
    []
  );
  const { data, loading, error } = useFetch(options);
  const fetchedData = data?.data?.items.slice(0, 5) || [];
  const followers = Array.isArray(fetchedData) ? fetchedData : [];
  console.log({ fetchedData });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
        <p>Suggestions For You</p>
        <p>See All</p>
      </div>
      <div className="suggestion">
        {followers &&
          followers.map((follower, index) => (
            <div key={index} className="suggest">
              <img
                src={
                  follower.profile_pic_url || "https://via.placeholder.com/150"
                }
                alt={`Profile of ${follower.full_name || "user"}`}
                className="follow_img"
              />

              <div className="suggest_text">
                <p className="text_1">{follower.full_name}</p>
                <p className="text_2">
                  Followed by {follower.by}. {follower.other}
                </p>
              </div>
              <Blue content="follow" />
            </div>
          ))}
      </div>
    </div>
  );
}
