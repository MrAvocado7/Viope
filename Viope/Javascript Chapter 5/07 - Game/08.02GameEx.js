function calculateProfit() {
    var rounds = parseInt(document.getElementById('rounds').value);
    var winCounter = 0;
    
    for (var i = 0; i < rounds; i++) {
        var pips = Math.round((Math.random() * 5) + 1);
        
        if (pips === 1 || pips === 3 || pips === 5) {
        continue;
        } 

        else if (pips === 2 || pips === 4) {
        winCounter += 1 * 1.25;
        } 

        else if (pips === 6) {
            winCounter += 1 * 1.5;
        }
    }

    var totalBets = rounds;
    var profit = totalBets - winCounter;

    document.getElementById('answer').innerHTML = "Bets were altogether " + totalBets.toFixed(2) + " euros\nWins were " + winCounter.toFixed(2) + " euros\nProfit was " + profit.toFixed(2) + "euros";
}