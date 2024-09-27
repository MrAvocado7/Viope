function calculateUnitFine() {
    var netIncome = parseFloat(document.getElementById('txtNetIncome').value);
    
    if (isNaN(netIncome) || netIncome <= 255) {
        document.getElementById('answerDiv').innerText = "Enter a valid net income greater than 255 euros.";
        return;
    }

    var unitFine = (netIncome - 255) / 60;
    document.getElementById('answerDiv').innerText = "Unit fine is " + unitFine.toFixed(2) + " euros.";
}