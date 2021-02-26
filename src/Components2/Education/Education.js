import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './Education.css';

function Education() {
return (
    <Element name="edu" className="edu">
        <section className="eduContainer">
            <ul className="ul">
                <div>
                    <li className="stitle">
                        <p>EDUCATION</p>
                    </li>
                </div>

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
    </Element>
    )
}

export default Education;
