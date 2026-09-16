function buscaBinaria(vetor, valorBusca){
    let ini = 0
    let fim = vetor.length - 1
    // ini e fim marcam o "pedaço" do vetor que ainda vamos olhar
    // começa olhando o vetor inteiro

    while(fim >= ini){
        // enquanto ainda sobrar pedaço pra olhar...
        let meio = Math.floor((ini + fim)/2)
        // pega o índice do meio desse pedaço

        if(valorBusca === vetor[meio]){
            return meio
            // achou exatamente no meio, retorna a posição
        }
        else if(valorBusca > vetor[meio]){
            ini = meio + 1
            // o que eu procuro é MAIOR que o meio
            // então descarto a metade da esquerda (incluindo o meio)
            // e só continuo olhando a metade da direita
        } else {
            fim = meio - 1
            // o que eu procuro é MENOR que o meio
            // descarto a metade da direita
            // e só continuo olhando a metade da esquerda
        }
    }
    return -1
    // se ini passar do fim, é porque não sobrou mais nada pra olhar
    // ou seja, o valor não existe no vetor
}

let nums = [0,11,22,33,44,55,66,77,88,99]
// IMPORTANTE: busca binária só funciona em vetor ORDENADO
// é por isso que "nums" está em ordem crescente

// console.log(`Posição de 99: ${buscaBinaria(nums, 99)}`)
// console.log(`Posição de 100: ${buscaBinaria(nums, 100)}`)

import {nomes} from "./data/vetor-nomes.mjs"
// nomes também precisa estar ordenado alfabeticamente
// pra busca binária funcionar certo aqui

console.log(`Posição de ALEXANDRE: ${buscaBinaria(nomes, "ALEXANDRE")}`)



// É como se fosse uma busca sequencial, porém, ele quebra o vetor na metade e começa a procurar.
// Ele vai SEMPRE cortando a metade, até achar o valor desejado.
// OBS: é obrigatório que o vetor esteja ordenado, caso contrário, não funciona.