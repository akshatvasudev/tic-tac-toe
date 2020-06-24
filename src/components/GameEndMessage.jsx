import React, { Fragment } from 'react';
const GameEndMessage = (props) => {
    let _result = props.result,
        message = 'Winner: ';
    if (_result === -1) {
        message = 'Draw!'
    } else {
        message += _result.name
    }
    return (
        <div className='game-end-message'>
        <div className='game-end-message-wrapper'>
		<div>
			{message}
		</div>
		<button onClick={props.restartGame}>Replay?</button>
		</div>
		</div>
    )
}

export default GameEndMessage;