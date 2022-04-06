const gameBoard = (function () {
    const board = {
        squares: [],
        player1: [],
        player2: [],

    }

    return {
        board: board,
    }
    
})();
const Game = (function () {
    const cellClick = (player1, player2) => {
        let player1Go = true;
        let player2Go = false;
        const cells = document.querySelectorAll(".squares");
        cells.forEach(cell => {
        cell.addEventListener('click', () => {
        const position = cell.getAttribute('value');
        //Change this to players choise
        if(player1Go) {
            cell.textContent = player1;
            player1Go = false;
            player2Go = true
            gameBoard.board.player1.push(position);
        } else if (player2Go){
            cell.textContent = player2;
            player2Go = false;
            player1Go = true;
            gameBoard.board.player2.push(position);
        }
        
        return position;
        })
    });
}
    const writeToCell = () => {
        Game.cellClick(p1token, p2token)
    }
    return {
        cellClick: cellClick,
        writeToCell: writeToCell,
    }
})();

const Player = (function () {
//    const Player1 = () => {
   
//     }
//     const Player2 = (p1token) => {
    
//     }
//     return {
//         Player1: Player1,
//         Player2: Player2,
//     }

})();
// Player.Player1();
// Player.Player2(Player.Player1.p1token);
let p1token;
const player1tokens = document.querySelectorAll('.player1');
player1tokens.forEach(tokens => {
    tokens.addEventListener('click', () => {
        p1token = tokens.textContent;
        console.log('Player1 token ' + p1token);
        return p1token;
    });
    
});

let p2token;
    const player2tokens = document.querySelectorAll('.player2');
    player2tokens.forEach(tokens => {
        tokens.addEventListener('click', () => {
            p2token = tokens.textContent;
            console.log('Player2 token ' + p2token);
            if(p1token && p2token) {
                Game.writeToCell();
            }
            return p2token;
        });
    });
