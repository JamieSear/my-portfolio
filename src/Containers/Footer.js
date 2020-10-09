import React, { Component } from 'react';
import '../Styles/Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="footerContainer">
                    <a target="blank" className="navlink" href="https://www.linkedin.com/in/jamie-sear-26976a153/"><i class="fab fa-linkedin-in"></i></a>
                    <a className="navlink" href="mailto:jamiesear11@hotmail.co.uk"><i class="fas fa-envelope"></i></a>
                    <a target="blank" className="navlink" href="https://github.com/JamieSear"><i class="fab fa-github"></i></a>
                
            </div>
        )
    }
}