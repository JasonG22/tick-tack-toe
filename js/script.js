const gameBoard = (function () {
    const board = {
        sqaures: [],
    }
    const _createSquares = (board) => {
        for(let i = 1; i <= 9; i++) {
            let square = document.createElement('div');
            let index = [i];
            square.setAttribute('id', index);
            square.setAttribute('class', 'squares');
            board.sqaures.push(square);
        }
    } 
    const createArray = () => {
        _createSquares(board);
        console.log(board);
    }
    return {
        createArray: createArray,
    }
})();

gameBoard.createArray();

