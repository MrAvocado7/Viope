let names = [];

function addName() {
    
    let name = document.getElementById("name").value;
    if (name) {
        names.push(name);

        let namesText = "inserted names: " + names.join(" ");

        document.getElementById("names").innerText = namesText;
            
        document.getElementById("name").value = "";

        document.getElementById("answer").innerText = "";
    }
}

function makeDraw() {
    
    if (names.length > 0) {
        let winningIndex = Math.floor(Math.random() * names.length);
        let winner = names[winningIndex];

        document.getElementById("answer").innerText = `Winner is ${winner}`;
    } else {
        document.getElementById("answer").innerText = "No names entered for the draw.";
    }
}