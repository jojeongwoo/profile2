import React from 'react';
import './App.css';

// components
import NavBtn from './Components/NavBtn/NavBtn';
import AboutMe from './Components/AboutMe/AboutMe';
import Certification from './Components/Certification';
import Education from './Components/Education';
import Project from './Components/Project';
import Publication from './Components/Publication';
import Skill from './Components/Skill';
import Work from './Components/Work';

function App() {
  return (
    <div className="App">
      <NavBtn />
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
