import React from "react";
import Dice from "../Dice/Dice";
import './Button.css'
export default class Button extends React.Component {

    rollDice(props) {
        //get dices value, if both 6 --> end game
    }

    
    render = () => {
        return (
            <div className="Buttons-container">
                <button onClick={() => window.location.reload()}>New Game</button>
                <Dice />
                <Dice />
                <button onClick={this.rollDice()}>Roll Dice</button>
                <button onClick={console.log("click")}>Hold</button>
            </div>
        )

    }
}

