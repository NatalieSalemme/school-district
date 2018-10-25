import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Slideshow from './Slideshow';
import MiniNav from './MiniNav';
import ContentContainer from './ContentContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slideshow />
        <MiniNav />
        <ContentContainer />
      </div>
    );
  }
}

export default App;
