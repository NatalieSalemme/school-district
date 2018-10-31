import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool} from '@fortawesome/free-solid-svg-icons';

const Footer = props => {
  const schoolIcon = <FontAwesomeIcon icon={faSchool} size="7x" className="school-icon" />;
  return (
    <div className="footer-container">
      <div className="top-footer">
      <div className="footer-first-col">
        <span className="menu-header-school">{schoolIcon}</span>
        <div>
        <div className="npusd-container">
          <span className="npusd-text">NPU</span>
          <br />
          <span className="npusd-text">SD</span>
        </div>
        </div>
      <h3 className="np-header">North Park Unified School District</h3>
      </div>

      <div className="footer-second-col">
        <h3>North Park Unified School District</h3>
        <p>5720 North Park Way, San Diego, CA 92104</p>
        <p>(619) 295-3941 Phone</p>
        <p>(619) 295-3942 FAX</p>

        <h3>Office Hours</h3>
        <p>Mon - Fri: 8am - 5pm</p>

        <div className="social-media-icons">
          <span className="fa fa-facebook social-icon"></span>
          <span className="fa fa-twitter social-icon"></span>
          <span className="fa fa-instagram social-icon"></span>
          <span className="fa fa-linkedin social-icon" ></span>
        </div>
      </div>


      </div>
      <div className="bottom-footer">
        <h4>&copy; Coded By Natalie Salemme</h4>
      </div>
    </div>
  );
}
export default Footer;
