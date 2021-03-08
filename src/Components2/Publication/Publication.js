import React from "react";
import {
    Link,
    DirectLink,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
} from "react-scroll";
import "./Publication.css";

function Publication() {
    return (
        <Element name="publication" className="publication">
            <section className="pubContainer">
                <ul className="ul">
                    <li className="stitle">
                        <p>PUBLICATION</p>
                    </li>
                    <li className="column">
                        <span>FULL NAME</span>
                        <p>JEONGWOO CHO(조정우)</p>
                    </li>

                    <li className="column">
                        <span>SOCIAL MEDIA</span>
                        <p>
                            <a href="#">Flickr</a>
                        </p>
                    </li>

                    <li className="column">
                        <span>GOOGLE SCHOLAR</span>
                        <p>
                            <a>Google Scholar Profile</a>
                        </p>
                    </li>

                    <li className="column">
                        <span>LINKEDIN PROFILE</span>
                        <p>
                            <a>Linkedin</a>
                        </p>
                    </li>

                    <li className="column">
                        <span>DOWNLOAD CV</span>
                        <p>
                            <a>Curriculum Vitae</a>
                        </p>
                    </li>
                </ul>
            </section>
        </Element>
    );
}

export default Publication;
