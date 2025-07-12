import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostDetail from "./components/PostDetail";
import EditPost from "./components/EditPost";

import Home from "./pages/Home";
import About from "./pages/About";
import AllPosts from "./pages/AllPosts";


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
