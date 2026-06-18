import React, { useState, useEffect } from 'react';
import DecryptedText from './ui/DecryptedText';
import Squares from './ui/Squares';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isMinTimePassed, setMinTimePassed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Condition 1: Minimum 5 seconds
    const timer = setTimeout(() => {
      setMinTimePassed(true);
    }, 5000);

    // Condition 2: Window resources loaded
    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === 'complete') {
      setIsLoaded(true);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    // Trigger exit animation only when both conditions are met
    if (isMinTimePassed && isLoaded) {
      setIsExiting(true);
      // Wait for curtain animation to complete before notifying App.jsx
      const exitTimer = setTimeout(() => {
        onLoadingComplete();
      }, 800); // Matches the CSS transition duration
      return () => clearTimeout(exitTimer);
    }
  }, [isMinTimePassed, isLoaded, onLoadingComplete]);

  return (
    <div className={`loading-screen-container ${isExiting ? 'exit-curtain' : ''}`}>
      <div className="loading-background">
        <Squares 
          speed={0.5} 
          squareSize={40} 
          direction='diagonal' 
          borderColor='#333' 
          hoverFillColor='#222'
        />
      </div>
      <div className="loading-content">
        <DecryptedText
          text="NISHANT / PORTFOLIO"
          animateOn="view"
          revealVideo={false}
          className="loading-text"
          encryptedClassName="loading-text-encrypted"
          speed={100}
          maxIterations={20}
          sequential={true}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
