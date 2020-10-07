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

        <h1 className="skillsTitle">My Skills:</h1>
<div className="about-wrapper">
<div className="about-card">
	<h3 className="about-card-title">My Technical Skills</h3>
    <li className="about-card-content">HTML5 & CSS3</li>
		<li className="about-card-content">JavaScript ES6+ & Node.js</li>
    <li className="about-card-content">Python</li>
	</div>
	<div className="about-card">
		<h3 className="about-card-title">CARD TITLE</h3>
		<p className="about-card-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
	</div>
	<div className="about-card">
		<h3 className="about-card-title">CARD TITLE</h3>
		<p className="about-card-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
	</div>
</div>
</>
  )
}
 
export default About;