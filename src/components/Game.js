import React, { Component } from 'react';
import Board from './Board'

class Game extends Component {

  state = {
    xIsNext: true;
    stepNumber: 0;
    histroy: [
      {squares: Array(9).fill(null)}
    ]

  }

  render() {
    return (
      <div className = "game">
        <div className ="game-board">
          <Board/>
        </div>
      </div>
    );
  }

}

export default ;
