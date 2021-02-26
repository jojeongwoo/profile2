import React from 'react';
import './App.css';

// components
import LeftBtn from './Components/LeftBtn/LeftBtn';
import LeftNav from './Components/LeftNav/LeftNav';
import MyInfo from './Components/MyInfo/MyInfo';
import Profile from './Components/Section/Profile';


import AboutMe from './Components2/AboutMe/AboutMe';
import Certification from './Components2/Certification/Certification';
import Education from './Components2/Education/Education';
import Project from './Components2/Project/Project';
import Publication from './Components2/Publication/Publication';
import Skill from './Components2/Skill/Skill';
import Work from './Components2/Work/Work';


function App() {
  return (
    <div className="App">
      {/* <div className="left">
        <LeftBtn />
        <LeftNav />
      </div>
      <MyInfo />
      <Profile /> */}
      <LeftNav />
      <AboutMe />
      <Skill />
      <Certification />
      <Education />
      <Project />
      <Work />
      <Publication />
    </div>
  );
}

export default App;
