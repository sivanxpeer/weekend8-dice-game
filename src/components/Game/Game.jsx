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

// old function : chaneg the player +update the current score .

//input function .

//css again ! .

// winner function. 

//reload the game.

// change the image of dice 1.

const DiceImage = ["image-1", "image-2", "image-3", "image-4", "image-5", "image-6"];
export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nextTurnOf :"Player1",
            currentScoreP1 :0,
            currentScoreP2:0,
            dice1Number: 0,
            dice2Number : 0,
        

        // NextTurnOf: "Player2",
            maxPoints: 0,
            // currentScoreP1: 0,
            // currentScoreP2: 0,
            totalScoreP1: 0,
            totalScoreP2: 0,
            // dice1Number: 0,
            // dice2Number: 0,
            players: ["player1", "player2"],
        }
    }
    pickDice = (array) => {
        let image = array[Math.floor(Math.random() * 6)];
        let number = parseInt(image.match(/\d+/)[0]);
        return { diceNumber: number, imageURL: image };
    }

    rollDice = () => {
        console.log("HERE", this.nextTurnOf);
        this.setState({ dice1Number: this.pickDice(DiceImage).diceNumber });
        this.setState({ dice2Number: this.pickDice(DiceImage).diceNumber });
        // this.setState({ currentScoreP2: this.pickDice(DiceImage).diceNumber });
        // console.log("here2", this.dice1Number, this.dice2Number);
        if (this.state.nextTurnOf === "Player1") {
            this.setState({ currentScoreP1: this.state.dice1Number + this.state.dice2Number })
            console.log(this.state.nextTurnOf);
            
        }
        else {
            this.setState({ currentScoreP2: this.state.dice1Number + this.state.dice2Number });
            // this.setState({currentScoreP2:sum});

        }
        // this.setState({currentScoreP2:dice2});
    }

    render = () => {
        // const whoIsThePlayer = {turn};
        //after if 
        return (
            <>
                <div className="Game">
                    <Player name="Player 1" score="SCORE-PLAYER1" currentScore={this.state.dice1Number + this.state.dice2Number} />
                    <div className="Buttons-container">
                        <button onClick={() => window.location.reload()}>New Game</button>
                        <button onClick={this.rollDice}>Roll Dice</button>
                        <button onClick={console.log("click")}>Hold</button>
                        <Dice number={this.state.dice1Number} />
                        <Dice number={this.state.dice2Number} />
                    </div>
                    <Player name="Player 2" score="SCORE-PLAYER2" currentScore={this.state.currentScoreP2} />
                </div>
            </>
        )
    }
}

