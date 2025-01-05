import React, { useMemo } from "react";
import useFetch from "../Api/useFetch";
import "../App.css";

import Dots from "../assets/Frame 36.png";
import Post from "../assets/Rectangle 55.png";
import Like from "../assets/Vector - Copy.png";
import Comment from "../assets/Vector (1) - Copy.png";
import Share from "../assets/Vector (Stroke).png";
import Bookmark from "../assets/Group 33.png";
import Emoji from "../assets/Group 34.png";

export default function Posts() {
  const options = useMemo(
    () => ({
      method: "GET",
      url: "https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts",
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
  const posts = Array.isArray(fetchedData) ? fetchedData : [];
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.taken_at) - new Date(a.taken_at)
  );
  console.log({ fetchedData });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="feeds">
        {sortedPosts &&
          sortedPosts.map((post, index) => (
            <div className="feed_board" key={index}>
              <div className="feed_header">
                <div className="feed_header_left">
                  <img src={post.user.profile_pic_url} alt="" />
                  <p>{post.user.username}</p>
                </div>

                <img src={Dots} alt="" />
              </div>

              <div className="feed_image">
                {post.is_video ? (
                  <video controls autoPlay className="media">
                    <source src={post.video_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={post.thumbnail_url} alt="Media" className="media" />
                )}
              </div>
              <div className="feed_icons">
                <div className="feed_icons_left">
                  <img src={Like} alt="" />
                  <img src={Comment} alt="" />
                  <img src={Share} alt="" />
                </div>
                <img src={Bookmark} alt="" />
              </div>
              <div className="feed_infos">
                <p className="likes">
                  Liked by <span>{post.like_count} others</span>
                </p>
                <p className="caption">{post.caption.text}</p>
                <div className="tags">
                  #media #mockup #design #blackfriday #sale
                </div>
                <p className="comments">
                  View all {post.comment_count} comments
                </p>
                <p className="time">
                  {new Date(post.taken_at * 1000).toLocaleString()}
                </p>
              </div>
              <div className="comment_section">
                <div className="input">
                  <img src={Emoji} alt="" />
                  <input type="text" placeholder="Add a comment ..." />
                </div>
                <p>Publish</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
