// Define a function (1.) which gets the length of the doctor's visit as a parameter and returns the maximum Kela reimbursement.
function kelaReimbursement(vistLength) {
	visitLength = parseInt(vistLength);

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
// Define a function  
function calculate() {
		// Read values from the input fields
	let visitLength = document.getElementById("length").value;
	let reimbursement = kelaReimbursement(visitLength);
		// Call the function (1.) which calculates and returns Kela reimbursement 
		// Write the answer on the page, to the answer div, as content of the div
	document.getElementById("answer").innerHTML = "Length of visit is " + visitLength + " minutes. <br> Kela reimbursement is " + reimbursement.toFixed(2) + " euros.";
}