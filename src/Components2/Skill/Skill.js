import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './Skill.css';

function Skill() {
    return (
        <div className="skill">
            <section className="skillContainer">
                <ul className="ul">
                    <Element name="skill">
                        <li className="stitle">
                            <p>PROFILE</p>
                        </li>
                    </Element>

                    <li className="column">
                        <span>FULL NAME</span>
                        <p>JEONGWOO CHO(조정우)</p>
                    </li>

                    <li className="column">
                        <span>SOCIAL MEDIA</span>
                        <p><a href="#">Flickr</a></p>
                    </li>

                    <li className="column">
                        <span>GOOGLE SCHOLAR</span>
                        <p><a>Google Scholar Profile</a></p>
                    </li>

                    <li className="column">
                        <span>LINKEDIN PROFILE</span>
                        <p><a>Linkedin</a></p>
                    </li>

                    <li className="column">
                        <span>DOWNLOAD CV</span>
                    <p><a>Curriculum Vitae</a></p>
                </li>
            </ul>
        </section>
    </div>
    )
}

export default Skill;
