import React, { useState, useEffect } from 'react';
import Project1 from '../assets/portfolio-pp.jpg'
import Project2 from '../assets/love-nature-pp.jpg'
import Project3 from '../assets/portfolio-pp.jpg'
import './BestProject.css';
const projects = [
{
title: "Portfolio Website",
description: "Built with React, responsive, and animated.",
image: Project1,
link: " http://localhost:5173/"
},
{
title: "Love-nature website",
description: "Built with html and css.",
image:Project2,
link: "https://love-nature-asi.vercel.app/"
},
{
title: "Blog Platform",
description: "A markdown-powered blog with SEO support.",
image: Project3,
link: "#"
}
];
const BestProjects: React.FC = () => {
const [index, setIndex] = useState(0);
useEffect(() => {
const slideInterval = setInterval(() => {
setIndex((prevIndex) => (prevIndex + 1) % projects.length);
}, 4000); // Auto-slide every 4 seconds
return () => clearInterval(slideInterval);
}, []);
const handlePrev = () => {
setIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
};
const handleNext = () => {
setIndex((prevIndex) => (prevIndex + 1) % projects.length);
};


return (
    <section id="projects" className="projects-section">
<h2>My Best Projects</h2>
<div className="slider">
<button onClick={handlePrev} className="arrow left">←</button>
<div className="project-card">
<img src={projects[index].image} alt={projects[index].title} />
<h3>{projects[index].title}</h3>
<p>{projects[index].description}</p>
<a href={projects[index].link} target="_blank" rel="noopener noreferrer">View
Project</a>
</div>
<button onClick={handleNext} className="arrow right">→</button>
</div>
</section>
);
};

export default BestProjects;
