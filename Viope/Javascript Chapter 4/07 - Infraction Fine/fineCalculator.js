function tellInfractionFine() {

    var drivingSpeed = parseFloat(document.getElementById('drivingSpeed').value);
    var speedLimit = parseFloat(document.getElementById('speedLimit').value);
    var excessSpeed = drivingSpeed - speedLimit;
    var  message = "";
    
    if (excessSpeed <= 0) {
        message = "No speeding, no fine.";
    }
    else if (speedLimit >= 10 && speedLimit <= 60) {
        if (excessSpeed <= 15) {
            message = "Infraction fine is 85 euros.";
        } else if (excessSpeed <= 20) {
            message = "Infraction fine is 115 euros.";
        } else {
            message = "Income-based unit fine.";
        }
    } 
    else if (speedLimit >= 70 && speedLimit <= 120) {
        if (excessSpeed <= 15) {
            message = "Infraction fine is 70 euros.";
        } else if (excessSpeed <= 20) {
            message = "Infraction fine is 100 euros.";
        } else {
            message = "Income-based unit fine.";
        }
    }
    else {
        message = "Invalid speed limit.";
    }

    document.getElementById('answer').innerText = message;
}