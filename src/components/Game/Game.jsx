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
            nextTurnOf: "Player1",
            currentScoreP1: 0,
            currentScoreP2: 0,
            dice1Number: 0,
            dice2Number: 0,
            totalScoreP1: 0,
            totalScoreP2: 0,
            winningScore: 100,
            winner: false
        }
    }
    pickDice = (array) => {
        let image = array[Math.floor(Math.random() * 6)];
        let number = parseInt(image.match(/\d+/)[0]);
        return { diceNumber: number, imageURL: image };
    }

    rollDice = () => {
        // console.log("HERE", this.nextTurnOf);
        if (this.state.winner) return;
        this.setState({ dice1Number: this.pickDice(DiceImage).diceNumber, dice2Number: this.pickDice(DiceImage).diceNumber }, () => {
            let sum = this.state.dice1Number + this.state.dice2Number;
            if (this.state.nextTurnOf === "Player1") {
                if (this.state.dice1Number === 6 && this.state.dice2Number === 6) {
                    this.setState({ nextTurnOf: "Player2" });
                }
                this.setState({ currentScoreP1: this.state.currentScoreP1 + sum })
            }
            if (this.state.nextTurnOf === "Player2") {
                if (this.state.dice1Number === 6 && this.state.dice2Number === 6) {
                    this.setState({ nextTurnOf: "Player1" });
                }
                this.setState({ currentScoreP2: this.state.currentScoreP2 + sum });
            }
        });
    }

    hold = () => {
        if (this.state.winner) return;
        if (this.state.nextTurnOf === "Player1") {
            if (this.state.currentScoreP1 < this.state.winningScore) {
                let sum1 = this.state.currentScoreP1 + this.state.totalScoreP1;
                console.log(sum1);
                this.setState({ totalScoreP1: sum1 }, () => {
                    this.checkForWin("totalScoreP1");
                });
                this.setState({ currentScoreP1: 0 });
                this.setState({ nextTurnOf: "Player2" });
            }
        }
        if (this.state.nextTurnOf === "Player2") {
            if (this.state.currentScoreP2 < this.state.winningScore) {
                let sum2 = this.state.currentScoreP2 + this.state.totalScoreP2;
                this.setState({ totalScoreP2: sum2 }, () => {
                    this.checkForWin("totalScoreP2");
                });
                this.setState({ currentScoreP2: 0 });
                this.setState({ nextTurnOf: "Player1" });
            }
        }
    }

    setMaxPoints = (e) => {
        console.log(e.target);
        this.setState({ winningScore: e.target.value })
    }

    checkForWin(globalScore) {
        if (this.state.totalScoreP1 >= this.state.winningScore || this.state.totalScoreP2 >= this.state.winningScore) {
            this.setState({ winner: true }, () => { this.setState({ [globalScore]: "Winner" }) });
        }
    }

    render = () => {
        // const whoIsThePlayer = {turn};
        //after if 
        return (
            <>
                <div className="Game">
                    <Player name="Player 1" score={this.state.totalScoreP1} currentScore={this.state.currentScoreP1} />
                    <div className="Buttons-container">
                        <h4 className='heading1'>Roll the Dice</h4>

                        <button onClick={() => window.location.reload()}>New Game</button>
                        <button onClick={this.rollDice}>Roll Dice</button>
                        <button onClick={this.hold}>Hold</button>
                        <Dice number={this.state.dice1Number} />
                        <Dice number={this.state.dice2Number} />
                        <h5 className="heading2">Insert points to win:</h5>
                        <input

                            className={this.props.winningScoreClass}
                            value={this.state.winningScore}
                            type="text"
                            onChange={this.setMaxPoints}
                        />

                    </div>
                    <Player name="Player 2" score={this.state.totalScoreP2} currentScore={this.state.currentScoreP2} />
                </div>
            </>
        )
    }
}

