function calculateRentPerPerson() {
    var totalRent = parseFloat(document.getElementById('rent').value);
    var participants = parseInt(document.getElementById('participants').value);

    if (isNaN(totalRent) || isNaN(participants) || participants <= 0) {
        document.getElementById('answerDiv').innerText = "Enter valid values for rent and participants.";
        return;
    }
    
    var costPerPerson = totalRent / participants;
    document.getElementById('answerDiv').innerText = "Rent per participants is " + costPerPerson.toFixed(2) + " euros.";
}