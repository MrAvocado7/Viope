function calculateCosts() {
 var kilometers = parseFloat(document.getElementById('kilometers').value);
 var consumption = parseFloat(document.getElementById('consumption').value);
 var price = parseFloat(document.getElementById('price').value);
 var participants = parseFloat(document.getElementById('participants').value);

 if (isNaN(kilometers) || isNaN(consumption) || isNaN(price) || isNaN(participants) || participants <=0) {
    document.getElementById('answerId').innerText = "Enter values for all fields.";
    return;   
 }

 var totalCost = (kilometers * consumption / 100) * price;
 var costPerPerson = totalCost / participants;
 document.getElementById('answerId').innerText = "Fuel costs per participant is " + costPerPerson.toFixed(2) + " euros.";
}