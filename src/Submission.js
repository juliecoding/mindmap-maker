import React, { Component } from 'react';
import './Submission.css';

class Submission extends Component {
  render() {
    return(
      <div>
        <h1>Submit your JSON file here</h1>
        <h2>Make sure your objects follow this format:</h2>
        <p>
          "marker": "18asd3ma2312nb1hg14", /*from whatever previous system*/ <br />
          "title": "Alfred Hitchcock", <br />
          "body": "British/American Film director", <br />
          "parent": "root", <br />
          "image": "www.address.com"
        </p>
      </div>
    )
  }
}

export default Submission;
