function getGreetingWithAge(name, yob) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - yob;
    return "Hello " + name + "! You are " + age + " years old this year.";
}

function displayGreetingWithAge(name, yob) {
    const greeting = getGreetingWithAge(name, yob);
    console.log(greeting);
}

displayGreetingWithAge("Mike", 1989);
displayGreetingWithAge("Anne", 2002);
displayGreetingWithAge("Joe", 2010);