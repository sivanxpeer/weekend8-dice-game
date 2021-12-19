//Goal 1# make game and players

//playr name
//score 
//current score
//dot that reprsante who is the player 


import React from 'react';
import './Player.css'

export default class Player extends React.Component {
    // constructor(props) {
    //     super(props);
        state = {
          name: this.props.name,
          turn: false,
          winner: false,
          score:0, 
         }
    // }
    render = () => {
        // const whoIsThePlayer = {turn};
        // after if 
        return (
        <div className="player">
            <div className="player-style player-name">{this.state.name}</div>
            <div className="player-style player-score">{this.props.score}</div>
            <div className="player-style player-current">Current: {this.props.currentScore}</div>
        </div>
        )
    }
}
