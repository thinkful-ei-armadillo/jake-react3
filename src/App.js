import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import Bomb from "./Bomb";
import RouletteGun from "./RouletteGun"
import Accordion from "./Accordion"

class App extends Component {
  render() {
    return (
      <div className="Container">
        <div className="HelloWorld">
          <HelloWorld />
        </div>
        <div className="Bomb">
          <Bomb />
      </div>
      <div className="RouletteGun">
      <RouletteGun />
      </div>
      <div className="Accordion">
      <Accordion />
      </div>
      </div>
    );
  }
}

export default App;
