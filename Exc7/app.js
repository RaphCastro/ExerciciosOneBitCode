let dobrasFeitas = 0
let opcaoDobra = ""
let nave = prompt("Nome da Nave: ")

opcaoDobra = prompt("Deseja entrar em dobra espacial? \n \n 1 - Sim \n 2 - Não")



while (opcaoDobra == "1") {
    dobrasFeitas += 1 
    opcaoDobra = prompt("Deseja entrar em dobra espacial? \n \n 1 - Sim \n 2 - Não")
} 

alert(nave + " entrou em dobra " + dobrasFeitas + " vezes")
