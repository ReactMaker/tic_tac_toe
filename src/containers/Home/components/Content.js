import React, { Component } from 'react';

export default class Content extends Component {
  state = {
    squares: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  }

  render() {
    const { squares } = this.state;

    return (
      <div className="content">
        <p className="player">目前玩家：O</p>
        <div className="squares">
          {
            squares.map(square => (
              <div className="box">{square}</div>
            ))
          }
        </div>
      </div>
    );
  }
}
