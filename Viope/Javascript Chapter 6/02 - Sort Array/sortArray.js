let array = ["Milk", "Bread", "Juice", "Eggs", "Butter", "Salt", "Orange", "Apples"];

function sortArray() {
    array.sort().reverse();

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}