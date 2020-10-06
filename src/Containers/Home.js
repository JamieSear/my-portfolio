import React from "react"
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
 
function Home(props) {
  return (
    <>
<div class="head">
            <div class="name">Jamie<span>Sear</span>
            </div>
            <div class="sub-name">
              Full Stack Engineer 
              <br />
              <Link to="/about"><button className="home-btn">About me</button> </Link>
              <br />
              <Link to="/projects"><button className="home-btn">View my work</button></Link>
            </div>
        </div>
        </>
  )
}
 
export default Home;