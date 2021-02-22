import React from 'react';
import './App.css';

// components
import LeftBtn from './Components/LeftBtn/LeftBtn';
import LeftNav from './Components/LeftNav/LeftNav';
import MyInfo from './Components/MyInfo/MyInfo';
import Profile from './Components/Section/Profile';

function App() {
  return (
    <div className="App">
      <div className="left">
        <LeftBtn />
        <LeftNav />
      </div>
      <MyInfo />
      <Profile />
    </div>
  );
}

export default App;
