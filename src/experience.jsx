import React from 'react';
import Spline from '@splinetool/react-spline';
import './experience.css'; // Import the CSS file

const SplineModel = () => {
  const cardData = [
    { id: 1, imgSrc: '/edlg.png', link: 'https://vercel.com/api/toolbar/link/educrow.vercel.app?via=project-dashboard-alias-list&p=1&page=/' },
    { id: 2, imgSrc: '/browsit.png', link: 'https://vercel.com/api/toolbar/link/browsit.vercel.app?via=project-dashboard-alias-list&p=1&page=/' },
    { id: 3, imgSrc: '/cjva.png', link: 'https://github.com/hrishi-sarma/AI-voice-assist' }
  ];

  return (
    <div className='exp' style={{ width: '100%', height: '100vh', position: 'relative' }}>
      {/* Spline Model */}
      <div className="title">
        Projects
      </div>
      <div className="container">

        <Spline scene="https://prod.spline.design/dv6NJUeC5C66TWfD/scene.splinecode" />
        <div className="projtitle"></div>
        <div className="projs">
          {cardData.map((card) => (
            <a key={card.id} href={card.link} className="cardproj">
              <img src={card.imgSrc} alt={`Card ${card.id}`} className="cardproj-image" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

window.onload = function() {
  var shadowRoot = document.querySelector('spline-viewer').shadowRoot;
  shadowRoot.querySelector('#logo').remove();
};

export default SplineModel;
