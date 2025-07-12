import React, { useState } from "react";

function PostForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    const newPost = {
      id: Date.now(),
      title,
      body,
    };

    onAddPost(newPost);
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Create a New Post</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default PostForm;
