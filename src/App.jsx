import React, { Component } from "react";
import Movie from "./components/Movie";
import NavBar from "./common/NavBar";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Movie />
      </>
    );
  }
}

export default App;
