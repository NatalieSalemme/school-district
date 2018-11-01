import React from 'react';
import QuickLinks from './QuickLinks';
import DateCalendar from './DateCalendar';
import Twitter from './Twitter';
import StaffLinks from './StaffLinks';
import AboutUs from './AboutUs';
import FeatureStories from './FeatureStories';
import Slideshow from './Slideshow';

const ContentContainer = props => {
  return (
    <div className="content-container">
      <Slideshow />
      <QuickLinks />
      <DateCalendar />
      <Twitter />
      <StaffLinks />
      <FeatureStories />
      <AboutUs />
    </div>
  );
}
export default ContentContainer;
