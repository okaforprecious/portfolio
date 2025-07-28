import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">Presh</span>
        </h1>
        <p>
          I’m a Full Stack Developer who turns ideas into fast, responsive, and
          elegant web experiences.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            See My Work
          </a>
          <a href="https://wa.me/2348136672746" target="blank" rel="noopener noreferrer" className="btn secondary">
            Contact Me
          </a>
        </div>
        <div className="scroll-cue">↓</div>
      </div>
    </section>
  );
};

export default Hero;
