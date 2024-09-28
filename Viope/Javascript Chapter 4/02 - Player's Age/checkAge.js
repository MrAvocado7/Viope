function checkAge() {
    var age = parseInt(document.getElementById('age').value);
    if (isNaN(age) || age <= 0) {
        document.getElementById('answer').innerText = "Enter a valid age.";
    } else if (age < 18) {
        document.getElementById('answer').innerText = "Enter a valid age.";
    } else {
        document.getElementById('answer').innerText = "Old enough to play.";
    }
}