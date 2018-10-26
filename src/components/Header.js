import React from 'react';
import TopHeader from './TopHeader';
import MenuHeader from './MenuHeader';

const Header = props => {
  return (
    <div className="header-container">
      <TopHeader />
      <MenuHeader />
    </div>
  );
}
export default Header;
