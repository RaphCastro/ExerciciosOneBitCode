let nomeNave = prompt("Diite o nome da Nave: ")
let velocidadeNaveInicial = 0 
let opcaoEscolha 

function mostrarMenu() {
    let opcao
    while (opcao != "1" && opcao != "2"  && opcao != "3"  && opcao != "4") {
        opcao = prompt("O que vamos fazer?" 
        + "\n 1 - Acelerar em 5Km/s"
        + "\n 2 - Desacelerar em 5Km/s"
        + "\n 3 - Imprimir dados de bordo"
        + "\n 4 - Sair do programa")        
    }
}
do { 
    opcaoEscolha = mostrarMenu
} while (opcaoEscolha =! 4);

function aceleracao(){
    let novaVelocidade = velocidadeNaveInicial + 5
    return novaVelocidade
}
function desaceleracao(){
    let novaVelocidade = velocidadeNaveInicial - 5
    if (novaVelocidade < 0){
        novaVelocidade = 0
    }
    return novaVelocidade
}

function imprimir(){
    alert("Nave: " + nomeNave + "\n Velocidade: " + novaVelocidade + "Km/s")
}

do {
    opcaoEscolha = mostrarMenu
    switch(opcaoEscolha){
        case "1": 
            velocidadeNaveInicial = aceleracao(velocidadeNaveInicial)
            break
        case "2": 
            velocidadeNaveInicial = desaceleracao(velocidadeNaveInicial)
            break
        case "3": 
            imprimir
            break
        default: 
            alert("Encerrando.")
            break
    }
} while (opcaoEscolha != 4);