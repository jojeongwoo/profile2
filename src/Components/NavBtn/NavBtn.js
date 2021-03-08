import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './NavBtn.css';

function NavBtn() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    }

     {/* <div onClick={scrollToTop}></div> */}

    return (
        <div className="navBox">
            <div className="navBar">
                <Link activeClass="active" to="about" spy={true} smooth={true} duration={700}></Link>
                <Link activeClass="active" to="skill" spy={true} smooth={true} duration={700} offset={10}></Link>
                <Link activeClass="active" to="cert" spy={true} smooth={true} duration={700} offset={10}></Link>
                <Link activeClass="active" to="edu" spy={true} smooth={true} duration={700} offset={15}></Link>
                <Link activeClass="active" to="project" spy={true} smooth={true} duration={700} offset={15}></Link>
                <Link activeClass="active" to="work" spy={true} smooth={true} duration={700} offset={15}></Link>
                <Link activeClass="active" to="publication" spy={true} smooth={true} duration={700} offset={30}></Link>
            </div>
        </div>
    )
}

export default NavBtn;
