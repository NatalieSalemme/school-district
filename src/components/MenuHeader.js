import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faFacebook, faTwitter, faInstagram, faLinkedIn } from '@fortawesome/free-solid-svg-icons'

const MenuHeader = () => {
  const schoolIcon = <FontAwesomeIcon icon={faSchool} size="7x" className="school-icon" />
  const facebookIcon = <FontAwesomeIcon icon={faFacebook} size="2x" className="facebook-icon" />
  const twitterIcon = <FontAwesomeIcon icon={faTwitter} size="2x" className="twitter-icon" />
  const instagramIcon = <FontAwesomeIcon icon={faInstagram} size="2x" className="instagram-icon" />
  const linkedInIcon = <FontAwesome icon={faLinkedIn} size="2x" className="linked-in-icon" />

  return (
    <div className="menu-header">
      <div className="menu-header-first-col">
        <div>
        <span className="menu-header-school">{schoolIcon}</span>
        <h3 className="np-header">North Park Unified School District</h3>
      </div>
      <div className="menu-header-NPUSD">
        <span className="npusd-text">NPU</span>
        <br />
        <span className="npusd-text">SD</span>
      </div>
      <br />
      </div>


    <div className="menu-header-second-col">
      <p>nav bar</p>
      <div className="social-media-icons">

      </div>
    </div>
    </div>
  );
}
export default MenuHeader;
