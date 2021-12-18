import React from "react";
import './Dice.css'

//todo- change image dice1 - (wrong size)
// const DiceImage = ["image-1", "image-2", "image-3", "image-4", "image-5", "image-6"];

export default class Dice extends React.Component {

    render = () => {
        return (
            <div className={"image-"+this.props.number}>
            </div>
        );
    }
}
