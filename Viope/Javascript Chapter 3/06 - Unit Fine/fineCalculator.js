function calculateUnitFine() {
    var netIncome = parseFloat(document.getElementById('txtNetIncome').value);
    
    var unitFine = (netIncome - 255) / 60;
    document.getElementById('answerDiv').innerText = "Unit fine is " + unitFine.toFixed(2) + " euros.";
}