import React from "react";

import GameHeader from "components/game-header";
import Game from "components/game";
import Stripe from "components/stripe";

import "./App.css";

const App = () => (
  <div className="App">
    <GameHeader />
    <Stripe />
    <Game />
  </div>
);

export default App;
