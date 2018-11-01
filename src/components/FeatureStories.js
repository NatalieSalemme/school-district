import React from 'react';

const FeatureStories = props => {
  return (
    <div className="feature-stories-container">
      <div className="main-sub-header">
        <h3 className="main-sub-header-text ">FEATURE STORIES</h3>
      </div>
        <div className="story-card">
        <img
          className="feature-story"
          src={require('../images/soccer.jpg')}
          alt="Kicking a soccer ball"
        />
        <div className="story-card-text">
          <h2>Soccer Season kicks off with a win!</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum."</p>

        <button>Learn More</button>
          </div>
          </div>

          <div className="story-card">
          <img
            className="feature-story"
            src={require('../images/hiring.jpg')}
            alt="We are hiring"
          />
          <div className="story-card-text">
            <h2>Join the North Park Education Team</h2>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."</p>
          <button>Human Resources</button>
            </div>
        </div>

        <div className="story-card">
        <img
          className="feature-story"
          src={require('../images/cafeteria-food.jpg')}
          alt="Cafeteria lunch tray with food"
        />
        <div className="story-card-text">
          <h2>Free & Reduced Lunch Applications</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum."</p>
        <button>CNEC Website</button>
          </div>
      </div>


    </div>
  );
}
export default FeatureStories;
