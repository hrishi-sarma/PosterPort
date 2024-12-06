import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import './experience.css'; // Import the CSS file

const SplineModel = () => {
  useEffect(() => {
    // Fix: remove logo from shadow root after the component mounts
    const shadowRoot = document.querySelector('spline-viewer')?.shadowRoot;
    if (shadowRoot) {
      const logoElement = shadowRoot.querySelector('#logo');
      if (logoElement) logoElement.remove();
    }
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Xenna.zip'; // Path to the file in the public folder
    link.download = 'Xenna.zip'; // Suggested filename
    document.body.appendChild(link); // Append the link to the document
    link.click(); // Trigger the click event
    document.body.removeChild(link); // Clean up by removing the link
  };

  return (
    <div className="exp" style={{ width: '100%', height: '100vh', position: 'relative' }}>
      {/* Spline Model */}
      <div className="title">Xenna</div>
      <div className="container">
        <Spline scene="https://prod.spline.design/dv6NJUeC5C66TWfD/scene.splinecode" />
        <div className="projtitle"></div>
        <div className="projs">
          {/* Download Button */}
          <button className="custom-button" onClick={handleDownload}>
            Download v0.1
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplineModel;
