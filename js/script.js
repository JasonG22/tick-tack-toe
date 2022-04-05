const gameBoard = (function () {
    const board = {
        sqaures: [],
    }
    const _createSquares = (board) => {
        for(let i = 0; i < 9; i++) {
            board.sqaures[i] = document.createElement('div');
        }
    } 
    return {
        _createSquares: _createSquares,
        board: board,
    }
})();
