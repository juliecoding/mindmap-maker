import React, { Component } from 'react';
import './Uploader.css'

class Uploader extends Component {
  render() {
    return (
      <div>
        <h2>Show Me What You Got...</h2>
        <input type="file" />
      </div>
    )
  }
}

export default Uploader;
