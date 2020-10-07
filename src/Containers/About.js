import React from "react";
import '../Styles/About.css';
 
function About(props) {
  return (
    <>
    <div className="aboutHead">
            <div className="aboutName">About<span>Me</span>
            </div>
            <div className="aboutSub-name">
              A little bit about myself
            </div>
        </div>

    <div className="about animated animatedFadeInUp fadeInUp">
       <p className="aboutOneline">Hello, my name is Jamie Sear, I am a recent Digital Media graduate from the University of Leeds. I am currently learning to become a Full-Stack Web Developer at futureproof.</p>
    </div>

        <h1 className="skillsTitle">MY SKILLS & EXPERIENCE:</h1>
<div className="about-wrapper">
<div className="about-card">
	<h3 className="about-card-title">MY TECHNICAL SKILLS</h3>
    <li className="about-card-content">HTML5 & CSS3</li>
		<li className="about-card-content">JavaScript ES6+ & Node.js</li>
    <li className="about-card-content">PostgreSQL & MongoDB</li>
    <li className="about-card-content">Django & Flask</li>
    <li className="about-card-content">Python</li>
	</div>
  <div className="about-card">
	<h3 className="about-card-title">MY PERSONAL SKILLS</h3>
    <li className="about-card-content">Logical Problem Solver</li>
		<li className="about-card-content">Proactive Listener</li>
    <li className="about-card-content">Strong Teamwork Skills</li>
    <li className="about-card-content">Adaptable & Dependable</li>
    <li className="about-card-content">Effective Organizational Skills</li>
	</div>
	<div className="about-card">
		<h3 className="about-card-title">EXPERIENCE</h3>
    <li className="about-card-content1">Trainee Full Stack Developer at futureproof</li>
    <li className="about-card-content1">Graphic Designer at Silvertoad</li>
    <li className="about-card-content1">Cricket Trading Assistant at Weaverdat</li>
	</div>
</div>
</>
  )
}
 
export default About;