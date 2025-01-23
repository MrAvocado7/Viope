function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    var bmi = weight / ((height / 100.0) * (height / 100.0));

    if (bmi <= 18.4) {
        bmiClass = "Weight less than normal weight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiClass = "Normal weight";
    } else {
        bmiClass = "Overweight";
    }

    document.getElementById('answer').innerText = 
        "Body Mass Index (BMI) is " + bmi.toFixed(2) + " (" + bmiClass + ")";
}
