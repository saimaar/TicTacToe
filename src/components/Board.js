import React, { Component } from 'react';
import Square from './Square'

class Board extends Component {

    renderSquare(idx){
      return <Square value = {this.props.squares[i]}
        onClick={()=>{this.props.onCLick(i)}}
      />

    }
  render() {
    return (
      <div>
        <div className="border-row">

        <div/>


      </div>
    );
  }

}

export default Board;
