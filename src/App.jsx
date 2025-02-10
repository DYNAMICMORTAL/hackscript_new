import './App.css';
import { useState, useEffect } from 'react';
import backgroundImage from './assets/HACKSCRIPT.png';

function App() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-03-07T08:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: 'fit-content',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  };

  return (
    <div style={containerStyle}>
      <div className="navigation">
        <div className="leftContainer">
          <div className="leftHalf">
            <img src="/apsit_Logo.png" alt="APSIT Logo" />
            <img src="/hackscriptLogo/Black-Transparent.png" alt="Hackscript Logo" />
          </div>
          <div className="rightHalf">
            <h3 className="byText">A.P. Shah Institute of Technology, Thane</h3>
          </div>
        </div>
        <div className="rightContainer">
          {/* Add any additional elements for the right container */}
        </div>
      </div>
      <div className="verticalDiv">
        <div className="heroSection">
          <div className="leftHero">
            <div className="heroText">
              <h3 className="heroSubtitle">Code at <br />FULL <span>THROTTLE!</span></h3>
            </div>
            <div className="countdown">
              <div className="time">
                {timeLeft.days} <span>Days</span>
              </div>
              <div className="time">
                {timeLeft.hours} <span>Hours</span>
              </div>
              <div className="time">
                {timeLeft.minutes} <span>Minutes</span>
              </div>
              <div className="time">
                {timeLeft.seconds} <span>Seconds</span>
              </div>
            </div>
            <div className="registerButtonContainer">
              <a href="https://example.com" className="registerButton">Register Now</a>
            </div>
          </div>
          <div className="rightHero">
            <img src="/heroGIF2.gif" alt="" />
          </div>
        </div>
      </div>
      <div className="secondSection">
        <h2 className="community">Our Team</h2>
        lorem800
      </div>
    </div>
  );
}

export default App;
