function playGame() {
    // Get the bet amount from the input field
    var bet = parseFloat(document.getElementById('bet').value);

    // Check if the bet is a valid number
    if (isNaN(bet) || bet <= 0) {
        document.getElementById('answer').innerText = "Please enter a valid bet amount.";
        return;
    }

    // Randomize the dice pips between 1-6
    var pips = Math.round((Math.random() * 5) + 1);

    // Variable to store the pay
    var pay = 0;

    // Determine the payout based on pips value
    if (pips === 2 || pips === 4) {
        pay = bet * 1.25;
    } else if (pips === 6) {
        pay = bet * 1.5;
    } else {
        pay = 0; // No payout for pips 1, 3, 5
    }

    // Display the result in the answer div
    if (pay > 0) {
        document.getElementById('answer').innerText = "Pips: " + pips + ". You won: " + pay.toFixed(2) + " euros.";
    } else {
        document.getElementById('answer').innerText = "Pips: " + pips + ". No payout. Better luck next time!";
    }
}
