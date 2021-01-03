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
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    return (
      <div>
        {this.state.errorMessage !== "" ? (
          <p>Error: {this.state.errorMessage}</p>
        ) : this.state.latitude ? (
          <p>Latitude: {this.state.latitude}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default App;
