import React, { useState } from "react";
import { Link } from "react-router-dom";

function PostList({ posts }) {
  const [favorites, setFavorites] = useState({}); // Track favorites per post ID

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!posts.length) return <p>No posts found.</p>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} style={{ marginBottom: "20px" }}>
          <h3>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h3>
          <p>{post.body}</p>
          <button onClick={() => toggleFavorite(post.id)}>
            {favorites[post.id] ? "★ Unfavorite" : "☆ Favorite"}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
