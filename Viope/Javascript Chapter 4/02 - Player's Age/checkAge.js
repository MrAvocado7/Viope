function checkAge() {

    var ageInput = document.getElementById('age');
    var age = parseInt(ageInput.value);
    var message;
    
    if (age < 18) {
        message = "Adolescents are not allowed to play.";
    } else {
        message = "Old enough to play.";
    }    
    
    document.getElementById('answer').innerText = message;
}