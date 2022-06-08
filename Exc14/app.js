const navesAtracadas = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let equipeMaiorQue9 = navesAtracadas.filter(nave => {
    return nave[1] > 9
}).map(nave => {
    return nave[0]
})

let plataformaPendente = navesAtracadas.findIndex(nave => {
    return nave[2] == false
})

let navesDestaque = navesAtracadas.map(nave =>{
    return nave[0].toUpperCase()
})

let mensagem = "Espaçonaves com mais de 9 tripulantes: " + equipeMaiorQue9.join(", ")
mensagem += "\n Plataforma com processo de engate pendente: " + (plataformaPendente + 1)
mensagem += "\n Espaçonaves destacadas: " + navesDestaque.join(", ")

alert(mensagem)