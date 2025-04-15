// Defne a function (1.) 
function getKelaReimbursement(visitLength) {
	visitLength = parseInt(visitLength);

	if (visitLength <= 10) {
		return 8.00;
	} else if (visitLength <= 20) {
		return 11.00;
	} else if (visitLength <= 30) {
		return 13.50;
	} else if (visitLength <= 45) {
		return 16.50;
	} else {
		return 21.00;
	}
}
// Defne a function (2.) 
function calculateCustomerPayment(doctorsFee, kelaReimbursement) {
	const officeFee = 15.90;
	doctorsFee = parseFloat(doctorsFee);
	kelaReimbursement = parseFloat(kelaReimbursement);

	return doctorsFee - kelaReimbursement + officeFee;
}
// Define a function (3.) 
function calculate() {
		// Read values from the input fields
		let visitLength = document.getElementById("length").value;
		let doctorsFee = document.getElementById("doctorsFee").value;

		// Call the function (1.) which calculates Kela reimbursement 
		let kelaReimbursement = getKelaReimbursement(visitLength);		
		let amountToPay = calculateCustomerPayment(doctorsFee, kelaReimbursement);

		// Call the function (2.) which calculates amount left for the customer to pay
		// Write the answer on the page, to the answer div, as content of the div
		document.getElementById("answer").innerHTML = "Doctor's Fee is " + parseFloat(doctorsFee).toFixed(2) + " euros. <br>" +
		"Kela reimbursement is " + kelaReimbursement.toFixed(2) + " euros. <br>" +
		"Office fee is 15.90 euros. <br>" +
		"Customer needs to pay " + amountToPay.toFixed(2) + " euros.";
}