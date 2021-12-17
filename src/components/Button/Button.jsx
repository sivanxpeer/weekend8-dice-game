import React from "react";
import Dice from "../Dice/Dice";
export default class Button extends React.Component {

    render = () => {
        return (
            <div>
                <button onClick={() => { console.log("refresh") }}>New Game</button>
                <button onClick={console.log("click")}>Roll Dice</button>
                <Dice/>
            </div>
        )

    }
}

