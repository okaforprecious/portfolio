import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skill.css"; 
const Skill = () => {
useEffect(() => {
AOS.init({ duration: 1000 });
}, []);
const skills = [
"HTML",
"CSS",
"JavaScript",
"React",
"Node.js",
"MongoDB",
"Git & GitHub",
"Tailwind CSS",
"REST APIs",
];
return (
<section className="skills-section" id="skills">
<div className="skills-container" data-aos="fade-up">
<h2>My Skills</h2>
<p className="skills-subtext">Here are some of the tools I use:</p>
<div className="skills-list">
{skills.map((skill, index) => (
<span className="skill-chip" key={index} data-aos="zoom-in">
{skill}
</span>
))}

</div>
</div>
</section>
);
};
export default Skill;
