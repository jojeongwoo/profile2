import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './AboutMe.css';

function AboutMe() {
    return (
        <Element name="about" className="aboutContent">
                <div className="aboutBox">
                    <div className="aboutUp">
                        <div className="upText">
                            안녕하세요.<br />
                            개발자 <strong>OOO</strong>입니다.
                        </div>
                        {/* <img className="upImg" /> */}
                        <div className="upImg"></div>
                    </div>

                    <div name="about" className="aboutMiddle">
                        오늘 내가 만든 프로그램이 누군가에게 도움을 줄 수 있다는 사실에서 동기를 얻습니다. 
                        아이디어가 제 손을 통해 현실화되고, 그렇게 현실화된 프로덕트를 통해 사용자가 해피모먼트를 경험하는 것을 보면 보람을 느낍니다.
                    </div>

                    <div className="aboutDown">
                        <i className="far fa-envelope"></i>
                        <i className="fab fa-github"></i>
                        <i className="fas fa-rss"></i>
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                </div>
        </Element>         
    )
}

export default AboutMe;
