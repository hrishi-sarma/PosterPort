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
          
          <div className="cardS">
            <div className="education">
              <h1>Changelogs:</h1>
              
              <div className='xennalayout'>
                <ul>
                
                  <p className='command'>
                    Pre-Alpha v0.1
                  </p>
                  <p className='desc'>
                
                      <li>First public release version</li>
                      <li>Both Audio and Textual outputs</li>
                      <li>Provide factual information on most topics</li>
              
                  </p>
                </ul>
                
              </div>
            </div>
          </div>
        </div>

        <div className="right-cards">
          <div className="card">

            <h1>About:</h1>
            <div className='xennaLayout'>
              <p className='desc'>
                Hi I'm Xenna, an AI voice assistant
              </p>
              <p className='command'>
                Installation:
              </p>
              <p className='desc'>
                Download the zip folder and extract the exe file. Then run Xenna.exe
              </p>

              <p className='command'>
                Usage Instructions: 
              </p>
              <p className='desc'>
                <ul>
                  <li>Press the mic icon and give any kind of voice input to start.</li>
                  <li>This application is made for dark mode users, so kindly turn on dark mode for this app.</li>
                  <li>The app might not recognise your command if there's too much noise or if the audio is unclear.</li>
                  <li>Close the app only when the voice output stops, otherwise it'll keep running in the background even after app termination.</li>
                  <li>In case the previous scenario happened already, you can close it via task manager.</li>
                </ul>
              </p>

              <p className='command'>
                Platforms:
              </p>
              <p className='desc'>
                Windows 
              </p>
              
              <p className='command'>
                Features:
              </p>
              <p className='desc'>
                <ul>
                  <li>Converse with the user</li>
                  <li>Provide factual knowledge on most topics</li>
                  <li>Generate texts based on prompt</li>
                </ul>
              </p>
              
              <p className='command'>
                Dev Notes:
              </p>
              <p className='desc'>
                <p>Please note that Xenna is in pre-Alpha stage right now, which means it is far from perfect. Current drawbacks: </p> 

                <ul>
                  <li>Speech Recognition system is weak so audio input needs to be very clear.</li>
                  <li>Can't access any real-time information as of now.</li>
                  <li>Only available on Windows.</li>
                </ul>
              </p>


            </div>
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
