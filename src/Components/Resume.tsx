import React from "react";
import { FaDownload } from "react-icons/fa";
import "./Resume.css";
import resume from "../assets/resume.pdf";
const Resume: React.FC = () => {
return (
<section className="resume-section" id="resume">
<div className="resume-card">
<h2 className="resume-title">Download My Resume</h2>
<p className="resume-desc">
Explore my skills, projects, and professional experience in detail.
Download my resume to see the full picture of what I can bring to your team.
</p>
<a
href={resume} // put your resume.pdf in public/ folder
download
className="resume-button"
>
<FaDownload className="resume-icon" /> Download Resume
</a>
</div>
</section>
);
};
export default Resume;
