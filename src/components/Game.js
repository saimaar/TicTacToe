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
    const history = this.state.history
    const current = history[this.state.stepNumber]
    return (
      <div className = "game">
        <div className ="game-board">
          <Board onClick={(i)=>this.onClick(i)}
            squares={current.squares}
            />
        </div>
      </div>
    );
  }

}

export default ;
