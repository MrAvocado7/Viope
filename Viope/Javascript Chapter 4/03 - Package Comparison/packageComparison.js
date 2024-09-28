function comparePackages() {
    var callTime = parseFloat(document.getElementById('callTime').value);
    var textMessages = parseFloat(document.getElementById('textMessages').value);
    
    var allInclusiveCost = 29.90;
    
    var baseSpecialCost = 19.90;
    var costPerCall = 0.069 * callTime;
    var costPerText = 0.069 * textMessages;
    var specialPackageCost = baseSpecialCost + costPerCall + costPerText;

    if (specialPackageCost < allInclusiveCost) {
        document.getElementById('answer').innerText = "The Special package (" + specialPackageCost.toFixed(2) + ") is cheaper than the All-inclusive package (" + allInclusiveCost + ").";
    } else {
        document.getElementById('answer').innerText = "The All-inclusive package (" + allInclusiveCost + ") is cheaper than the Special package (" + specialPackageCost.toFixed(2) + ").";
    }
}