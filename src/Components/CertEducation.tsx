import React from "react";
import "./CertEducation.css";
import { motion } from "framer-motion";
import { FaCertificate, FaGraduationCap } from "react-icons/fa";
const certifications = [
{
title: "Full Stack Web Development",
issuer: "Whoba Ogo Foundation",
year: "2025",
link: "#"
},
// {
// title: "JavaScript Algorithms & Data Structures",
// issuer: "freeCodeCamp",
// year: "2025",
// link: "#"
// },
// {
// title: "Responsive Web Design",
// issuer: "freeCodeCamp",
// year: "2024",
// link: "#"
// }
];
const education = [
{
degree: "Under-graduate Architecture",
school: "Imo State University, Nigeria",
year: "2024 – Present"
},
{
degree: "High School Certificate",
school: "Sharp Brain Concept Schools",
year: "2017 – 2023"
}
];
const CertEducation: React.FC = () => {
return (
<section className="cert-edu" id="cert-edu">
<h2 className="section-title">Certifications & Education</h2>
{/* Certifications */}
<div className="cert-section">
<h3><FaCertificate /> Certifications</h3>
<div className="cert-grid">
{certifications.map((cert, index) => (
<motion.a
href={cert.link}
target="_blank"
rel="noopener noreferrer"
key={index}
className="cert-card"
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: index * 0.1, duration: 0.5 }}
whileHover={{ scale: 1.05 }}
>
<h4>{cert.title}</h4>
<p>{cert.issuer}</p>
<span>{cert.year}</span>
</motion.a>
))}
</div>
</div>
{/* Education */}
<div className="edu-section">
<h3><FaGraduationCap /> Education</h3>
<div className="edu-timeline">
{education.map((edu, index) => (
<motion.div
className="edu-item"
key={index}
initial={{ opacity: 0, x: -40 }}
animate={{ opacity: 1, x: 0 }}
transition={{ delay: index * 0.2, duration: 0.5 }}
>
<div className="edu-content">
<h4>{edu.degree}</h4>
<p>{edu.school}</p>
<span>{edu.year}</span>
</div>
</motion.div>
))}
</div>
</div>
</section>
);
};
export default CertEducation;
