/* import React from "react";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );
  return <div>Hi there!</div>;
}; */

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      errorMessage: "",
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    return <div>Latitude: {this.state.latitude}</div>;
  }
}

export default App;
