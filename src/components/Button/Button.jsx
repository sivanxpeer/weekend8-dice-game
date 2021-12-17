import React from "react";
import Dice from "../Dice/Dice";
import './Button.css'
export default class Button extends React.Component {

    render = () => {
        return (
            <div className="Buttons-container">
                <button onClick={() => window.location.reload()}>New Game</button>
                <Dice/>
                <Dice/>
                <button onClick={console.log("click")}>Roll Dice</button>
                <button onClick={console.log("click")}>Hold</button>
                
            </div>
        )

    }
}

