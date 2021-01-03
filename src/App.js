import React, { Component } from "react";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";

class App extends Component {
  state = {
    latitude: null,
    errorMessage: "",
  };

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
          <SeasonDisplay latitude={this.state.latitude} />
        ) : (
          <Spinner message="Please accept location request" />
        )}
      </div>
    );
  }
}

export default App;
