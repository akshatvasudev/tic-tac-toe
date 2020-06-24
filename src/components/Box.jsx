import React from 'react';
import getSymbolClassName from '../helpers/xsAndOsClass';
const Box = (props) => {
    let className = 'box ';
    className += getSymbolClassName(props.boxValue);

    const handleBoxClick = (e) => {
        if (props.boxValue !== null) return;
        props.updateGameBoard(props.rowNumber, props.colNumber);
    }

    return (
        <span className={className} onClick={handleBoxClick}></span>
    )
}

export default Box;