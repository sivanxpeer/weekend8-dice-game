//Goal 1# make game and players

//playr name
//score 
//current score
//dot that reprsante who is the player  


import React from 'react';
// import Button from '../Button/Button';
import Dice from '../Dice/Dice';
import Player from '../Player/Player';
import './Game.css';


const DiceImage = ["image-1", "image-2", "image-3", "image-4", "image-5", "image-6"];
export default class Game extends React.Component {
    // constructor(props) {
    //     super(props);
    state = {
        turn: false,
        maxPoints: 0,

        // dice:{dice1:,dice2:}
        dice1Number: 0,
        dice2Number: 0,
        players: ["player1", "player2"],
    }
    // }


    rollDice(props) {
        //get dices value sum it up and send it to player's current score
    }
    pickDice = (array) => {
        let number = Math.floor(Math.random() * 6);
        let image = array[number];
        return { diceNumber: number, imageURL: image };
    }

    getImageAndNumber = () => {
        this.setState({ dice1Number: this.pickDice(DiceImage).diceNumber });
        this.setState({ dice2Number: this.pickDice(DiceImage).diceNumber });
    }

    render = () => {
        // const whoIsThePlayer = {turn};
        //after if 
        return (
            <>
                <div className="Game">
                    <Player name="Player 1" score="SCORE-PLAYER1" currentScore="Current1" />
                    <div className="Buttons-container">
                        <button onClick={() => window.location.reload()}>New Game</button>
                        <button onClick={this.getImageAndNumber}>Roll Dice</button>
                        <button onClick={console.log("click")}>Hold</button>
                        <Dice number={this.state.dice1Number} />
                        <Dice number={this.state.dice2Number} />
                    </div>
                    <Player name="Player 2" score="SCORE-PLAYER2" currentScore="Current2" />
                </div>
            </>
        )
    }
}

