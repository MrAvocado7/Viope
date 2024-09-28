function calculateBMI() {
    // Get the values from the input fields
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    // Check if the inputs are valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('answer').innerText = "Please enter valid values for weight and height.";
        return;
    }

    // Calculate the BMI
    var bmi = weight / ((height / 100.0) * (height / 100.0));

    // Determine the BMI class
    var bmiClass = "";
    if (bmi <= 18.4) {
        bmiClass = "Weight less than normal weight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiClass = "Normal weight";
    } else {
        bmiClass = "Overweight";
    }

    // Display the result with two decimal places
    document.getElementById('answer').innerText = 
        "Body Mass Index (BMI) is " + bmi.toFixed(2) + " (" + bmiClass + ")";
}
