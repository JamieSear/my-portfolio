import React from "react";
import '../Styles/Projects.css';
import captains from '../assets/images/CaptainsLog.png';
import blogSite from '../assets/images/blogSite.png';
import quiz from '../assets/images/Quizux.png';
import KVF from '../assets/images/KVF.png';
import shorturl from '../assets/images/ShortUrl.png';
 
function Projects(props) {
  return (

    <div className="projects animated animatedFadeInUp fadeInUp">
           <div className="projectHead">
            <div className="projectName">My<span>Projects</span>
            </div>
            <div className="projectSub-name">
              Here are some of my projects
            </div>
        </div>


       <section class="card-container">

      <div class="card">
      <img src ={captains} alt="logo"/>
        <h1>Captain's Log</h1>
        <i class="fab fa-html5" aria-hidden="true"></i>
        <i class="fab fa-css3-alt" aria-hidden="true"></i>
        <i class="fab fa-react" aria-hidden="true"></i>
        <i class="fab fa-python" aria-hidden="true"></i>
        <i class="fab fa-bootstrap" aria-hidden="true"></i>
        <p className="projectDesciption">Captain's Log is a place for managers or captains to select teams for future games. Created with Django, React and Redux.</p>
        <a target="blank" className="projectLink" href="https://github.com/JamieSear/captains-log">View Code</a>
      </div>

      <div class="card">
      <img src ={blogSite} alt="logo"/>
        <h1>Blog Site</h1>
        <i class="fab fa-html5" aria-hidden="true"></i>
        <i class="fab fa-css3-alt" aria-hidden="true"></i>
        <i class="fab fa-js" aria-hidden="true"></i>
        <p className="projectDesciption">A blog site where users can create a post and attach an optional GIF to the post. Users can interact with other posts, by commenting or reacting to them and also serach for posts. Made using a RESTful API and express.js.</p>
        <a target="blank" className="projectLink" href="https://codepen.io/gregrickaby/pen/pVmgGX">View Website</a>
        <br />
        <a target="blank" className="projectLink" href="https://codepen.io/gregrickaby/pen/pVmgGX">View Code</a>
      </div>

      <div class="card">
      <img src ={quiz} alt="logo"/>
        <h1>Quizux</h1>
        <i class="fab fa-html5" aria-hidden="true"></i>
        <i class="fab fa-css3-alt" aria-hidden="true"></i>
        <i class="fab fa-react" aria-hidden="true"></i>
        <p className="projectDesciption">A multiplayer Quiz App that allows users to design their own quiz using an external API to gather the questions. Created using React and Redux.</p>
        <a target="blank" className="projectLink" href="https://github.com/JamieSear/quiz-app">View Code</a>
      </div>

      <div class="card">
      <img src ={KVF} alt="logo"/>
        <h1>Kirkstall Valley Farm</h1>
        <i class="fab fa-wordpress" aria-hidden="true"></i>
        <p className="projectDesciption">A final year University Project created for a local CSA allowing them to promote their services to customers.</p>
        <a target="blank" className="projectLink" href="https://kirkstallvalleyfarm.jamiesear.com/">View Website</a>
      </div>

      <div class="card">
      <img src ={shorturl} alt="logo"/>
        <h1>Short URL</h1>
        <i class="fab fa-html5" aria-hidden="true"></i>
        <i class="fab fa-css3-alt" aria-hidden="true"></i>
        <i class="fab fa-python" aria-hidden="true"></i>
        <p className="projectDesciption">Using Python and Django, I created an app that is a clone of <a className="projectLink" href="https://www.shorturl.at/" target="blank">shorturl.at</a>, which allows users to type in a URL to a website and a shortened URL is returned. This project utilises a psqlite database to preserve user created shortened URLs.</p>
        <a target="blank" className="projectLink" href="https://shrink1.herokuapp.com/">View Website</a>
        <br/>
        <a target="blank" className="projectLink" href="https://github.com/JamieSear/short_url">View Code</a>
      </div>

      {/* <div class="card">
      <img src ={captains} alt="logo"/>
        <h1>Captain's Log</h1>
        <p className="projectDesciption">Captain's Log is a place for managers or captains to select teams for future games.</p>
        <a target="blank" className="projectLink" href="https://codepen.io/gregrickaby/pen/pVmgGX">Click here to view</a>
      </div> */}
      </section>
</div>
  )
}
 
export default Projects;