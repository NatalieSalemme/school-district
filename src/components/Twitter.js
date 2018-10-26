import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Twitter = props => {
  return (
    <div className="twitter-container">
      <div className="main-sub-header">
        <h3 className="main-sub-header-text">TWITTER</h3>
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="sdschools"
        options={{height: 400}}
      />
    </div>
  );
}
export default Twitter;
