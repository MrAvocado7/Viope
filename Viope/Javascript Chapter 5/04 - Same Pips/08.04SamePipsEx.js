// Randomize the pips once
function randomizeDice() {
// Set the count to be one (now you have randomized once)
    let count = 0;
    let pips1, pips2;
// Repeat as long as (pips are not equal) 
    do {
    // Randomize again
        pips1 = Math.round((Math.random() * 5) + 1);
        pips2 = Math.round((Math.random() * 5) + 1);
    // Increment counter by one
        count++;
    } while (pips1 !== pips2);
// Write the answer (including the count) to the html page (answer div)    
    document.getElementById('answer').innerHTML = "Same dice pips: " + pips1 + " and " + pips2 + "<br>" + "There were " + count + " randomization rounds until we got the same pips";
}