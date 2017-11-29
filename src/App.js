import React, { Component } from 'react';
import './App.css';

import Welcome from './Welcome.js'
import Submission from './Submission.js'
import Uploader from './Uploader.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <Submission />
        <Uploader />
      </div>
    );
  }
}

export default App;
