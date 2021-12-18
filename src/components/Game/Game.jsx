//Goal 1# make game and players

//playr name
//score 
//current score
//dot that reprsante who is the player  


import React from 'react';
import Button from '../Button/Button';
// import GameBoard from '../GameBoard/GameBoard';
import Player from '../Player/Player';
import './Game.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            turn: false,
            maxPoints: 100,
            dice:[null, null],
            players: ["player1","player2"],
        }
    }

    render = () => {
        // const whoIsThePlayer = {turn};
        //after if 
        return (
            <div className="Game">
                <Player name="Player 1" score="SCORE-PLAYER1" currentScore="Current1"/>
                <Button/>
                <Player name="Player 2" score ="SCORE-PLAYER2" currentScore="Current2"/>
            </div>
        )
    }
}

