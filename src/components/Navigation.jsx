// import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
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
  );
}

export default Navigation;
