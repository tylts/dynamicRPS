let cpuWeapon;
let playerWeapon;
let cpuCount = 0;
let playerCount = 0;

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
    playerWeapon = prompt('Enter rock, paper, or scissors: ')
    playerWeapon = playerWeapon.toLowerCase();
    if (playerWeapon === cpuWeapon) {return 'It\'s a draw!!! ' + playerWeapon + ' & ' + cpuWeapon + ' are twins.'}
    else if (playerWeapon == 'rock' && cpuWeapon == 'paper') {cpuCount++; return 'You lose! ' + cpuWeapon + ' beats ' + playerWeapon}
    else if (playerWeapon == 'scissors' && cpuWeapon == 'rock') {cpuCount++; return 'You lose! ' + cpuWeapon + ' beats ' + playerWeapon}
    else if (playerWeapon == 'paper' && cpuWeapon == 'scissors') {cpuCount++; return 'You lose! ' + cpuWeapon + ' beats ' + playerWeapon}
    else {playerCount++; return 'You win! ' + playerWeapon + ' beats ' + cpuWeapon};
}

function playGame() {
    while (playerCount < 5 && cpuCount < 5) {
        alert(playRound(playerWeapon, cpuSelect()));
        alert('Player score: ' + playerCount + ' | ' + 'Computer score: ' + cpuCount)
    }
    if (playerCount > cpuCount) {
        alert('Victorious!')
    } else {
        alert('You lose!!! Good DAY sir!');
    }
}   

playGame();