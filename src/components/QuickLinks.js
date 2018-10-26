import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const QuickLinks = props => {
  const rightIcon = <FontAwesomeIcon icon={faChevronRight} size="s" className="right-icon"/>
  return (
    <div className="quick-links-container">
      <div className="main-sub-header">
      <h3 className="main-sub-header-text">QUICK LINKS</h3>
    </div>
    <ul className="quick-links-ul">
      <li className="quick-links-link">{rightIcon}Air Quality Alert</li>
      <li className="quick-links-link">{rightIcon}Board of Trustees</li>
      <li className="quick-links-link">{rightIcon}Board Policies</li>
      <li className="quick-links-link">{rightIcon}Child Nutrition Website</li>
      <li className="quick-links-link">{rightIcon}Communications Help Desk</li>
      <li className="quick-links-link">{rightIcon}Curriculum Resources for Parents</li>
      <li className="quick-links-link">{rightIcon}Departments</li>
      <li className="quick-links-link">{rightIcon}Emergency Information</li>
      <li className="quick-links-link">{rightIcon}Find My School</li>
      <li className="quick-links-link">{rightIcon}Instructional Support Center -ISC</li>
      <li className="quick-links-link">{rightIcon}Local Control and Accountability Plan</li>
      <li className="quick-links-link">{rightIcon}Online Bidding for Warehouse Supplies</li>
      <li className="quick-links-link">{rightIcon}School Bell Schedules</li>
      <li className="quick-links-link">{rightIcon}School Messenger Notifications</li>
      <li className="quick-links-link">{rightIcon}School Year Calendars</li>
      <li className="quick-links-link">{rightIcon}Student of the Month</li>
      <li className="quick-links-link">{rightIcon}Superintendent's Message</li>

    </ul>
  </div>
  );
}
export default QuickLinks;
