import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../Styles/NavBar.css'


const NavBar = () => {
    return (
        <div className="navContainer">
            <div className="logoContainer">
                <Link to="/">
                <p>Jamie</p>
                </Link>
            </div>
            <nav className="nav">
                <NavLink className="navlink" activeClassName="current" to="/" href="about">Home</NavLink>
                <NavLink className="navlink" activeClassName="current" to="/about" href="about">About</NavLink>
                <NavLink className="navlink" activeClassName="current" to="/projects" href="projects">Projects</NavLink>
                <NavLink className="navlink" activeClassName="current" to="/contact">Contact me</NavLink>
            </nav>
        </div>
    );
}

export default NavBar;