import React, { useEffect, useState } from "react";
import axios from "axios";

import Dots from "../assets/Frame 36.png";
import Post from "../assets/Rectangle 55.png";
import Like from "../assets/Vector - Copy.png";
import Comment from "../assets/Vector (1) - Copy.png";
import Share from "../assets/Vector (Stroke).png";
import Bookmark from "../assets/Group 33.png";
import Emoji from "../assets/Group 34.png";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts",
        params: {
          username_or_id_or_url: "mrbeast",
          url_embed_safe: "true",
        },
        headers: {
          "x-rapidapi-key":
            "d69dcb98e0msh1f3c5c95ebbc67ep146c90jsn3e9bf6fdffd3",
          "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
        },
      };

      //   try {
      //     const response = await axios.request(options);
      //     const res = response.data.items;
      //     setPosts(res);
      //     setLoading(false);
      //     console.log(res);
      //   } catch (error) {
      //     console.log("Error fetching data:" + error);
      //     setLoading(false);
      //     setError("Error fetching data:" + error.message);
      //   }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="feeds">
        {posts.map((post, index) => (
          <div className="feed_board" key={index}>
            <div className="feed_header">
              <div className="feed_header_left">
                <img src={post.owner.profile_pic_url} alt="" />
                <p>{post.user.username}</p>
              </div>

              <img src={Dots} alt="" />
            </div>

            <div className="feed_image"></div>
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
              <p className="comments">View all {post.comment_count} comments</p>
              <p className="time">
                {post.taken_at
                  ? new Date(post.taken_at * 1000).toLocaleString()
                  : "N/A"}
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
