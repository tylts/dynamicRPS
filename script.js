let cpuWeapon = '';
let playerChoice = '';
let playerCount = 0;
let cpuCount = 0;

const btn = document.querySelectorAll('button');
const weapons = document.getElementsByClassName('weapon');
const result = document.getElementById('result');
const score = document.getElementById('score');
const reload = document.getElementById('reload');

Array.from(weapons).forEach((weapon) => {
    weapon.addEventListener('click', (e) => {
        playerChoice = weapon.id; cpuSelect(); playRound(playerChoice, cpuWeapon);
    });
})

function cpuSelect() {
    i = Math.floor((Math.random()) * 3) + 1;
    
    switch(i) {
        case 1:
            cpuWeapon = 'rock';
            break;
        case 2: 
            cpuWeapon = 'paper';
            break;
        case 3:
            cpuWeapon = 'scissors';
            break;
    }

    return cpuWeapon;
}

function playRound(playerWeapon, cpuWeapon) {
    if (playerWeapon === cpuWeapon) {cpuCount++; playerCount++; result.textContent = 'It\'s a draw!!! You both chose ' + playerWeapon + '.'}
    else if (playerWeapon == 'rock' && cpuWeapon == 'paper') {cpuCount++; result.textContent = 'You lose! ' + cpuWeapon + ' beats ' + playerWeapon}
    else if (playerWeapon == 'scissors' && cpuWeapon == 'rock') {cpuCount++; result.textContent = 'You lose! ' + cpuWeapon + ' beats ' + playerWeapon}
    else if (playerWeapon == 'paper' && cpuWeapon == 'scissors') {cpuCount++; result.textContent = 'You lose! ' + cpuWeapon + ' beats ' + playerWeapon}
    else {playerCount++; result.textContent = 'You win! ' + playerWeapon + ' beats ' + cpuWeapon}

    score.innerHTML = 'Computer: ' + cpuCount + '<br>' + 'Player: ' + playerCount   

    if (cpuCount === 5) {
        result.innerText = 'YOU LOSE!';
        for (let i = 0; i < btn.length; i++) {
            btn[i].classList.add('disabled');
        }
        reload.innerHTML = '<a href="#" onclick="window.location.reload(true);">Try again?</a>'

    } else if (playerCount === 5) {
        result.innerText = 'Congratulations!! You beat the computer.';
        for (let i = 0; i < btn.length; i++) {
            btn[i].classList.add('disabled');
        }
        reload.innerHTML = '<a href="#" onclick="window.location.reload(true);">Try again?</a>'
    }
    
}