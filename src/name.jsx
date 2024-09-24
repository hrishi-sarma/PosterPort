import React from 'react';
import './name.css'; // Import the CSS file
import profile from './assets/buddy.jpeg'

const App = () => {
  return (
    <div className="main-container">
      <div className="main-display">Main Display</div>
      <div className="left-cards">
        <div className="cardP">
          
          <img src={profile} alt="image" />
          <h1>Name</h1>
          </div>
        <div className="cardS">Left Card 2</div>
      </div>
      <div className="right-cards">
        <div className="card">Right Card 1</div>
        <div className="card">Right Card 2</div>
        <div className="card">Right Card 3</div>
      </div>
    </div>
  );
};

export default App;
