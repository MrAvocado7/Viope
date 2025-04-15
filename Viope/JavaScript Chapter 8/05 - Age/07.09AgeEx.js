function tellAge() {
    // Read value of yearOfBirth from the input field 
    let birthYear = document.getElementById("yearOfBirth").value;
    // Figure out the current date into today variable
    const today = new Date();
    // Use getFullYear() method to get the current year out from the today variable
    const currentYear = 2023;
    // Calculate the (rough estimate of the) age
    let age = currentYear - birthYear;    
    // If age is less than zero
    if (age < 0 || isNaN(birthYear) || birthYear.trim() === "") {
    //  Show an error message
    document.getElementById("answer").innerHTML = "Enter a valid year.";
    } else {
    // otherwise tell the age
    document.getElementById("answer").innerHTML = "You are now " + age + " years old. <br> (Current year is " + currentYear + ")";
    }
}