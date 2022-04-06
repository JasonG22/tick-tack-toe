const gameBoard = (function () {
    const board = {
        squares: [],
        player1: [],
        player2: [],
        winningCombo: [0,1,2],
    }
    const checkCombo = () => {
        const winningCombo =  [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4 ,7],
            [2, 5, 8],
            [0, 4, 8],
            [0, 4, 6],
    ];
    }

    return {
        board: board,
        checkCombo: checkCombo,
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
            gameBoard.checkCombo();
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
    var array1 = ["cat", "sum","fun", "run"];
    var array2 = ["bat", "cat","dog","sun", "hut", "gut"];
   
    const winningCombo =  [0, 1, 2];
    const test = [
        [1,3],
        [5, 7, 8],
    ];
    function combo() {
    let filteredArray = winningCombo.filter(value => test.includes(value));
    console.log(filteredArray);
    }