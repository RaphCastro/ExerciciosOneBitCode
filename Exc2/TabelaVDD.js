let spaceship = "Elemental"
let velocity = 20

// console.log(spaceship.length == 9 && velocity > 15);
// V e V = V


// console.log(velocity > 10 && velocity <19);
// V e F = F

console.log(spaceship.length == 9 || velocity > 15);
// V ou V = V

console.log(velocity > 17 || spaceship == "Elemental");
// F ou V = V

console.log(spaceship == "Golias" || velocity > 21);
// F ou F = F

console.log(!(velocity > 19));
// Nega a expressão, ou seja NÃO F = 

console.log(!(velocity > 25 && spaceship == "Elemental") || (velocity - 3 == 17 && spaceship.lenght + 1 > 15));
