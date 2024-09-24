import React from 'react';
import './name.css'; // Import the CSS file
import profile from './assets/buddy.jpeg';
import bgVideo from './assets/bg.mp4'; // Import the video file


const App = () => {
  return (
    <div className="bg">

      <div className="main-container">
        <div className="main-display">
          
          Main Display
        </div>
        <div className="left-cards">
          <div className="cardP">
            <img src={profile} alt="image" />
            <div className="text-content">
              <h1>Hrishi</h1>
       
            </div>
          </div>
          <div className="cardS">
            <div className="AboutMe">
              <p>
                Hi, I'm a FrontEnd dev!
                </p>
            </div>
            <div className="education">
              <h1>
                Education: 
              </h1>
              <ul>
                <li>
                 10+2 from SPS GHY
                </li>
                <li>
                  BTECH CSE 2023-27 from SRMIST
                </li>
              
              
              </ul>

            </div>
          </div>
        </div>
        <div className="right-cards">
          <div className="card">Right Card 1</div>
          <div className="card">Right Card 2</div>
          <div className="card">Right Card 3</div>
        </div>
      </div>
    </div>
  );
};

export default App;
