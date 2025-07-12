import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching post:", err);
        setPost(null);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    // Simulate DELETE API call
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          alert("Post deleted (simulated)");
          navigate("/posts"); // Redirect back to all posts
        } else {
          throw new Error("Failed to delete");
        }
      })
      .catch((err) => {
        console.error("Error deleting post:", err);
        alert("Failed to delete post.");
      });
  };

  if (loading) return <p>Loading post...</p>;
  if (!post || !post.title) return <p>Post not found.</p>;

  return (
    <div className="centered-container">
      <Link to="/posts" style={{ marginBottom: "20px", display: "inline-block" }}>
        ← Back to All Posts
      </Link>

      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => navigate(`/posts/${id}/edit`)} style={{ marginRight: "10px" }}>
          Edit
        </button>
        <button onClick={handleDelete} style={{ backgroundColor: "#d9534f", color: "white" }}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default PostDetail;
