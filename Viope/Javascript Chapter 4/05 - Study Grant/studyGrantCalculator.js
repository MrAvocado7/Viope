function showStudyGrant() {

    var age = parseInt(document.getElementById('age').value);
    var withParents = document.getElementById('withParents').value.toLowerCase();
    var message;

    if (age >= 20 && withParents === "y") {
        message = "The study grant is 87.23 euros and 196.27 euros.";
    }
    else if (age >= 20 && withParents === "n") {
        message = "The study grant is 268.23 euros.";
    }
    else {
        message = "Ask Kela.";
    }
    document.getElementById('answer').innerText = message;
}