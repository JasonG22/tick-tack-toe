const gameBoard = (function () {
    const board = {
        squares: [],

    }
    const cellClick = () => {
        const cells = document.querySelectorAll(".squares");
        cells.forEach(cell => {
        cell.addEventListener('click', () => {
        const position = cell.getAttribute('value');
        //Change this to players choise
        cell.textContent = 'X';
        return position;
    })
    });
}
    return {
        cellClick: cellClick,
    }
    
})();
gameBoard.cellClick();
