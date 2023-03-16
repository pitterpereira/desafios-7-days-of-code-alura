let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
}

let player = '';
let warning = '';
let playing = false;


reset();


document.querySelector('.reset').addEventListener('click', reset);

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', itemClick)
})

function itemClick(e) {
    if (!playing) { return }
    let item = e.target.getAttribute('data-item');
    if (square[item] === '') {
        square[item] = player;
        renderSquare();
        togglePlayer()


    }
}

function togglePlayer() {
    player = (player === 'X') ? 'O' : "X"
    renderInfo();
}

function reset() {
    warning = '';
    let random = Math.floor(Math.random() * 2);
    player = (random === 0) ? 'X' : 'O'

    for (let i in square) {
        square[i] = '';
    }
    playing = true;

    renderSquare();
    renderInfo();
}


function renderSquare() {
    for (let i in square) {
        let item = document.querySelector(`div[data-item=${i}]`);
        item.innerHTML = square[i];
    }

    checkGame();
}


function renderInfo() {
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
}


function checkGame() {

    if (checkwinnerFor('X')) {
        warning = '"x" Wins';
        playing = false;
    }
    if (checkwinnerFor('O')) {
        warning = '"O" Wins';
        playing = false;
    }
    if (isFull()) {
        warning = ' Draw';
        playing = false;
    }
}


function checkwinnerFor(player) {
    let win = ['a1,a2,a3', 'b1,b2,b3', 'c1,c2,c3',
        'a1,b1,c1', 'a2,b2,c2', 'a3,b3,c3',
        'a1,b2,c3', 'a3,b2,c1'];

    for (let pos in win) {
        let posArr = win[pos].split(',');
        let hasWon = posArr.every(option => square[option] === player);
        if (hasWon) { return true }
    }

    return false;
}

function isFull() {

    for (let i in square) {
        if (square[i] === '') return false;
    }

    return true;
}