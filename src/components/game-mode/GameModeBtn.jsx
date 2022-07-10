import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import * as Actions from "./actions";
import { defaultTextColour } from "utils/const";
import { selectors as settingsSelectors } from "components/stripe";
import { selectors as gameSelectors } from "components/game";
import { selectors as squareSelectors } from "components/square";


const GameModeBtn = ({
  gameMode,
  onModeChange,
  currentMode,
  isGameOver,
  answerColour
}) => {
  const ButtonStyle =
    currentMode === gameMode
      ? {
          backgroundColor: isGameOver ? answerColour : defaultTextColour,
          color: "white"
        }
      : { color: isGameOver ? answerColour : "" };

  return (
    <button onClick={() => onModeChange(gameMode)} style={ButtonStyle}>
      {_.capitalize(gameMode.string)}
    </button>
  );
};

GameModeBtn.propTypes = {
  onModeChange: PropTypes.func.isRequired,
  gameMode: PropTypes.object.isRequired,
  currentMode: PropTypes.object.isRequired,
  isGameOver: PropTypes.bool.isRequired,
  answerColour: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  currentMode: settingsSelectors.getMode(state),
  answerColour: squareSelectors.getColourString(gameSelectors.getAnswer(state)),
  isGameOver: gameSelectors.getGameOver(state)
});

const mapDispatchToProps = dispatch => ({
  onModeChange: mode => {
    dispatch(Actions.changeGameMode(mode));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameModeBtn);
