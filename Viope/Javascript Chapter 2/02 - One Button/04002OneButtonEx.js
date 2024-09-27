function logPressing() {
    console.log("Button Pressed.");
    return 0;
}
function buttonClicked() {
    console.log("Hello!");
}
const button = document.getElementById('MyButton');
button.addEventListener('click', function() {
    logPressing();
});