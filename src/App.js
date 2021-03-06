import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MiniNav from './components/MiniNav';
import ContentContainer from './components/ContentContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MiniNav />
        <ContentContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
