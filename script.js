const container =  document.querySelector('#game-board');
let icon = "X";
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]; 

let playerPositionX = [];
let playerPositionY = [];

function createBoard() {
    for (let i = 0; i < 9; i++) {
        const board = document.createElement('div');
        board.className = 'cell';
        board.id = i;
        board.textContent = "";
        board.addEventListener('click', function() {
            if (board.textContent === "") {
                board.textContent = icon;
                let cellId = board.id;
                if (icon == "X") {
                    playerPositionX.push(cellId);
                } else {
                    playerPositionY.push(cellId);
                }
                checkWinner();
                changePlayer();
            } else {
                console.log('Error')
            } 
        });
        container.appendChild(board);
    }
}


function changePlayer() {
    if (icon == "X") {
        icon = "O";
    } else {
        icon = "X";
    }
}

function checkWinner() {
    for (let combo of winCombos) {
        const [a, b, c] = combo;
        if (playerPositionX.includes(a) && playerPositionX.includes(b) && playerPositionX.includes(c)) {
            console.log('Player X wins!');
            resetGame();
        } else if (playerPositionY.includes(a) && playerPositionY.includes(b) && playerPositionY.includes(c)) {
            console.log('Player O wins!');
            resetGame();
        }
    }
}

function resetGame() {
    playerPositionX = [];
    playerPositionY = [];
    icon = "X";
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = "";
    });
}


createBoard();