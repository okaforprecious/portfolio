import React, { useEffect } from 'react';
import './ContactMe.css';
const ContactMe = () => {
useEffect(() => {
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('reveal');
}
});
});
const hidden = document.querySelectorAll('.contact-content');
hidden.forEach(el => observer.observe(el));
}, []);
const whatsappLink = "https://wa.me/2348136672746"; 


return (
<section className="contact-section" id="contact">
<div className="contact-content">
<h2>Let's Work Together</h2>
<p>I’m open to new opportunities and collaborations. If you have a project in mind or
want to connect, let’s chat!</p>
<a href={whatsappLink} target="_blank" rel="noopener noreferrer">
<button className="cta-button">Chat Me on WhatsApp</button>
</a>
</div>
</section>
);
};
export default ContactMe;
