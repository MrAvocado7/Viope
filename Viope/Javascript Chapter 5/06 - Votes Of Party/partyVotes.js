function showComparisonScores() {
    var totalVotes = parseInt(document.getElementById('totalVotes').value);
    var candidateVotesInput = document.getElementById('candidateVotes').value;
    var candidateVotes = candidateVotesInput.split(',').map(Number);
    var outputText = "";

    for (var i = 0; i < candidateVotes.length; i++) {
        var ordinal = i + 1;
        var comparisonScore = totalVotes / ordinal;
        outputText += (ordinal) + ". candidate: " + comparisonScore.toFixed(0) + "<br>";
    }
    document.getElementById('answer').innerHTML = outputText;
}