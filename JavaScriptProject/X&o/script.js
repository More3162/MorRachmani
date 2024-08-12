const gameBoard = document.getElementById('gameBoard');
const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restartButton');
const leaderboard = document.getElementById('leaderboard');

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

const PLAYER_X_WON = 'PLAYER_X_WON';
const PLAYER_O_WON = 'PLAYER_O_WON';
const TIE = 'TIE';

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        announce(currentPlayer === 'X' ? PLAYER_X_WON : PLAYER_O_WON);
        isGameActive = false;
        return;
    }

    if (!board.includes('')) {
        announce(TIE);
    }
}

const announce = (type) => {
    switch (type) {
        case PLAYER_O_WON:
            alert('Player O Won');
            updateLeaderboard('Player O');
            break;
        case PLAYER_X_WON:
            alert('Player X Won');
            updateLeaderboard('Player X');
            break;
        case TIE:
            alert('Tie');
    }
};

const updateLeaderboard = (winner) => {
    let leaderboardData = JSON.parse(localStorage.getItem('leaderboard')) || [];
    const existingEntry = leaderboardData.find(entry => entry.player === winner);

    if (existingEntry) {
        existingEntry.wins += 1;
    } else {
        leaderboardData.push({ player: winner, wins: 1 });
    }

    localStorage.setItem('leaderboard', JSON.stringify(leaderboardData));
    renderLeaderboard();
};

const renderLeaderboard = () => {
    let leaderboardData = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboard.innerHTML = leaderboardData.map(entry => `<li>${entry.player}: ${entry.wins} wins</li>`).join('');
};

const isValidAction = (cell) => {
    if (cell.innerText === 'X' || cell.innerText === 'O') {
        return false;
    }
    return true;
};

const updateBoard = (index) => {
    board[index] = currentPlayer;
};

const changePlayer = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const userAction = (cell, index) => {
    if (isValidAction(cell) && isGameActive) {
        cell.innerText = currentPlayer;
        cell.classList.add(`player${currentPlayer}`);
        updateBoard(index);
        handleResultValidation();
        changePlayer();
    }
};

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => userAction(cell, index));
});

restartButton.addEventListener('click', () => {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    cells.forEach(cell => {
        cell.innerText = '';
        cell.classList.remove('playerX');
        cell.classList.remove('playerO');
    });
    currentPlayer = 'X';

});

renderLeaderboard();
