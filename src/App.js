import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

axios.defaults.headers.common['auth'] = process.env.REACT_APP_KEY;

class App extends Component {
  
  render() {
    return (
      null
    );
  }
}

export default App;
