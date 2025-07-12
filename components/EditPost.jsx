import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({ title: "", body: "" });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => {
            console.log("Fetched data:", data); // ✅ Correct placement
            setPost({ title: data.title, body: data.body });
            setLoading(false);
        })
        .catch((err) => {
            console.error("Failed to load post:", err);
            setLoading(false);
        });
}, [id]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Post:", post);
        alert("Post updated! (simulated)");
        navigate(`/posts/${id}`);
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="centered-container">
            <h2>Edit Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={post.title}
                    onChange={handleChange}
                    placeholder="Title"
                />

                <textarea
                    name="body"
                    value={post.body}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Post content"
                />
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default EditPost;