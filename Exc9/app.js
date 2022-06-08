let nome = prompt("Digite seu nome: ")
let novoNome = ""
let caractere = prompt("Qual letra deseja ocultar?")
let caractereSub = prompt("Por qual caractere?")


for (let index = 0; index < nome.length; index++) {
    if (nome[index] == caractere) {
        novoNome += caractereSub
    }else{
        novoNome += nome[index]
    }    
}

// Essa função substitui todos os "A" por "@"

alert("Seu novo nome de usuário é: " + novoNome)
