function calculateGrant() {
    // Get the values from the input fields
    var age = parseInt(document.getElementById('age').value);
    var withParents = document.getElementById('withParents').checked;

    // Check if the age is a valid number
    if (isNaN(age) || age <= 0) {
        document.getElementById('answer').innerText = "Please enter a valid age.";
        return;
    }

    // Determine the study grant based on age and living situation
    var grant;
    if (age >= 20) {
        if (withParents) {
            grant = "87.23 - 196.27 euros (depending on parents' income)";
        } else {
            grant = "268.23 euros";
        }
    } else {
        grant = "Ask Kela.";
    }

    // Display the result
    document.getElementById('answer').innerText = "Study Grant: " + grant;
}
