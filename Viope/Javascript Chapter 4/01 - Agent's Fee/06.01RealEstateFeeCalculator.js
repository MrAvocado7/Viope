function calculateFee() {

    var priceInput = document.getElementById('price');

    if (!priceInput || !priceInput.value) {
        document.getElementById('fee').innerText = "Enter a valid price";
        return;
    }

    var price = parseFloat(priceInput.value);

    var fee = price * 0.0344;

    if (fee < 2400) {
        fee = 2400;
    }

    document.getElementById('fee').innerText = "Real estate agent's fee is " + fee.toFixed(2) + " euros";
    }