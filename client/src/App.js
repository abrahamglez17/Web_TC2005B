import './App.css';
import React, { useState } from "react";
import PostGame from './PostGame';

class App extends React.Component {

  render() {

    return (
      <div className="App">

        <h2> React POST con hooks </h2>
        <div>
          <PostGame />
        </div>
      </div>
    );
  }

}

export default App;
