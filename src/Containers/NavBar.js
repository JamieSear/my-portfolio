import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/my-logo.png';
import '../Styles/NavBar.css';


const NavBar = () => {
    return (
        <div className="navContainer">
            <div className="logoContainer">
                <Link to="/">
                <img src ={logo} alt="logo"/>
                </Link>
            </div>
            <nav className="nav">
                <NavLink className="navlink" activeClassName="current" to="/" href="about">HOME</NavLink>
                <NavLink className="navlink" activeClassName="current" to="/about" href="about">ABOUT</NavLink>
                <NavLink className="navlink" activeClassName="current" to="/projects" href="projects">PROJECTS</NavLink>
                <NavLink className="navlink" activeClassName="current" to="/contact">CONTACT</NavLink>
            </nav>

            
        </div>
    );
}

export default NavBar;