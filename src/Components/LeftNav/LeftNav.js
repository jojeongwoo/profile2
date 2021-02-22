import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './LeftNav.css';

function leftNav() {
    return (
        <div className="navBox">
            <ul className="navBar">
                <li><Link activeClass="active" to="profile" spy={true} smooth={true} duration={700} offset={-250}>PROFILE</Link></li>
                <li><Link activeClass="active" to="workExperience" spy={true} smooth={true} duration={700} offset={-250}>WORK EXPERIENCE</Link></li>
                <li><Link activeClass="active" to="education" spy={true} smooth={true} duration={700} offset={-250}>EDUCATION</Link></li>
                <li><Link activeClass="active" to="selected" spy={true} smooth={true} duration={700} offset={-250}>SELECTED PUBLICATION</Link></li>
                <li><Link activeClass="active" to="award" spy={true} smooth={true} duration={700} offset={-250}>AWARD</Link></li>
                <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={700}>CONTACT</Link></li>
            </ul>
        </div>
    )
}

export default leftNav;
