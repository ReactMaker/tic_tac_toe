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
    isGameOver: false,
    winner: '',
  }

  handleClick = (index) => {
    const squares = this.state.squares;
    squares[index] = this.state.player;

    const isGameOver = this.judgeWinner(squares);

    this.setState({
      squares,
      player: this.state.player === players.O ? players.X : players.O,
      isGameOver,
      winner: this.state.player,
    });
  }

  handleReset = () => {
    this.setState({
      squares: ['', '', '', '', '', '', '', '', ''],
      player: players.O,
      isGameOver: false,
    });
  }

  judgeWinner = (squares) => {
    const wins = [
      // 橫線
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      // 直線
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      // 斜線
      [0, 4, 8],
      [2, 4, 6],
    ];

    return wins.reduce((result, win) => {
      const first = squares[win[0]];
      const second = squares[win[1]];
      const third = squares[win[2]];

      if (!first || !second || !third) return result;

      if (first === second && second === third) {
        return true;
      }

      return result;
    }, false);
  }

  render() {
    const { squares, player, isGameOver, winner } = this.state;

    return (
      <div className="content">
        {
          isGameOver
          ? <div className="flex_box">
            <p className="winner">玩家： {winner} 勝利</p>
          </div>
          : <p className="flex_box">目前玩家： {player}</p>
        }
        <div className="squares">
          {
            squares.map((square, index) => (
              <Button
                role="button"
                className="box"
                disabled={square !== '' || isGameOver}
                onClick={() => this.handleClick(index)}
              >
                {square}
              </Button>
            ))
          }
        </div>
        <div className="flex_box">
          <Button
            color="success"
            onClick={this.handleReset}
          >
            重新開始遊戲
          </Button>
        </div>
      </div>
    );
  }
}
