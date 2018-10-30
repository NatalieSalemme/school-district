import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

const MenuHeader = () => {
  const schoolIcon = <FontAwesomeIcon icon={faSchool} size="7x" className="school-icon" />;
  // const facebookIcon = <FontAwesomeIcon icon={fabFacebookF} size="2x" className="facebook-icon" />
  // const twitterIcon = <FontAwesomeIcon icon={faTwitter} size="2x" className="twitter-icon" />
  // const instagramIcon = <FontAwesomeIcon icon={faInstagram} size="2x" className="instagram-icon" />
  // const linkedInIcon = <FontAwesome icon={faLinkedIn} size="2x" className="linked-in-icon" />

  return (
    <div className="menu-header">
      <div className="menu-header-first-col">
        <span className="menu-header-school">{schoolIcon}</span>
        <div>
        <span className="npusd-text">NPU</span>
        <br />
        <span className="npusd-text">SD</span>
        </div>


      <h3 className="np-header">North Park Unified School District</h3>
      </div>


    <div className="menu-header-second-col">
      <p>Social Media icons</p>
      <div className="social-media-icons">
        <span className="fa fa-facebook"></span>
        <i className="fab fa-facebook-f" style={{color: 'white'}}></i>
        {/* <span>{facebookIcon}</span> */}
        {/* <span>{twitterIcon}</span>
        <span>{instagramIcon}</span>
        <span>{linkedInIcon}</span> */}
      </div>
        <ul className="nav-bar-links">
          <li>HOME</li>
          <li>INFO</li>
          <li>DISTRICT</li>
          <li id="student-services">STUDENT SERVICES</li>
          <li>SCHOOL</li>
          <li>RESOURCES</li>
      </ul>
    </div>
    </div>
  );
}
export default MenuHeader;
