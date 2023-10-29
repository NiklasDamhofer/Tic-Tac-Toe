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


function createBoard() {
    for (let i = 0; i < 9; i++) {
        const board = document.createElement('div');
        board.className = 'cell';
        board.id = i;
        board.textContent = "";
        board.addEventListener('click', function() {
            if (board.textContent === "") {
                board.textContent = icon;
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




createBoard();

const cells = document.querySelectorAll('.cell');

for (let j = 0; j < 9; j++) {
    cells[j].addEventListener('click', turnClick, false);
};

function turnClick(square) {
    console.log(square.target.id);
};
