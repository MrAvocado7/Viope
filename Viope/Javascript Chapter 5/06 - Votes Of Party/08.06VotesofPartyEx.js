function showComparisonScores() {
    var totalVotes = parseInt(document.getElementById('votes').value);
    var totalCandidates = parseInt(document.getElementById('candidates').value);
    
    var outputText = "";
    
    // For each candidates
    for (var i = 0; i < totalCandidates; i++) {
        var ordinal = i + 1;
        // Calculate comparison score for candidate
		var comparisonScore = totalVotes / ordinal;
        outputText += ordinal + ". candidate: " + comparisonScore.toFixed(0) + "<br>";
    }
    // Show scores
	document.getElementById('answer').innerHTML = outputText;
}