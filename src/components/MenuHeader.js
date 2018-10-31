import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool} from '@fortawesome/free-solid-svg-icons';

const MenuHeader = () => {
  const schoolIcon = <FontAwesomeIcon icon={faSchool} size="7x" className="school-icon" />;
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
      <div className="social-media-icons">
        <span className="fa fa-facebook social-icon"></span>
        <span className="fa fa-twitter social-icon"></span>
        <span className="fa fa-instagram social-icon"></span>
        <span className="fa fa-linkedin social-icon" ></span>
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
