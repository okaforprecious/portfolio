import React from 'react';
import './HeroSection.css';
import profileImg from '../assets/picture.jpg'; 

const HeroSection: React.FC = () => {
return (
<section className="hero">
<div className="hero-content">
<div className="hero-text">
<h1>Hello, I'm Presh</h1>
<p>Full Stack Developer | Creative Problem Solver | Frontend Lover</p>
<a href="#projects" className="btn">See My Work</a>
<a href="https://wa.me/2348136672746" target="_blank" rel="noopener noreferrer"
className="btn-outline">
Contact Me
</a>
</div>
<div className="hero-image">
<img src={profileImg} alt="Presh" />
</div>
</div>
</section>
);
};
export default HeroSection;
