function comparePackages() {

    var callTime = parseFloat(document.getElementById('callTime').value);
    var textMessages = parseFloat(document.getElementById('textMessages').value);
    
    var specialPackageCost = 19.90 + (0.069 * callTime) + (0.069 * textMessages);
    var message;
    
    if (specialPackageCost < 29.90) {
        message = 'The special package (23.35) is cheaper than the All-inclusive package (29.90)';
    } else {
        message = 'The All-inclusive package (29.90) is cheaper than the Special package (37.15)';
    }
    document.getElementById('answer').innerText = message;
}