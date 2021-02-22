import React, { useRef } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import './Section.css';

function Profile() {

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <section>
            <div className="container">
                <ul className="ul">
                        <Element name="profile">
                            <li className="title">
                                <span className="proTag"></span>
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
                <ul className="ul">
                        <Element name="workExperience">
                            <li className="title">
                                <span className="proTag"></span>
                                <p>WORK EXPERIENCE</p>
                            </li>
                        </Element>

                        <li className="column">
                            <span>SUMMER 2017 AND SUMMER 2018</span>
                            <p>Research Intern</p>
                            <p>IBM Research - Almaden in San Jose, CA, USA</p>
                            <span>Participated Projects about Adversarial Neural Network and Relationship Classification</span>
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
                <ul className="ul">
                        <Element name="education">
                            <li className="title">
                                <span className="proTag"></span>
                                <p>EDUCATION</p>
                            </li>
                        </Element>

                        <li className="column">
                            <span>SUMMER 2017 AND SUMMER 2018</span>
                            <p>Research Intern</p>
                            <p>IBM Research - Almaden in San Jose, CA, USA</p>
                            <span>Participated Projects about Adversarial Neural Network and Relationship Classification</span>
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
                <ul className="ul">
                        <Element name="selected">
                            <li className="title">
                                <span className="proTag"></span>
                                <p>SELECTED PUBLICATION</p>
                            </li>
                        </Element>

                        <li className="column">
                            <span>SUMMER 2017 AND SUMMER 2018</span>
                            <p>Research Intern</p>
                            <p>IBM Research - Almaden in San Jose, CA, USA</p>
                            <span>Participated Projects about Adversarial Neural Network and Relationship Classification</span>
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
                <ul className="ul">
                        <Element name="award">
                            <li className="title">
                                <span className="proTag"></span>
                                <p>AWARD</p>
                            </li>
                        </Element>

                        <li className="column">
                            <span>SUMMER 2017 AND SUMMER 2018</span>
                            <p>Research Intern</p>
                            <p>IBM Research - Almaden in San Jose, CA, USA</p>
                            <span>Participated Projects about Adversarial Neural Network and Relationship Classification</span>
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
                <ul className="ul">
                        <Element name="contact">
                            <li className="title">
                                <span className="proTag"></span>
                                <p>CONTACT</p>
                            </li>
                        </Element>

                        <li className="column">
                            <span>SUMMER 2017 AND SUMMER 2018</span>
                            <p>Research Intern</p>
                            <p>IBM Research - Almaden in San Jose, CA, USA</p>
                            <span>Participated Projects about Adversarial Neural Network and Relationship Classification</span>
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
                <ul className="ul lastUl">
                        <a onClick={scrollToTop} className="scrollToTop">BACK TO THE TOP</a>        
                    </ul>        
            </div>
            
        </section>
    )
}

export default Profile;
