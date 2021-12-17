import React from "react";
import './Dice.css'

// image1 = import(/assets/images / dice_icon_01);
// image2 = import(/assets/images / dice_icon_02);
// image3 = import(/assets/images / dice_icon_03);
// image4 = import(/assets/images / dice_icon_04);
// image5 = import(/assets/images / dice_icon_05);
// image6 = import(/assets/images / dice_icon_06);

const DiceImage = ["image-1","image-2","image-3","image-4","image-5","image-6"];

export default class Dice extends React.Component {

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

    pickDice=(array)=>{
        return array[Math.floor(Math.random()*6)+1];
    }

    render = () => {
        return (
            <div className={this.pickDice(DiceImage)}>
            </div>
        );
    }
}