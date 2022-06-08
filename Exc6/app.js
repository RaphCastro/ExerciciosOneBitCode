alert("Bem-vindo ao sistema conversor de velocidade de hiperespaço")

let velocidade = prompt("Qual a velocidade em anos-luz?")
let opcaoConv = prompt("Escolha o tipo de conversão: \n 1 - Parsec(pc) \n 2 - Unidade Astronoma(Au) \n 3 - Quilometros (Km)")

let conversao
let unidade

switch(opcaoConv){
    case "1": 
        unidade = "Parsec"
        conversao = velocidade * 0.306601
        break
    
    case "2": 
        unidade = "Unidade Astronoma"        
        conversao = velocidade * 63241.1
        break
    
    case "3": 
        unidade = "Quilometros"
        conversao = velocidade * (9,5 * Math.pow(10,12))
        break

    default:
        unidade = "Unidade não identificada"
        conversao = "Fora do escopo"

}
alert("Estamos a: " + velocidade + " Anos-Luz" + "\n" + unidade + ": "+ conversao )
