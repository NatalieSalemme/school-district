import React from 'react';
import QuickLinks from './QuickLinks';
import Calendar from './Calendar';
import Twitter from './Twitter';
import News from './News';
import StaffLinks from './StaffLinks';

const ContentContainer = props => {
  return (
    <div className="content-container">
      <p>contentcontainer</p>
      <QuickLinks />
      <Calendar />
      <Twitter />
      <News />
      <StaffLinks />
    </div>
  );
}
export default ContentContainer;
