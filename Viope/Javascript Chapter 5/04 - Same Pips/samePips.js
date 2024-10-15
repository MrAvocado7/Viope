function randomizeDice() {
    let count = 0;
    let pips1, pips2;

    do {
        pips1 = Math.round((Math.random() * 5) + 1); 
        pips2 = Math.round((Math.random() * 5) + 1);
        count++;
    } while (pips1 !== pips2);
    
    document.getElementById('answer').innerText = 'It took ${count} rounds to get the same pips (${pips1}).';
}