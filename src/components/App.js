import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const list = ["a", "b", "c", "d"];
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <ol key="relativeList">
          {list.map((item, index) => (
            <li key={`relativeListItem${index + 1}`}></li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
