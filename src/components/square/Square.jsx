import React from "react";
import { connect } from "react-redux";

import * as Actions from "./actions";
import { selectors as gameSelectors } from "components/game";
import { selectors as squareSelectors } from "components/square";

const SquareStyle = {
  width: "25%",
  paddingBottom: "30%",
  margin: "1.6%",
  borderRadius: "25px",
  transition: "background-color 500ms",
  "--webkit-transition": "background-color 500ms",
  "--moz-transition": "background-color 500ms",
  display: "inline-block"
};

const Square = ({ gameOver, answer, colour, onGuess }) => {
  if (gameOver) {
    return (
      <div
        style={{
          ...SquareStyle,
          backgroundColor: squareSelectors.getColourString(answer)
        }}
      />
    );
  } else if (colour.isGuessed) {
    return <div style={{ ...SquareStyle, backgroundColor: "transparent" }} />;
  } else {
    return (
      <div
        style={{
          ...SquareStyle,
          backgroundColor: squareSelectors.getColourString(colour)
        }}
        onClick={() => {
          onGuess(squareSelectors.getColourString(colour), answer === colour);
        }}
      />
    );
  }
};

const mapStateToProps = state => ({
  answer: gameSelectors.getAnswer(state),
  gameOver: gameSelectors.getGameOver(state)
});

const mapDispatchToProps = {
  onGuess: (colour, isCorrect) => Actions.guessSquare(colour, isCorrect)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Square);
