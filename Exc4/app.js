let dataPartida = prompt("Digite a data de partida (formato (DD/MM/YYYY)")

let data_partida = moment(dataPartida, "DD/MM/YYYY")

let today = moment()

let diferencaData = today - dataPartida

let opcaoShow = prompt("Escolha a exibição \n 1 - Segundos \n 2 - Minutos \n 3 - Horas \n 4 - Dias ")

if(opcaoShow == 1){
    let segundosPartida = Math.round(diferencaData / 1000)
    alert("Tempo de vôo: "+ segundosPartida + "segundos")
} else if(opcaoShow == 2){
    let minutosPartida = Math.round(diferencaData / 60)
    alert("Tempo de vôo: "+ minutosPartida + "minutos")
}  else if(opcaoShow == 3){
    let horasPartida = Math.round(diferencaData / 3600)
    alert("Tempo de vôo: "+ horasPartida + "horas")
} else if (opcaoShow == 4){
    let diasPartida = Math.round(diferencaData / 3600 / 24)
    alert("Tempo de vôo: "+ diasPartida + "dias")
} else{
    alert("Opção Inválida")
}