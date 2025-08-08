import React from "react";
import "./TechStack.css";
import { motion } from "framer-motion"; // Animation library
// Icons from react-icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaFigma, FaDatabase } from
"react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTypescript, SiMysql, SiTailwindcss,
SiBootstrap } from "react-icons/si";
const techs = [
{ name: "React", icon: <FaReact color="#61DBFB" />  },
{ name: "Node.js", icon: <FaNodeJs color="#68A063" /> },
{ name: "Express.js", icon: <SiExpress color="#fff" /> },
{ name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
{ name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
{ name: "HTML5", icon: <FaHtml5 color="#e34c26" /> },
{ name: "CSS3", icon: <FaCss3Alt color="#264de4" /> },
{ name: "TailwindCSS", icon: <SiTailwindcss color="#06b6d4" /> },
// { name: "Bootstrap", icon: <SiBootstrap color="#563d7c" /> },
{ name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
// { name: "MySQL", icon: <SiMysql color="#00758F" /> },
{ name: "Database Design", icon: <FaDatabase color="#FFD700" /> },
{ name: "Git & GitHub", icon: <FaGithub color="#fff" /> },
// { name: "Figma", icon: <FaFigma color="#F24E1E" /> },
];
const TechStack: React.FC = () => {
return (
<section className="techstack" id="techstack">
<h2 className="tech-title">💻 Tech Stack & Tools</h2>
<p className="tech-subtitle">
These are the technologies and tools I use to design and build beautiful, responsive,
and powerful web applications.
</p>
<div className="tech-grid">
{techs.map((tech, index) => (
<motion.div
key={index}
className="tech-card"
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: index * 0.1, duration: 0.5 }}
whileHover={{ scale: 1.1 }}
>
<div className="tech-icon">{tech.icon}</div>
<span>{tech.name}</span>
</motion.div>
))}
</div>
</section>
);
};
export default TechStack;
