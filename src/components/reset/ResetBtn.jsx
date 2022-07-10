import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as Actions from "./actions";
import { selectors as settingsSelectors } from "components/stripe";
import { selectors as gameSelectors } from "components/game";
import { selectors as squareSelectors } from "components/square";
import { defaultTextColour } from "utils/const";

const ResetBtn = ({ mode, onReset, isGameOver, answerColour }) => (
  <button
    style={{ color: isGameOver ? answerColour : defaultTextColour }}
    onClick={() => onReset(mode)}
  >
    {isGameOver ? "Igraj ispocetka?" : "Izaberi boju"}
  </button>
);

ResetBtn.propTypes = {
  mode: PropTypes.object.isRequired,
  onReset: PropTypes.func.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  answerColour: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  mode: settingsSelectors.getMode(state),
  isGameOver: gameSelectors.getGameOver(state),
  answerColour: squareSelectors.getColourString(gameSelectors.getAnswer(state))
});

const mapDispatchToProps = dispatch => ({
  onReset: mode => {
    dispatch(Actions.resetGame(mode));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetBtn);
