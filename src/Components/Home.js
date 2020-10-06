import React from "react"
// import '../styles/Home.css';
 
function Home(props) {
  return (
    <div className="home">
    <div className="homeDescription animated animatedFadeInUp fadeInUp">
        <p className="homeOneline">Hello, my name is Jamie Sear, I am a recent Digital Media graduate from the University of Leeds. I am currently learning to become a Full-Stack Web Developer at futureproof.</p>
      </div>
        <button className="homeBtn">About me</button>
        <button className="homeBtn">View my work</button>
    </div>
  )
}
 
export default Home;