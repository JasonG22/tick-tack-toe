const gameBoard = (function () {
    const board = {
        squares: [],
        player1: [],
        player2: [],
        winningCombo:  [
            ['0', '1', '2'],
            ['3', '4', '5'],
            ['6', '7', '8'],
            ['0', '3', '6'],
            ['1', '4' ,'7'],
            ['2', '5', '8'],
            ['3', '4', '8'],
            ['0', '4', '8'],
            ['2', '4', '6'],
    ],
    }
    const checkCombo = () => {
    board.winningCombo.forEach(winningCombos => {
        const xwins = winningCombos.every(state => board.player1.includes(state));
        const owins = winningCombos.every(state => board.player2.includes(state));
        console.log("xwins: " + xwins);
        if(xwins) {
            alert("X is the winner!");
        } else if (owins){
            alert('O is the winnder')
        }
        });
        return;
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
        let msgText = document.getElementById('messageText');
        const position = cell.getAttribute('value');
        //Change this to players choise
        if(cell.textContent !== "") {
           return msgText.textContent = "This square has already been choosen. Please pick another square."
        }
        if(player1Go) {
            msgText.textContent = '';
            cell.textContent = player1;
            player1Go = false;
            player2Go = true
            gameBoard.board.player1.push(position);
            // game.player1.push(position);
            if(gameBoard.board.player1.length >= 3) {
            gameBoard.checkCombo();
            }
            
        } else if (player2Go){
            msgText.textContent = '';
            cell.textContent = player2;
            player2Go = false;
            player1Go = true;
            gameBoard.board.player2.push(position);
            if(gameBoard.board.player2.length >= 3) {
                gameBoard.checkCombo();
                }
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