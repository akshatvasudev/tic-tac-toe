import React from 'react';
import Box from './Box'
const Row = (props) => {
    return (
        <div className='row'>
			{props.rowValues.map((boxValue,i) => {
				return <Box key={i+((props.rowNumber+1)*3)} boxValue={boxValue} rowNumber={props.rowNumber} colNumber={i} updateGameBoard={props.updateGameBoard}/>
			})}
		</div>
    )
}
export default Row;