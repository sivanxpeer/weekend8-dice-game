//Goal 1# make game and players

//playr name
//score 
//current score
//dot that reprsante who is the player 


import React from 'react';

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: this.props.name,
          turn: false  
         }
    }
    render = () => {
        // const whoIsThePlayer = {turn};
        //after if 
        return (
        <div className="player">
            <div className="player-Name">{this.state.name}</div>
            <div className="player-Score">{this.props.score}</div>
            <div className="player-Current">{this.props.currentScore}</div>
        </div>
        )
    }
}
