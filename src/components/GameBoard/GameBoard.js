import React from "react";
import Button from "../Button/Button";

export default class GameBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    render() {
        return (                
            <Button></Button>
        );
}
}
