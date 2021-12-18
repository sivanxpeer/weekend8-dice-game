import React from "react";
import './Dice.css'

// image1 = import(/assets/images / dice_icon_01);
// image2 = import(/assets/images / dice_icon_02);
// image3 = import(/assets/images / dice_icon_03);
// image4 = import(/assets/images / dice_icon_04);
// image5 = import(/assets/images / dice_icon_05);
// image6 = import(/assets/images / dice_icon_06);


//todo- change image dice1 - (wrong size)
const DiceImage = ["image-1", "image-2", "image-3", "image-4", "image-5", "image-6"];

export default class Dice extends React.Component {

    state = {
        dices:[null, null],
        currentScore:0
    }

    sumOfRoll = () => {
        const firstDice = this.rollDice();
        const secondDice = this.rollDice();
        this.setState({ dices: [firstDice, secondDice] });
        this.props.currentScore(firstDice + secondDice);
        // console.log(firstDice,secondDice,this.currentScore);
    }

    // constructor(props) {
    //     super(props);
    //     const diceImage = {
    //         1: image1,
    //         2: image2,
    //         3: image3,
    //         4: image4,
    //         5: image5,
    //         6: image6,
    //     }
    // }

    pickDice = (array) => {
        let res = array[Math.floor(Math.random() * 6)];
        // let num = parseInt(res.match(/\d+/)[0]);
        // let sum = 0;
        // sum = sum + num;
        // console.log(res);
        // console.log(num);
        // console.log(sum);
        return res;
    }

    // rollDice() {

    //     // let arr = [this.randomDie(), this.randomDie()];
    //     // this.sumOfRoll(); 
    //     console.log(arr);
    //     return arr[];
    // }

    render = () => {
        return (
            <div className={this.pickDice(DiceImage)}>
            </div>
        );
    }
}
