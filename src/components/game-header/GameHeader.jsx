import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { selectors as gameSelectors } from "components/game";
import { selectors as squareSelectors } from "components/square";

const GameHeader = ({ answerColour, isGameOver }) => {
  const headerStyle = isGameOver ? { backgroundColor: answerColour } : {};
  return (
    <div>
      <h1 style={headerStyle}>
        ITEH
        <br />
        <span style={{ fontSize: "200%" }}>{answerColour.toUpperCase()}</span>
        <br />
        REACT DOMACI
      </h1>
    </div>
  );
};

GameHeader.propTypes = {
  answerColour: PropTypes.string.isRequired,
  isGameOver: PropTypes.bool
};

GameHeader.defaultProps = {
  isGameOver: false
};

const mapStateToProps = state => ({
  answerColour: squareSelectors.getColourString(gameSelectors.getAnswer(state)),
  isGameOver: gameSelectors.getGameOver(state)
});

export default connect(mapStateToProps)(GameHeader);
