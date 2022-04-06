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
        const player1Selected = true;
        const tokenChoise = document.querySelectorAll('.player1');
        tokenChoise.forEach(tokens => {
            tokens.addEventListener('click', () => {
                let token = tokens.textContent;
                console.log('Player1 token ' + token);
                return token;
            })
        })
        return player1Selected;
    }
    const Player2 = () => {
       
        const tokenChoise = document.querySelectorAll('.player2');
        tokenChoise.forEach(tokens => {
            tokens.addEventListener('click', () => {
                let token = tokens.textContent;
                const player2Selected = true;
                console.log('Player2 token ' + token);
                if (Player1.player1Selected && player2Selected) {
                    Game();
                }
                return token;
            })
        })
       
    }
    
    return {
        Player1: Player1,
        Player2: Player2,
    }

})();
const Game = (function () {
    console.log('Testing')
    gameBoard.cellClick(Player.Player1.token);
})();


Player.Player1();
Player.Player2();