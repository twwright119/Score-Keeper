//Query Selecting and Define Variables
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
    nameInput: document.querySelector('#p1NameInput'),
    buttonName: document.querySelector('#p1Name'),
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
    nameInput: document.querySelector('#p2NameInput'),
    buttonName: document.querySelector('#p2Name'),
}
const p1ButtonName = document.querySelector('p1Name')
const resetScore = document.querySelector('#reset');
const inputScore = document.querySelector('#maxScore');
let winningScore = 3;
let isGameOver = false;

//Functions
function newMaxScore() {
    winningScore = parseInt(this.value);
    isGameOver = false;
    p2.display.classList.remove('has-text-success', 'has-text-danger');
    p1.display.classList.remove('has-text-success', 'has-text-danger');
    p1.button.disabled = false;
    p2.button.disabled = false;
};

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
};

function reset() {
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = 0;
    p2.display.textContent = 0;
    isGameOver = false;
    p2.display.classList.remove('has-text-success', 'has-text-danger');
    p1.display.classList.remove('has-text-success', 'has-text-danger');
    p1.button.disabled = false;
    p2.button.disabled = false;
};

//Events
p1.nameInput.addEventListener('input', function (e) {
    p1.buttonName.innerText = p1.nameInput.value;
})
p2.nameInput.addEventListener('input', function (e) {
    p2.buttonName.innerText = p2.nameInput.value;
})
inputScore.addEventListener('change', newMaxScore);
p1.button.addEventListener('click', function () {
    updateScore(p1, p2);
});
p2.button.addEventListener('click', function () {
    updateScore(p2, p1);
});
resetScore.addEventListener('click', reset)

