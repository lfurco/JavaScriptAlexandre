let pass, comps, trocas

function selectionSort(vetor){     // <- corrigido: era "selectSort", agora bate com as chamadas lá embaixo
    pass = 0; comps = 0; trocas = 0;

    for(let posSel = 0; posSel < vetor.length - 1; posSel++){
        // posSel = posição que estamos "fechando" nessa rodada
        // vai do início até o penúltimo item
        pass++

        let posMenor = posSel + 1;
        // hipótese inicial: o menor valor restante está logo depois de posSel
        // (ainda vamos confirmar isso no for de baixo)

        for(let i = posMenor + 1; i < vetor.length; i++){
            // percorre o RESTO do vetor procurando um valor ainda menor
            if(vetor[posMenor] > vetor[i]) posMenor = i;
            // achou algo menor? atualiza posMenor pra essa posição
            comps++
        }

        comps++
        if(vetor[posSel] > vetor[posMenor]){
            // depois de achar o menor de toda a "sobra", compara com posSel
            [vetor[posSel], vetor[posMenor]] = [vetor[posMenor], vetor[posSel]];
            // troca: o menor valor encontrado vai pra posição posSel
            trocas++
        }
    }
}

let nums = [ 77, 44, 22, 33, 99, 55, 88, 0, 66, 11]

selectionSort(nums)
console.log(nums)

import {nomes} from "./data/nomes-desord.mjs"

selectionSort(nomes)
console.log(nomes)




// Ele verifica todos os números do vetor, um por um, e vai puxando os menores, até ele ficar em ordem.
// Ele vai fazendo do menor pro maior. Ordenando eles.