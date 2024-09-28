document.addEventListener("DOMContentLoaded", function() {
    window.calculateFee = function() {
        var sellingPrice = parseFloat(document.getElementById('sellingPrice').value);

        if (isNaN(sellingPrice) || sellingPrice <= 0) {
            document.getElementById('answerId').innerText = "Please enter a valid selling price.";
            return;
        }

        var fee = sellingPrice * 0.0344;
        
        if (fee < 2400) {
            fee = 2400;
        }
        
        document.getElementById('answerId').innerText = 
            "Real estate agent's fee is " + fee.toFixed(2) + " euros.";
    };
});
