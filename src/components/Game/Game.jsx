//Goal 1# make game and players

//playr name
//score 
//current score
//dot that reprsante who is the player  


import React from 'react';
import GameBoard from '../GameBoard/GameBoard';
import Player from '../Player/Player';
import './Game.css';

export default class Game extends React.Component {
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
            <div className="GameContainer">
                <Player name="Player 1" score="SCORE-PLAYER1" currentScore="Current1"/>
                <GameBoard/>
                <Player name="Player 2" score ="SCORE-PLAYER2" currentScore="Current2"/>

            </div>
        )
    }
}

