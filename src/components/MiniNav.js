import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSchool, faChalkboardTeacher, faPhone} from '@fortawesome/free-solid-svg-icons';

const MiniNav = props => {
  const graduationIcon = <FontAwesomeIcon icon={faGraduationCap} size="7x" className="graduation-icon"/>
  const schoolIcon = <FontAwesomeIcon icon={faSchool} size="7x" className="school-icon" />
  const teacherIcon = <FontAwesomeIcon icon={faChalkboardTeacher} size="7x" className="teacher-icon" />
  const phoneIcon = <FontAwesomeIcon icon={faPhone} size="7x" className="phone-icon" />
  return (
    <div className="mini-nav-container">
      <div className="mini-nav-icons-wrap">
        <span className="mini-nav-icon">{graduationIcon}</span>
        <span className="mini-nav-text">Enrollment</span>
      </div>
      <div className="mini-nav-icons-wrap">
        <span className="mini-nav-icon">{schoolIcon}</span>
        <span className="mini-nav-text">Our Schools</span>
      </div>
      <div className="mini-nav-icons-wrap">
        <span className="mini-nav-icon">{teacherIcon}</span>
        <span className="mini-nav-text">Employment</span>
      </div>
      <div className="mini-nav-icons-wrap">
        <span className="mini-nav-icon">{phoneIcon}</span>
        <span className="mini-nav-text">Contact</span>
    </div>
    </div>
  );
}
export default MiniNav;
