import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './LeftNav.css';

function leftNav() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    

    return (
        <div className="navBox">
            <ul className="navBar">
                <li onClick={scrollToTop}></li>
                <li><Link activeClass="active" to="skill" spy={true} smooth={true} duration={700}>321</Link></li>
                <li><Link activeClass="active" to="cert1" spy={true} smooth={true} duration={700}>321</Link></li>
            </ul>
        </div>
    )
}

export default leftNav;
