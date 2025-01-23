function play() {

    var bet = parseFloat(document.getElementById('bet').value);
    var message = "";

    if (isNaN(bet) || bet <= 0) {
        message = "Enter a valid bet amount.";
    } else {
        var pips = Math.round((Math.random() * 5) + 1);

        if (pips === 1 || pips === 3 || pips === 5) {
            message = "Pips was " + pips + " - no pay";
        } else if (pips === 2 || pips === 4) {
            var win = bet * 1.25;
            message = "Pips was " + pips + " - Paid back: " + win.toFixed(2) + " euros";
        } else if (pips === 6) {
            var win = bet * 1.5;
            message = "Pips was " + pips + " - Paid back: " + win.toFixed(2) + " euros";        }
    }
    document.getElementById('answer').innerText = message;
}