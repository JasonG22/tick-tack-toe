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
        return;
    } 
    const createArray = () => {
        _createSquares(board);
        console.log(board.sqaures);
        return;
    }
    const writeBoardToPage = (board) => {
        for(let i = 0; i < board.sqaures.length; i++) {
            console.log(board.sqaures[i]);
        }
        return;
    }
    return {
        board: board,
        createArray: createArray,
        writeBoardToPage: writeBoardToPage,
    }
})();

gameBoard.createArray();
gameBoard.writeBoardToPage(gameBoard.board);

