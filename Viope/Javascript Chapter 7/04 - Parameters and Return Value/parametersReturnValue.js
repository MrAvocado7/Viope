function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rollTheDice() {
    let diceValue = getRandomInteger(1, 6);
    
    document.getElementById('dice').innerText = diceValue;
}