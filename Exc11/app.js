let velocidade = 10
let acelerar = 5 

do {
    console.log("Acelerando: Estamos a" + velocidade + "km/s");
    velocidade += acelerar
} while (velocidade <= 100);

alert("Velocidade final atingida.")