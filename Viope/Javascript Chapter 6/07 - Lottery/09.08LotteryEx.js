let names = [];

function addName() {
    
    let name = document.getElementById("name").value;
    while (name) {
        names.push(name);

        let namesText = "inserted names: " + names.join(" ");

        document.getElementById("names").innerText = namesText;

        document.getElementById("answer").innerText = "Inserted names: " + answer;

    }
}

function makeDraw() {
    
    while (names.length > 0) {
        let winningIndex = Math.floor(Math.random() * names.length);
        let winner = names[winningIndex];

        document.getElementById("answer").innerText = `Winner is ${winner}`;
    }
}