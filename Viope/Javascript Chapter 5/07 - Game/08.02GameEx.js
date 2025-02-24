function calculateProfit() {
    // Read value of rounds from the input field
    var rounds = parseInt(document.getElementById('rounds').value);
    var winCounter = 0;   
    // Make a loop which is executed as many times as was set through the input field. 
    for (var i = 0; i < rounds; i++) {
    // Let win counter cumulating during every round of the loop. 
        // Randomize pips between 1-6 calling Math.round( (Math.random( ) * 5) + 1 );
        var pips = Math.round((Math.random() * 5) + 1);
        // If the randomized pips is 1, 3 or 5,  no pay

         // Otherwise if the pips 2 and 4 return the set coins back 125% (=multiplied by 1.25)
         if (pips === 2 || pips === 4) {
            winCounter += 1.25;
            }     
         // Otherwise the pips 6 returns the inserted bet 150%	
         else if (pips === 6) {
            winCounter += 1.5;
        }
    }
    //Calculate the profit (euros) of the company by subtracting the win counter (euros) from the bets (euros)
    var totalBets = rounds;
    var profit = totalBets - winCounter;
    // Write the answer on the page, to the answer div, as content of the div
    document.getElementById('answer').innerHTML = "Bets were altogether " + totalBets.toFixed(2) + " euros <br> Wins were " + winCounter.toFixed(2) + " euros <br> Profit was " + profit.toFixed(2) + "euros";
}