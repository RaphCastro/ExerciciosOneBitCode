let nome = prompt("Qual seu nome, piloto? ")
let velocidade = 0;
let velocidadeFinal = prompt("A que velocidade, capitão?")
let confirmarVelocidade = confirm("Estamos acelerando a " + velocidadeFinal + "Km/s" + "\n Confirmar?")

if(confirmarVelocidade){
    velocidade = velocidadeFinal
};


if (velocidade <= 0 ) {
        alert("A nave está parada, ativar motores!");
    } else if (velocidade < 40){
        alert("Estamos devagar, a todo vapor?");
    } else if (velocidade < 80){
        alert('Velocidade média estável, manter');
    } else if (velocidade < 100){
        alert("Atingindo hiperespaço, cautela necessária");
    } else{
        alert("Zona de risco no hiperespaço atingida, reduzir!");
    }
