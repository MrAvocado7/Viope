function calculateFine() {
    // Get the input values
    var drivingSpeed = parseFloat(document.getElementById('drivingSpeed').value);
    var speedLimit = parseFloat(document.getElementById('speedLimit').value);
    var excessSpeed = drivingSpeed - speedLimit;
    var fine = "";
    
    // Check if there's any speeding
    if (excessSpeed <= 0) {
        fine = "No speeding, no fine.";
    } 
    // For speed limits between 10-60 km/h
    else if (speedLimit >= 10 && speedLimit <= 60) {
        if (excessSpeed <= 15) {
            fine = "Infraction fine: 85 euros.";
        } else if (excessSpeed <= 20) {
            fine = "Infraction fine: 115 euros.";
        } else {
            fine = "Income-based unit fine.";
        }
    } 
    // For speed limits between 70-120 km/h
    else if (speedLimit >= 70 && speedLimit <= 120) {
        if (excessSpeed <= 15) {
            fine = "Infraction fine: 70 euros.";
        } else if (excessSpeed <= 20) {
            fine = "Infraction fine: 100 euros.";
        } else {
            fine = "Income-based unit fine.";
        }
    } 
    // Invalid speed limit
    else {
        fine = "Invalid speed limit entered.";
    }

    // Display the result
    document.getElementById('answer').innerText = fine;
}
