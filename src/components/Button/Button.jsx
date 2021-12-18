import React from "react";
import Dice from "../Dice/Dice";
import './Button.css'
export default class Button extends React.Component {

    // rollDice(props) {
    //     if (props.draw === 1) {
    //         return <div className="dice img-1"></div>;
    //     } else if (props.draw === 2) {
    //         return <div className="dice img-2"></div>;
    //     } else if (props.draw === 3) {
    //         return <div className="dice img-3"></div>;
    //     } else if (props.draw === 4) {
    //         return <div className="dice img-4"></div>;
    //     } else if (props.draw === 5) {
    //         return <div className="dice img-5"></div>;
    //     } else if (props.draw === 6) {
    //         return <div className="dice img-6"></div>;
    //     } else {
    //         return <div className="dice ">!!!</div>;
    //     }
    // }

    
    render = () => {
        return (
            <div className="Buttons-container">
                <button onClick={() => window.location.reload()}>New Game</button>
                <Dice />
                <Dice />
                <button onClick={console.log("click")}>Roll Dice</button>
                <button onClick={console.log("click")}>Hold</button>


            </div>
        )

    }
}

