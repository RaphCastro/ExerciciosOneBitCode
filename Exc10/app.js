let nome = prompt("Seu nome?")
let caractere = prompt("Qual caractere deseja ocultar? ")
let nomeInvertido = ""

for (let i = nome.length - 1; i >= 0; i--) {
    if(nome[i] == caractere){
        nomeInvertido += ""
    }else{
    nomeInvertido += nome[i];   
    } 
}

console.log(nomeInvertido);
alert("Nome secreto: " + nomeInvertido)