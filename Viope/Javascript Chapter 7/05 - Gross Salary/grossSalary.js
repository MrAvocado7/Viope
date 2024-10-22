function calculateSalary(hours, hourlySalary) {
    let grossSalary = hours * hourlySalary;
    
    return grossSalary.toFixed(2);
}

function showSalary() {
    let hours = document.getElementById("hours").value;
    
    let hourlySalary = document.getElementById("hourlySalary").value;
    
    let grossSalary = calculateSalary(hours, hourlySalary);
    
    document.getElementById("salaryOutput").innerText = "Gross salary is " + grossSalary + " euros.";
}
