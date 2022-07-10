import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import GameModeBtn from "components/game-mode";
import ResetBtn from "components/reset";
import { selectors as gameSelectors } from "components/game";
import { GameModes } from "utils/const";

const StripeStyle = {
  backgroundColor: "white",
  textAlign: "center",
  height: "30px"
};

const Stripe = ({ isGameOver, hasGuessed }) => (
  <div style={StripeStyle}>
    <ResetBtn />
    <span style={{ display: "inline-block", width: "30%" }}>
      {isGameOver
        ? "Bravo, zapocni ispocetka!"
        : hasGuessed
        ? "To nije ta boja!"
        : ""}
    </span>
    {Object.values(GameModes).map(mode => (
      <GameModeBtn key={mode.string} gameMode={mode} />
    ))}
  </div>
);

Stripe.propTypes = {
  isGameOver: PropTypes.bool,
  hasGuessed: PropTypes.bool
};
Stripe.defaultProps = { hasGuessed: false, isGameOver: false };

const mapStateToProps = state => ({
  isGameOver: gameSelectors.getGameOver(state),
  hasGuessed: gameSelectors.getUserHasGuessed(state)
});

export default connect(mapStateToProps)(Stripe);
