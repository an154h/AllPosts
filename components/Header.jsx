import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={{ background: '#333', padding: '10px 0' }}>
            <div className="centered-container">
                <nav>
                <Link to="/" style={{ color: '#fff', marginRight: '10px' }}>Home</Link>
                <Link to="/about" style={{ color: '#fff', marginRight: '10px' }}>About</Link>
                <Link to="/posts" style={{ color: '#fff' }}>All Posts</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;