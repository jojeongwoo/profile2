import React from 'react';
import './MyInfo.css';

function MyInfo() {
    return (
        <div className="myInfo">
            <div className="infoImg"></div>
            <div className="infoName">JEONGWOO CHO</div>
            <span className="infoText">I am an assistant <a href="#">professor</a> of the College of Computing at Sungkyunkwan University (SKKU) and affiliated with Computer Science Engineering (소프트웨어학과), Artificial Intelligence (인공지능대학원), and Electrical and Computer Engineering (전자전기컴퓨터공학과대학원) departments. I obtained my Ph.D. in Computer Science at Purdue University, IN, USA under the supervision of Prof. Jennifer Neville. My research interests lie in the fields of machine learning and data mining. In particular, I focus on learning human interactions, relational structures, graphs, and networks at all scales. Applications include knowledge discovery, user profiling, commonsense reasoning, recommender systems, explainable AI (XAI), and computational social science.</span>
            <span className="infoText">I am also looking for highly motivated M.S. and Ph.D. students. Please email me if you are interested in!</span>
        </div>
    )
}

export default MyInfo;
