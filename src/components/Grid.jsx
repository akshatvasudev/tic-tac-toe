import React from 'react';
import Row from './Row'
const Grid = (props) => {
    return (
        <div className='grid'>
			{props.gameStatus.map((rowValues,i) => {
				return <Row key={i} rowValues={rowValues} rowNumber={i} updateGameBoard={props.updateGameBoard}/>
			})}
		</div>
    )
}
export default Grid;