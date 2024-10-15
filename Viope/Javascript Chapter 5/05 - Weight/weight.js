function showWeightGoals() {
    var weight = parseFloat(document.getElementById('weight').value);
    var totalWeightLoss = weight * 0.1;
    var weeklyWeightLoss = totalWeightLoss / 7;
    var outputText = "";

    for (var i = 1; i <= 7; i++){
        weight -= weeklyWeightLoss;
        outputText += "After " + i + ". week: " + weight.toFixed(1) + " kg<br>"
    }
    document.getElementById('answer').innerHTML = outputText;
}