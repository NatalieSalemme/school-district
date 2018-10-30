import React from 'react';
import QuickLinks from './QuickLinks';
import DateCalendar from './DateCalendar';
import Twitter from './Twitter';
import News from './News';
import StaffLinks from './StaffLinks';
import AboutUs from './AboutUs';
import FeatureStories from './FeatureStories';

const ContentContainer = props => {
  return (
    <div className="content-container">
      <QuickLinks />
      <DateCalendar />
      <Twitter />
      <News />
      <StaffLinks />
      <FeatureStories />
      <AboutUs />
    </div>
  );
}
export default ContentContainer;
