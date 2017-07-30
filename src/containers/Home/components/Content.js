import React, { Component } from 'react';
import { Button } from 'reactstrap';

const players = {
  O: 'O',
  X: 'X',
};

export default class Content extends Component {
  state = {
    squares: ['', '', '', '', '', '', '', '', ''],
    player: players.O,
  }

  handleClick = (index) => {
    const squares = this.state.squares;
    squares[index] = this.state.player;

    this.setState({
      squares,
      player: this.state.player === players.O ? players.X : players.O,
    });
  }

  render() {
    const { squares, player } = this.state;

    return (
      <div className="content">
        <p className="player">目前玩家： {player}</p>
        <div className="squares">
          {
            squares.map((square, index) => (
              <Button
                role="button"
                className="box"
                disabled={square !== ''}
                onClick={() => this.handleClick(index)}
              >
                {square}
              </Button>
            ))
          }
        </div>
      </div>
    );
  }
}
