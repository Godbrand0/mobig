import React, { useMemo } from "react";
import useFetch from "../Api/useFetch";
import file from "../assets/Profile-Pic-S.png";
import Add from "../Reuse/Add";
import Profile from "../Reuse/Profile";

export default function Story() {
  const options = useMemo(
    () => ({
      method: "GET",
      url: "https://instagram-scraper-api2.p.rapidapi.com/v1/following",
      params: {
        username_or_id_or_url: "mrbeast",
        url_embed_safe: "true",
      },
      headers: {
        "x-rapidapi-key": "64728cf656msh1775344a295e74dp1dd74ajsne3557ca01283",
        "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
      },
    }),
    []
  );
  const { data, loading, error } = useFetch(options);
  const fetchedData = data?.data?.items || [];
  const stories = Array.isArray(fetchedData) ? fetchedData : [];
  console.log({ fetchedData });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="story_board">
      <div className="story_left">
        <img src={file} className="profile" />
        <Add />
      </div>
      <div className="story_grid">
        {stories.map((story, index) => (
          <div className="story_right" key={index}>
            <img src={story.profile_pic_url} alt="" />
            <p>{story.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
