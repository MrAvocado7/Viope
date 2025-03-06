// The array variable names is declared inside the script element, but NOT inside the function. 
// The array is availabe for both functions to read from or write to.
let names = []; // declaring a variable and creating empty array object

function addName() {
	// Assign name from the input field to the array (use push())
	let name = document.getElementById("name").value;
	names.push(name);
	// Go through the array in a for loop adding each name at the end of the namesText
	let namesText = "Inserted names: ";
	for (let i = 0; i < names.length; i++) {
		namesText += names [i];
		if (i < names.length - 1) {
			namesText += ", ";
		}
	}
	// Write the names on the page, to the names div, as content of the div
	document.getElementById("nameList").innerText = namesText;

	// Empty the input field of name as that name was just put in the array
	document.getElementById("name").value = "";

	// Empty the answer text
	document.getElementById("answer").innerText = "";
}

function makeDraw() {

	// Randomize the index of the winner
	let winningIndex = Math.floor(Math.random() * names.length);
	
	// Write the answer on the page, to the answer div, as content of the div
	document.getElementById("answer").innerText = "Winner is: " + names[winningIndex];
}