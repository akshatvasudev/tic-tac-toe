const defaultState = (gridSize) => {

    const get2DArrayOfSize = (n) => {
        let mainArray = [];
        for (let i = 0; i < n; i++) {
            mainArray.push((new Array(Number(n))).fill(null))
        }

        return mainArray;
    }
    return {
        status: get2DArrayOfSize(gridSize),
        currentPlayer: 0, //Index of the 'players' array that is currently playing.
        NumberOfMoves: 0, //To keep a track of draw
        result: null, //-1 is draw, otherwise its the index of the players array that won.
        drawCount:0,
        players: [{
                score: 0,
                choice: 0,
                name: 'Player 1'
            },
            {
                score: 0,
                choice: 1,
                name: 'Player 2'
            }
        ]
    }
}


export default defaultState;