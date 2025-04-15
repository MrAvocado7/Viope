// JSON form
let json = '[{"number": 1, "name": "Samsung Smart LED-TV", "price": 449.00, "description": "HD-digi ready"},' + 
            '{"number": 2, "name": "Samsung 2.1 SoundBar Home Theater", "price": 198.00, "description": "Connect to TV and stream music wireless"},' + 
            '{"number": 3, "name": "Dilog CI+/CA module for pay-tv-cards", "price": 63.90, "description": "CI+ module for the table televisions"}]';

let products = JSON.parse(json);
// todo: Parse the JSON text into Javascript objects (1 array, 3 'product' objects)


function listProducts() {
    let html = "";

    for (let i = 0; i < products.length; i++) {
        html += "<p>Number: " + products[i].number + "<br>";
        html += "Name: " + products[i].name + "<br>";
        html += "Price: " + products[i].price.toFixed(2) + "<br>" ;
        html += "Description: " + products[i].description + "</p>";
    }
    document.getElementById("productList").innerHTML = html;

}