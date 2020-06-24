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

    const resetState = (e,hardReset) => {
    	if(hardReset){
    		setGameStatus({ ...defaultState(props.gridSize)})
    		return
    	}
        setGameStatus({ ...defaultState(props.gridSize), players: gameStatus.players, drawCount:gameStatus.drawCount })
    }

    const updateStateWithNewMove = (row, col) => {
        setGameStatus(updateGameBoard(gameStatus, row, col));
    }

    return (
        <div className='game'>
        <ScoreBoard scores={gameStatus.players} drawCount={gameStatus.drawCount}/>
		<Grid gameStatus={gameStatus.status} updateGameBoard={updateStateWithNewMove}/>
		{gameStatus.result !== null && <GameEndMessage result={gameStatus.result >= 0?gameStatus.players[gameStatus.result]:gameStatus.result} restartGame={resetState}/>}
		<button className='hard-reset' onClick={(e) => {resetState(e,true)}}>Reset all games</button>
		</div>
    )
}
export default Game;