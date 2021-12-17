import React from "react";
import Button from "../Button/Button";
import Game from "../Game/Game";

export default class GameBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    render() {
        return (
            <div className="GameBoard">
                <Button></Button>
            </div>
        );
    }
}
