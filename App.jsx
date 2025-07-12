import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Posts-Exercise/components/Header";
import Footer from "./Posts-Exercise/components/Footer";
import PostDetail from "./Posts-Exercise/components/PostDetail";
import EditPost from "./Posts-Exercise/components/EditPost";

import Home from "./Posts-Exercise/pages/Home";
import About from "./Posts-Exercise/pages/About";
import AllPosts from "./Posts-Exercise/pages/AllPosts";


import './index.css';

function App() {
  return (
    <Router>
      <div className="page-wrapper"> {/* <== ONLY add this wrapper */}
        <Header />
        <main className="centered-container page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<AllPosts />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/posts/:id/edit" element={<EditPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
