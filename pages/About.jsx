import React from 'react';

function About() {
    return (
        <main className="centered-container">
            <h1>About This Blog</h1>
            <br></br>
            <p>
                Welcome to My React Blog - a personal space where I share tutorials, thoughts and tips 
                on web development, programming and everything tech!
            </p>

            <br></br>

            <h2>Topics I Write About</h2>
            <ul className="about-list">
                <li>React & Javascript</li>
                <li>Frontend Development</li>
                <li>CSS & UI Designer</li>
                <li>Career & Productivity</li>
            </ul>

            <p className="about-cta">
                Thanks for visiting! Don't forget to check out the latest posts we have currently. Be the first to get updates live on this website!
            </p>
        </main>
    );
}

export default About;