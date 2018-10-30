import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import MiniNav from './components/MiniNav';
import ContentContainer from './components/ContentContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slideshow />
        <MiniNav />
        <ContentContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
