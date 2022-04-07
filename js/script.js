let msgText = document.getElementById('messageText');
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
            ['0', '4', '8'],
            ['2', '4', '6'],
    ],
    }
    const playAgin = document.createElement("button");
    playAgin.setAttribute('id', 'playAgainBtn');
    playAgin.textContent = 'Play Again';
    playAgin.addEventListener('click', () => {
        location.reload();
    });
    let hasWon = false;
    const checkCombo = () => {
    board.winningCombo.forEach(winningCombos => {
        const xwins = winningCombos.every(state => board.player1.includes(state));
        const owins = winningCombos.every(state => board.player2.includes(state));
        console.log("xwins: " + xwins);
        if(xwins) {
            msgText.textContent = "X is the winner!";
            document.body.appendChild(playAgin);
            hasWon = true;
        } else if (owins){
            msgText.textContent = "O is the Winner!";
            document.body.appendChild(playAgin);
            hasWon = true;
        } else if(board.player1.length >= 5 && board.player2.length >=4 && hasWon === false){
            msgText.textContent = "This game was a draw, please play again";
            document.body.appendChild(playAgin);
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
        const position = cell.getAttribute('value');
        
        //Change this to players choise
        if(cell.textContent !== "") {
           return msgText.textContent = "This square has already been choosen. Please pick another square."
        }
        if(player1Go) {
            cell.classList.add('purple');
            msgText.textContent = '';
            cell.textContent = player1;
            player1Go = false;
            player2Go = true;
            gameBoard.board.player1.push(position);
            // game.player1.push(position);
            if(gameBoard.board.player1.length >= 3) {
            gameBoard.checkCombo();
            }
            
        } else if (player2Go){
            cell.classList.add('pink');
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
        let p1token = 'X';
        let p2token = 'O';
        Game.cellClick(p1token, p2token)
    }

    return {
        cellClick: cellClick,
        writeToCell: writeToCell,
    }
})();

Game.writeToCell();