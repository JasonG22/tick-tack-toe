const gameBoard = (function () {
    const board = {
        sqaures: [],
    }
     _createSquares = (board) => {
        for(let i = 0; i < 9; i++) {
            let square = document.createElement('td');
            let index = [i];
            square.setAttribute('id', index);
            board.sqaures.push(square);
            
        }
        return console.log(board.sqaures)
     }
    return {
        board: board,
        _createSquares: _createSquares,
    }
})();

gameBoard._createSquares(gameBoard.board);