import React, { Component } from 'react';
import './App.css';
import TopHeader from './TopHeader';
import MenuHeader from './MenuHeader';
import Slideshow from './Slideshow';
import MiniNav from './MiniNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopHeader />
        <MenuHeader />
        <Slideshow />
        <MiniNav />
      </div>
    );
  }
}

export default App;
