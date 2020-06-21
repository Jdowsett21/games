import React from 'react';

function Game(props) {
    const getSelectedCell =()=> {
        const {board} = this.state
        const selected = board.get('selected')
        return selected && board.get('puzzle').getIn([selected.x, selected.y])

    }

    selectCell = (x,y)=> {
        let {board} = this.state
        board = board.set('selected', {x,y})
        this.
    }
    return (
        <div>
            
        </div>
    );
}

export default Game;