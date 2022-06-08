let nome = prompt("Digite seu nome: ")
let novoNome = ""

for (let index = 0; index < nome.length; index++) {
    if (nome[index] == "a") {
        novoNome += "@"
    }else{
        novoNome += nome[index]
    }    
}

// Essa função substitui todos os "A" por "@"

alert("Seu novo nome de usuário é: " + novoNome)
