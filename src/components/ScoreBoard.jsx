import React, { Fragment } from 'react';
import getSymbolClassName from '../helpers/xsAndOsClass';
const ScoreBoard = (props) => {

    return (
        <div className='scoreboard'>
	{
		props.scores.map((player,i) => {
		return <span key={i}>(<span className={getSymbolClassName(player.choice)}></span>){player.name}:{player.score}</span>
	})
	}
	<span key='draw'>Draw: {props.drawCount}</span>
	</div>
    )
}
export default ScoreBoard;