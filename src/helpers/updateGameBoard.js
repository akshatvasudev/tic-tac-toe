import checkWinning from './checkWinning'
const updateGameBoard = (gameStatus, row, col) => {
    let _gameStatus = { ...gameStatus };
    let playerDetails = _gameStatus.players[_gameStatus.currentPlayer];
    _gameStatus.status[row][col] = playerDetails.choice;
    _gameStatus.NumberOfMoves++;
    let isWinner = checkWinning(_gameStatus, row, col);
    let isDraw = _gameStatus.NumberOfMoves === _gameStatus.status[0].length * _gameStatus.status.length;
    if (isWinner) {
        playerDetails.score++;
        _gameStatus.result = _gameStatus.currentPlayer;
    } else if (isDraw) {
        _gameStatus.result = -1;
        _gameStatus.drawCount++;
    } else {
        _gameStatus.currentPlayer = _gameStatus.currentPlayer === _gameStatus.players.length - 1 ? 0 : _gameStatus.currentPlayer + 1;
    }
    return _gameStatus;
}

export default updateGameBoard;