import React, { useState, useEffect } from "react";
import "./LoadingScreen.css"; // Optional: styling for loading screen

const LoadingScreen = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const checkScreenSize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for screen size changes
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  if (isMobile) {
    return (
      <div style={styles.mobileWarning}>
        <h1>This website is not made for phones</h1>
        <p>Please view it on a PC.</p>
      </div>
    );
  }

  return (
    <div className="loader">
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
    </div>
  );
};

const styles = {
  mobileWarning: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#f8d7da",
    color: "#721c24",
    fontFamily: "Arial, sans-serif",
  },
};

export default LoadingScreen;
