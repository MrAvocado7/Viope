function displayGreetingWithAge(name, yob) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - yob;
    console.log("Hello " + name + "! You are " + age + " years old this year.");
}

displayGreetingWithAge("Mike", 1989);
displayGreetingWithAge("Anne", 2002);
displayGreetingWithAge("Joe", 2010);