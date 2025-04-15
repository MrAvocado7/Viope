function calculate() {
    // Read date text from the input field
    let date = document.getElementById("date").value;
    // If it is not Sunday  (Call isSunday() function with a date text as a parameter)
    let pricePerHour;
    if (isSunday(date)) {
        //Show price of the repair work per hour during the workdays
        pricePerHour = 72;
    } else {
    //otherwise			
        //Show price of the repair work per hour on Sundays
    pricePerHour = 48;
    }
    document.getElementById("answer").innerHTML = "<p>Date " + date + " (" + (isSunday(date) ? "Sunday" : "work day") + ").<br>" +
    "The price of this repair work is " + pricePerHour + " euros per hour.</p>";
}
 // The function gets the date text in the format "dd.MM.yyyy". 
 // The function returns Boolean value true if the date is for a Sunday, otherwise false.
function isSunday(dateText) {
	// Split the given dateText into day, month and year parts using the substr() method
	let day = parseInt(dateText.substr(0, 2), 10);
    let month = parseInt(dateText.substr(3, 5), 10) - 1;
    let year = parseInt(dateText.substr(6, 10), 10);
	// Create a new Date object to a variable 
	let asDate = new Date();
    asDate.setFullYear(year);
    asDate.setMonth(month);
    asDate.setDate(day);
	// Get the day of the week with its getDay() method. Sunday is number 0 .
	return asDate.getDay() === 0;	
}