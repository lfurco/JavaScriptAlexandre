const frutas = ['laranja', 'maça', 'uva', 'pera', 'jabuticaba', 'limão', 'mamão', 'tangerina']
const numeros = [1, 5, 7, 10, 2, 24, 15]

function buscaSequencial(vetor, valorBusca){
    // percorre posição por posição, do começo ao fim
    for(let i = 0; i < vetor.length; i++){
        // achou o valor? retorna o índice e para
        if(vetor[i] === valorBusca) return i
    }
    // passou o vetor inteiro e não achou
    return -1
}

console.log("Buscando tangerina: ", buscaSequencial(frutas, "tangerina")) // 7
console.log("Buscando limão: ", buscaSequencial(frutas, "limão")) // 5
console.log("Buscando morango: ", buscaSequencial(frutas, "morango")) // -1, não existe
console.log("Buscando o número 5: ", buscaSequencial(numeros, 5)) // 1
console.log("Buscando o número 50: ", buscaSequencial(numeros, 50)) // -1, não existe



// É como se fosse uma busca que procura um por um no vetor, até achar oq quero.
// Caso não achar = -1