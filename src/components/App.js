import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false
    };
  }
  handleClick() {
    this.setState({
      hide: !this.state.hide
    });
  }

  render() {
    return (
      <div id="main">
        <button id="click" onClick={() => this.handleClick()}>
          button
        </button>
        {this.state.hide ? (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
