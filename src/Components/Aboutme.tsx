import React, { useEffect } from 'react';
import './AboutMe.css';
const AboutMe = () => {
useEffect(() => {
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('show');
}
});
});
const hiddenElements = document.querySelectorAll('.about-content');
hiddenElements.forEach(el => observer.observe(el));
}, []);
return (
    <section className="about-section" id="about">
<div className="about-container about-content">
<h2>About Me</h2>
<p>
I'm a passionate <strong>Frontend</strong> and <strong>Backend</strong>
developer with a love for building
clean, responsive, and interactive web applications. I enjoy transforming ideas into
digital experiences using
modern tools like <strong>React</strong>, <strong>Node.js</strong>, and
<strong>MongoDB</strong>. Whether it’s
building from scratch or improving existing products, I bring creativity, structure, and
functionality to every
project.
</p>
</div>
</section>
);

};
export default AboutMe;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             