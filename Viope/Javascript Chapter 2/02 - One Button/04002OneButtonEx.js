function logPressing() {
    console.log("Button Pressed.");
    return 0;
}
const button = document.getElementById('MyButton');
button.addEventListener('click', function() {
    logPressing();
});