import React from 'react';
import QuickLinks from './QuickLinks';
import DateCalendar from './DateCalendar';
import Twitter from './Twitter';
import News from './News';
import StaffLinks from './StaffLinks';

const ContentContainer = props => {
  return (
    <div className="content-container">
      <QuickLinks />
      <DateCalendar />
      <Twitter />
      <News />
      <StaffLinks />
    </div>
  );
}
export default ContentContainer;
