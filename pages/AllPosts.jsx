import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import SearchBar from '../components/SearchBar';

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const MAX_DISPLAYED_POSTS = 10;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, []);

  const handleAddPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const filteredPosts = posts
    .filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
)
    .slice(0, MAX_DISPLAYED_POSTS);


  return (
    <main className="centered-container">
      <h2>All Posts</h2>

      <SearchBar onSearchTermChange={setSearchTerm} />

      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <PostList posts={filteredPosts} />
      )}

      <div className="create-post-container" style={{ marginTop: '2rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
        <PostForm onAddPost={handleAddPost} />
      </div>
    </main>
  )
}

export default AllPosts;
