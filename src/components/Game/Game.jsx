//Goal 1# make game and players

//playr name
//score 
//current score
//dot that reprsante who is the player  


import React from 'react';
import Player from '../Player/Player';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            turn: false
        }
    }
    render = () => {
        // const whoIsThePlayer = {turn};
        //after if 
        return (
            <div>
                <div className="player1">
                    <Player />
                </div>
            </div>
        )
    }
}

