const gameBoard = (function () {
    const board = {
        sqaures: [],
    }
    _createBoard = () => {
        const gameTable = document.getElementById('gameTable');
        const row1 = gameTable.insertRow();
        const row2 = gameTable.insertRow();
        const row3 = gameTable.insertRow();
        for(let i = 1; i <= 3; i++) {
            let square = row1.insertCell();
            let index = [i];
            square.setAttribute('id', index);
            square.setAttribute('class', 'squares');
            console.log(square);
        }
        for(let i = 4; i <= 6; i++) {
            let square = row2.insertCell();
            let index = [i];
            square.setAttribute('id', index);
            square.setAttribute('class', 'squares');
            console.log(square);
        }
        for(let i = 7; i <= 9; i++) {
            let square = row3.insertCell();
            let index = [i];
            square.setAttribute('id', index);
            square.setAttribute('class', 'squares');
            console.log(square);
        }
        return;
    }
    return {
        _createBoard: _createBoard,
    }
})();

_createBoard();