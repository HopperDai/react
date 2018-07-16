import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Index from './component/Index';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Index></Index>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
