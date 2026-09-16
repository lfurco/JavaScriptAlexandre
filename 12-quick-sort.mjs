let pass = 0, comps = 0, trocas = 0

function quickSort(vetor, ini = 0, fim = vetor.length - 1) { 
    // Inicio vai ser 0 e fim vai ser o tamanho do vetor - 1

    // Só trabalhamos se a região do vetor tiver, pelo menos 2 elementos
    if (fim <= ini) return; // condição de saída

    pass++

    const pivot = fim; // O pivot vai ser o último elemento do vetor

    let div = ini - 1; // divisor de região, vai ser o início - 1, pq ele vai ser incrementado antes de ser usado

    for(let i = ini; i < fim; i++){

        comps++

        if(vetor[pivot] > vetor[i]){ // Se o pivot for maior, ele vai andar

            div++

            if(div !== i){ // Se o divisor for diferente do i, ele vai trocar os elementos de lugar

                [vetor[i], vetor[div]] = [vetor[div], vetor[i]] // Ele vai trocar o elemento do divisor com o elemento do i

                trocas++
            }
        }
    }

    div++
    // Definir o pivot na posição correta, que é a posição do divisor + 1

    if(vetor[div] > vetor[pivot] && div !== pivot){

        [vetor[div], vetor[pivot]] = [vetor[pivot], vetor[div]]

        trocas++
    }

    // Ele vai chamar o quickSort novamente para a parte da esquerda
    quickSort(vetor, ini, div - 1)

    // Ele vai chamar o quickSort novamente para a parte da direita
    quickSort(vetor, div + 1, fim)
}


let nums = [2, 5, 7, 1, 6, 3, 4]

quickSort(nums)

console.log(nums)


import {nomes} from "./data/nomes-desord.mjs"

quickSort(nomes)

console.log(nomes)
console.log({pass, comps, trocas})


/*

Ele vai meio que comparando o pivot com elementos do vetor, até todos ficarem na posição correta

*/