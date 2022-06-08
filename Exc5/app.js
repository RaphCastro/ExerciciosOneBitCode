let piloto = prompt("Qual seu nome, piloto?")
let velocidade = prompt("A que velocidade devemos acelerar?")

switch(velocidade){
    case 100: 
        alert(piloto + " ,Estamos a " + velocidade + "Km/s" + "\n DEVERIAMOS ACELERAR!")
        break
    
    case 180: 
        alert(piloto + " ,Estamos a " + velocidade + "Km/s" + "\n Manter!")
        break
    
    case 200: 
        alert(piloto + " ,Estamos a " + velocidade + "Km/s" + " \n DEVERIAMOS REDUZIR!")
        break

    default:
        alert("Impossível acompanhar a velocidade")

}