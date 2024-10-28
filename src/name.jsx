import React from 'react';
import './name.css'; // Import the CSS file
import profile from './assets/Hrishi.jpg';
import Experience from './experience';
import Spline from '@splinetool/react-spline';

const App = () => {
  return (
    <div className="bg">
      <div className="main-container">
        <div className="main-display">
          <Experience />
        </div>
        <div className="left-cards">
          <div className="cardP">
            <img src={profile} alt="image" />
            <div className="text-content">
              <h1>Hrishikesh</h1>
            </div>
          </div>
          <div className="cardS">
            <div className="AboutMe">
              <p>Hi, I'm a FrontEnd dev!</p>
            </div>
            <div className="education">
              <h1>Education:</h1>
              <ul>
                <li>10+2 from SPS GHY</li>
                <li>BTECH CSE 2023-27 from SRMIST</li>
              </ul>

              <h1>Skills:</h1>
              <ul>
                <li>React JS, three js</li>
                <li>Python</li>
                <li>C, C++</li>
                <li>Java</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="right-cards">
          <div className="card">

            <h1>Other:</h1>
              <ul>
                <li>Blender</li>
                <li>UE, Unity, Godot</li>
                <li>PS, Premiere Pro</li>
              </ul>
          </div>
          <div className="card">
            3 of my latest projects are being showcased, follow my socials for more!
            
          </div>
          <div className="cardLink">
            {/* Right Card 3 with Social Media Icons */}
            <div className="social-icons">
              <a href="https://www.instagram.com/uncharged_particle/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" />
              </a>
              <a href="https://github.com/hrishi-sarma" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/hrishikesh-sarma-043915283/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="mailto:sarmahrishi05@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/mail.png" alt="Mail" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
