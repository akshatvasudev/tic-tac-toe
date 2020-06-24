const checkWinning = (gameStatus, latestMoveX, latestMoveY) => {
    let _x = latestMoveX,
        _y = latestMoveY,
        currentPlayerChoice = gameStatus.players[gameStatus.currentPlayer].choice,
        currentBoard = gameStatus.status,
        boardSize = currentBoard[0].length;

    for (let rowIterator = 0; rowIterator < boardSize; rowIterator++) {
        let currElement = currentBoard[rowIterator][_y];
        if (currElement !== currentPlayerChoice) break;
        if (rowIterator === boardSize - 1) return true;

    }

    for (let colIterator = 0; colIterator < boardSize; colIterator++) {
        let currElement = currentBoard[_x][colIterator];
        if (currElement !== currentPlayerChoice) break;
        if (colIterator === boardSize - 1) return true;
    }

    if ((_x + _y) % 2 === 0) { //If you're on either diagonal.
        for (var i = 0; i < boardSize; i++) {
            if (currentBoard[i][i] !== currentPlayerChoice) break;
            if (i === boardSize - 1) return true;
        }
        for (var i = boardSize - 1; i >= 0; i--) {
            let x = i,
                y = boardSize - i - 1;
            if (currentBoard[x][y] !== currentPlayerChoice) break;
            if (i === 0) return true;
        }
    }

    return false;
}

export default checkWinning;