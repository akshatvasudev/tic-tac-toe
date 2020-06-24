import React, { useState, useEffect, Fragment } from 'react';
import Grid from './Grid'
import { get, put } from '../helpers/api'
import defaultState from '../helpers/defaultState'
import updateGameBoard from '../helpers/updateGameBoard'
import GameEndMessage from './GameEndMessage'
import ScoreBoard from './ScoreBoard'
const Game = (props) => {
    let stateFromServer = JSON.parse(get('gameState')) || defaultState(props.gridSize);
    let [gameStatus, setGameStatus] = useState(stateFromServer);

    useEffect(() => {
        put('gameState', gameStatus);
    }, [gameStatus])

    const resetState = () => {
        setGameStatus({ ...defaultState(props.gridSize), players: gameStatus.players })
    }

    const updateStateWithNewMove = (row, col) => {
        setGameStatus(updateGameBoard(gameStatus, row, col));
    }

    return (
        <div className='game'>
        <ScoreBoard scores={gameStatus.players}/>
		<Grid gameStatus={gameStatus.status} updateGameBoard={updateStateWithNewMove}/>
		{gameStatus.result !== null && <GameEndMessage result={gameStatus.result >= 0?gameStatus.players[gameStatus.result]:gameStatus.result} restartGame={resetState}/>}
		</div>
    )
}
export default Game;