import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const StaffLinks = props => {
  const rightIcon = <FontAwesomeIcon icon={faChevronRight} size="sm" className="right-icon"/>
  return (
    <div className="staff-links-container">
      <div className="main-sub-header">
        <h3 className="main-sub-header-text">STAFF LINKS</h3>
      </div>
      <ul className="staff-links-ul">
        <li className="staff-links-link">{rightIcon}Aeries Staff Portal</li>
        <li className="staff-links-link">{rightIcon}Clever Digital Programs</li>
        <li className="staff-links-link">{rightIcon}Educational Technology</li>
        <li className="staff-links-link">{rightIcon}Employee Health Benefits</li>
        <li className="staff-links-link">{rightIcon}Negotiations Update</li>
        <li className="staff-links-link">{rightIcon}Outlook Web Access for Staff</li>
        <li className="staff-links-link">{rightIcon}Substitute Calling System</li>
        <li className="staff-links-link">{rightIcon}Testing Calendar</li>
      </ul>
    </div>
  );
}
export default StaffLinks;
