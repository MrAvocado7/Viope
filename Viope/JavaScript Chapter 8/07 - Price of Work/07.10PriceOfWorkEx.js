function modifyTitle() {
    // Read value of title from the input field
	let titleInput = document.getElementById("title");
	// Call allCapsTitleTrimmed() function 
	titleInput.value = allCapsTitleTrimmed(titleInput.value);
}
function allCapsTitleTrimmed(text) {
	// Removes any empty white space from the beginning or the end of the text
	// Changes the text given to it to be ALL CAPS   
	// Return the changed text
	return text.trim().toUpperCase();
}
function calculate() {
    // Calculate length of the work as minutes.
	let dateText = document.getElementById("date").value;
	let startTime = document.getElementById("startTime").value;
	let endTime = document.getElementById("endTime").value;

	let startParts = startTime.split(":");
	let startHours = parseInt(startParts[0], 10);
	let startMinutes = parseInt(startParts[1], 10);

	let endParts = endTime.split(":");
	let endHours = parseInt(endParts[0], 10);
	let endMinutes = parseInt(endParts[1], 10);

	let startTotalMinutes = startHours * 60 + startMinutes;
	let endTotalMinutes = endHours * 60 + endMinutes;
	let durationMinutes = endTotalMinutes - startTotalMinutes;
    // If it is not Sunday  (Call isSunday() function)
    	//Calculate and show price of the repair work during the workdays
    let hourlyRate = isSunday(dateText) ? 72 : 48;
	let totalPrice = (durationMinutes / 60) * hourlyRate;
		//otherwise			
        //Calculate and showprice of the repair work on Sundays
	document.getElementById("answer").innerHTML = "Length of the work was " + durationMinutes + " minutes.<br>" + 
	"The hourly price " + (isSunday(dateText) ? " during the Sundays " : " during the workdays ") + " is " + hourlyRate.toFixed(2) + " euros." + "<br>" +
	"The price of this repair work is " + totalPrice.toFixed(2) + " euros.";
}
// The function gets the date text in the format "dd.MM.yyyy". 
// The function returns Boolean value true if the date is for a Sunday, otherwise false.
function isSunday(dateText) {
	// Split the given date text into day, month and year parts using the subStr() method
	let day = parseInt(dateText.substr(0, 2));
	let month = parseInt(dateText.substr(3, 5)) - 1;
	let year = parseInt(dateText.substr(6, 10));
	// Create a new Date object to a variable asDate
	let asDate = new Date(year, month, day);
	// Get the day of the week with its getDay() method. Sunday is number 0 .
	
	// If day of the week is Sunday 
	
		// return Boolean value true
		
	// otherwise	
	
       // return Boolean value false		
	return asDate.getDay() === 0;
}


