import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../Styles/NavBar.css'
import { ReactComponent as Logo } from '../../assets/js-logo.svg'


const NavBar = ({ clickHandler }) => {
    return (
        <div className="navContainer">
            <div className="logoContainer">
                <Link to="/">
                {/* <img src="https://www.freepnglogos.com/uploads/javascript-png/black-js-logo-16.png"></img> */}
                {/* RESIZE THIS  */}
                <Logo />
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