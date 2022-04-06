const gameBoard = (function () {
    const board = {
        squares: [],

    }
    const cellClick = (player1, player2) => {
        const cells = document.querySelectorAll(".squares");
        cells.forEach(cell => {
        cell.addEventListener('click', () => {
        const position = cell.getAttribute('value');
        //Change this to players choise
        cell.textContent = player1;
        return position;
    })
    });
}
    return {
        cellClick: cellClick,
    }
    
})();
const Player = (function () {
    const Player1 = () => {
        const tokenChoise = document.querySelectorAll('.player1');
        tokenChoise.forEach(tokens => {
            tokens.addEventListener('click', () => {
                let token = tokens.textContent;
                console.log('Player1 token ' + token);
                return token;
            })
        })
    }
    const Player2 = () => {
        const tokenChoise = document.querySelectorAll('.player2');
        tokenChoise.forEach(tokens => {
            tokens.addEventListener('click', () => {
                let token = tokens.textContent;
                console.log('Player2 token ' + token);
                return token;
            })
        })
    }
    
    return {
        Player1: Player1,
        Player2: Player2,
    }

})();