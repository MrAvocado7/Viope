function calculateSalary(hours, hourlySalary) {
	// calculate salary
	// return the gross salary with the return statement
	return hours * hourlySalary;
}

function showGrossSalary() {
	// assign the input field value to the variable hours
	var hours = document.getElementById("hours").value;
	// assign the second input field value to the variable hourlySalary
	var hourlySalary = document.getElementById("hourlySalary").value;
	// call the calculateSalary function
	var grossSalary = calculateSalary(hours, hourlySalary).toFixed(2);
	// write the answer on the html page
	document.getElementById("answer").innerText = "Gross salary is " + grossSalary + " euros.";
}