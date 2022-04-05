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
const Player = (function () {
        let token;
        const x = document.getElementById('tokenx');
        const o = document.getElementById('tokeno')
        x.addEventListener('click', (token) => {
            token = 'x';
            return token;
        });
        o.addEventListener('click', () => {
            token = 'o';
            return token;
        })

    const Player = (token) => {
        return {token}
    }
    const human = Player(token);
    console.log(human.token)
    gameBoard.cellClick();
})();

