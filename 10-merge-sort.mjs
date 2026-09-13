function mergeSort(vetor){
    if(vetor.length < 2) return vetor;

    let meio = Math.floor(vetor.length / 2);    // é o tamanho do vetor dividido por 2, arredondado pra baixo
    vetor.slice(0, meio) // pega do início até o meio (não inclui o meio)

    // Ele não sabe oq tem em cada parte, ele só divide
    let vetEsq = vetor.slice(0,meio);   // vetor da esquerda (vai do 0 até o meio, não incluindo o meio)
    let vetDir = vetor.slice(meio);     // vetor da direita (vai do meio até o final, incluindo o meio)
    
    // Chamadas Recursivas ao mergeSort  |  Ele divide novamente cada metade, até chegar no resultado final
    veteEsq = mergeSort(vetEsq);   // explicar
    vetDir = mergeSort(vetDir);

    // Mesclagem ordenada de vetEsq com vetDir
    let posEsq = 0, posDir = 0, vetRes = [];

    while(posEsq < vetEsq.length && posDir < vetDir.length){    // 
        if(vetEsq[posEsq] < vetDir[posDir]){    // Vai ser o 0, onde começa
            vetRes.push(vetEsq[posEsq]);
            posEsq++;
        } else {
            vetRes.push(vetDir[posDir]);    // Se o valor da esquerda for maior que o da direita, ele vai colocar o da direita
            posDir++;
        }
    }

    let sobra

    if(posEsq < pos){
        sobra = vetEsq.slice(posEsq);    // Se sobrar, ele vai colocar no final do vetor resultado
    } else {
        sobra = vetDir.slice(posDir);
    }

    return [...vetRes, ...sobra];    // Retorna o vetor resultado com os elementos restantes
}

// let nums = [ 77, 44, 22, 33, 99, 55, 88, 0, 66, 11]
// console.log(mergeSort(nums));   // Vai imprimir o vetor ordenado


import {nomes} from "./data/nomes-desord.mjs"

let nomesOrd = mergeSort(nomes)

console.log(nomesOrd)



// é como se fosse:

// 1º passo -  v: [ 77, 44, 22, 33, 99]

// 2º passo -  vE: [ 77, 44]    e     vD: [22, 33, 99]    