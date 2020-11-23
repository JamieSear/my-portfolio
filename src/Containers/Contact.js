import React from "react";
import '../Styles/Contact.css'
 
function Contact(props) {
  return (
    <>
    <div className="aboutHead">
        <div className="aboutName">Contact<span>Me</span>
        </div>
        <div className="aboutSub-name">
          Please get in touch
        </div>
    </div>
    <div className="contacts animated animatedFadeInUp fadeInUp">
       <h2 className="contactTitle">Please contact me through the following:</h2>
       <p className="contactLinks"><button className="contact-btn" target="blank" href="https://www.linkedin.com/in/jamie-sear">LINKEDIN</button></p>
       <br/>
       <p className="contactLinks"><button className="contact-btn" href="mailto:jamiesear11@hotmail.co.uk">EMAIL</button></p>
        
    </div>
    </>
  )
}
 
export default Contact;