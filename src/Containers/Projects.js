import React from "react";
import '../Styles/Projects.css';
import captains from '../assets/images/CaptainsLog.png';
import blogSite from '../assets/images/blogSite.png';
import quiz from '../assets/images/Quizux.png';
import KVF from '../assets/images/KVF.png';
import shorturl from '../assets/images/ShortUrl.png';
import ToDo from '../assets/images/ToDo.png';
import stushare from '../assets/images/stushare.png';
import habit from '../assets/images/Apple.png';
 
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
      <img src ={captains} alt="project logo"/>
        <h1>Captain's Log</h1>
        <i class="fab fa-html5" aria-hidden="true"></i>
        <i class="fab fa-css3-alt" aria-hidden="true"></i>
        <i class="fab fa-react" aria-hidden="true"></i>
        <i class="fab fa-python" aria-hidden="true"></i>
        <i class="fab fa-bootstrap" aria-hidden="true"></i>
        <p className="projectDesciption">Captain's Log is a place for managers or captains to select teams for future games. Created with Django, React and Redux.</p>
        <a target="blank" className="projectLink" href="https://github.com/JamieSear/captains-log"><i class="fas fa-file-code"></i> Code</a>
      </div>

      <div class="card">
      <img src ={blogSite} alt="project logo"/>
        <h1>Blog Site</h1>
        <i class="fab fa-html5" aria-hidden="true"></i>
        <i class="fab fa-css3-alt" aria-hidden="true"></i>
        <i class="fab fa-js" aria-hidden="true"></i>
        <p className="projectDesciption">A blog site where users can create a post and attach an optional GIF to the post. Users can interact with other posts, by commenting or reacting to them and also serach for posts. Made using a RESTful API and express.js.</p>
        <a target="blank" className="projectLink" href="https://majc-blogs.netlify.app/"><i class="fas fa-globe"></i> Website</a>
        <br />
        <a target="blank" className="projectLink" href="https://github.com/JamieSear/Project-1-Journal"><i class="fas fa-file-code"></i> Code</a>
      </div>

      <div class="card">
      <img src ={quiz} alt="project logo"/>
        <h1>Quizux</h1>
        <i class="fab fa-html5" aria-hidden="true"></i>
        <i class="fab fa-css3-alt" aria-hidden="true"></i>
        <i class="fab fa-react" aria-hidden="true"></i>
        <p className="projectDesciption">A multiplayer Quiz App that allows users to design their own quiz using an external API to gather the questions. Created using React and Redux.</p>
        <a target="blank" className="projectLink" href="https://github.com/JamieSear/quiz-app"><i class="fas fa-file-code"></i> Code</a>
      </div>

      <div class="card">
      <img src ={KVF} alt="project logo"/>
        <h1>Kirkstall Valley Farm</h1>
        <i class="fab fa-wordpress" aria-hidden="true"></i>
        <p className="projectDesciption">A final year University Project created for a local CSA allowing them to promote their services to customers.</p>
        <a target="blank" className="projectLink" href="https://kirkstallvalleyfarm.jamiesear.com/"><i class="fas fa-globe"></i> Website</a>
      </div>

      <div class="card">
      <img src ={habit} alt="project logo"/>
        <h1>Habit Tracker</h1>
        <i class="fab fa-html5" aria-hidden="true"></i>
        <i class="fab fa-css3-alt" aria-hidden="true"></i>
        <i class="fab fa-js" aria-hidden="true"></i>
        <i class="fab fa-react" aria-hidden="true"></i>
        <p className="projectDesciption">Apple a Day is a habit tracking app. Once logged in the user can create new habits to track and set a frequency for the amount of times they wish to perform the habit. Users can then click the “Complete Habit” button and it will add to their streak. If the user fails to complete a habit on time it will reset the streak.</p>
        <a target="blank" className="projectLink" href="https://github.com/JamieSear/LAP-3-App"><i class="fas fa-file-code"></i> Code</a>
      </div>

      <div class="card">
      <img src ={shorturl} alt="project logo"/>
        <h1>Short URL</h1>
        <i class="fab fa-html5" aria-hidden="true"></i>
        <i class="fab fa-css3-alt" aria-hidden="true"></i>
        <i class="fab fa-python" aria-hidden="true"></i>
        <p className="projectDesciption">Using Python and Django, I created an app that is a clone of <a className="projectLink" href="https://www.shorturl.at/" target="blank">shorturl.at</a>, which allows users to type in a URL to a website and a shortened URL is returned. This project utilises a psqlite database to preserve user created shortened URLs.</p>
        <a target="blank" className="projectLink" href="https://shrink1.herokuapp.com/"><i class="fas fa-globe"></i> Website</a>
        <br/>
        <a target="blank" className="projectLink" href="https://github.com/JamieSear/short_url"><i class="fas fa-file-code"></i> Code</a>
      </div>

      <div class="card">
      <img src ={stushare} alt="project logo"/>
        <h1>stushare</h1>
        <i class="fab fa-html5" aria-hidden="true"></i>
        <i class="fab fa-css3-alt" aria-hidden="true"></i>
        <i class="fab fa-python" aria-hidden="true"></i>
        <i class="fab fa-bootstrap" aria-hidden="true"></i>
        <p className="projectDesciption">Using Django, I created an app that allows place for University students to share interesting resources that they have found whilst completing their course. This can provide people from different universities to gain a different view on a subject/topic.</p>
        <a target="blank" className="projectLink" href="http://jamiesear.pythonanywhere.com/"><i class="fas fa-globe"></i> Website</a>
        <br/>
        <a target="blank" className="projectLink" href="https://github.com/JamieSear/stuShare"><i class="fas fa-file-code"></i> Code</a>
      </div>

      <div class="card">
      <img src ={ToDo} alt="project logo"/>
        <h1>To-Do App</h1>
        <i class="fab fa-html5" aria-hidden="true"></i>
        <i class="fab fa-css3-alt" aria-hidden="true"></i>
        <i class="fab fa-python" aria-hidden="true"></i>
        <p className="projectDesciption">Using Django, I created an app that allows users to keep track of their daily activities in the form of a to-do list. Users can update tasks and mark them as completed.</p>
        <a target="blank" className="projectLink" href="https://github.com/JamieSear/django_todo"><i class="fas fa-file-code"></i> Code</a>
      </div>

      {/* <div class="card">
      <img src ={captains} alt="project logo"/>
        <h1>Captain's Log</h1>
        <p className="projectDesciption">Captain's Log is a place for managers or captains to select teams for future games.</p>
        <a target="blank" className="projectLink" href="">Click here to view</a>
      </div> */}
      </section>
</div>
  )
}
 
export default Projects;