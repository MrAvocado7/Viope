function play() {
    // Read value from the input field
    var bet = parseFloat(document.getElementById('bet').value);
    var message = "";
    var pips = Math.round( (Math.random( ) * 5) + 1 );
    // Randomize dice pips between 1-6

    if (pips === 2 || pips === 4) {
        message = "Pips was " + pips + " - Paid back: " + 1.25 * bet + " euros.";
    }
    else if (pips === 1 || pips === 3 || pips ===5) {
        message = "Pips was " + pips + " - no pay";
    }
    else if (pips === 6) {
        message = "Pips was " + pips + " - Paid back: " + 1.5 * bet + " euros.";
    }
    // Write the answer on the page, to the answer div, as content of the div
    document.getElementById('answer').innerText = message;
}