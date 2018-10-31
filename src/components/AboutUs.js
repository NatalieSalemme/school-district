import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
    <div className="main-sub-header">
      <h3 className="main-sub-header-text">ABOUT US</h3>
    </div>
      <img
      src={require('../images/sd-school.jpg')}
      alt="San Diego School District Building" />
      <h4 className="secondary-header">ABOUT US</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  );
}
export default AboutUs;
