let minigolf = [23, 19, 37, 20, 21, 30, 26, 24];

function showResults() {

    minigolf.sort((a,b) => a - b);

    let smallestResult = minigolf[0];

    let lastIndex = minigolf.length - 1;

    let biggestResult = minigolf[lastIndex];

    document.getElementById('answer').innerHTML =
    "The smallest result is " + smallestResult + " (winner).<br>" +
    "The biggest result is " + biggestResult + ".";
}