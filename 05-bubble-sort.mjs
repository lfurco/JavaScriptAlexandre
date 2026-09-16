function bubbleSort(vetor) {
  let trocou;
  // controla se ainda houve troca nessa passada
  // se não houve NENHUMA troca, o vetor já está ordenado

  do {
    trocou = false;
    // reseta a cada nova passada pelo vetor

    for (let i = 0; i < vetor.length - 1; i++) {
      // compara cada item com o vizinho da direita
      if (vetor[i] > vetor[i + 1]) {
        // se o da esquerda for maior, estão fora de ordem
        [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]];
        // troca os dois de lugar (destructuring swap)
        trocou = true;
        // marca que rolou troca, então precisa passar de novo
      }
    }
  } while (trocou);
  // repete o processo até uma passada inteira sem trocar nada
}


let nums = [ 77, 44, 22, 33, 99, 55, 88, 0, 66, 11]

bubbleSort(nums)
// bubbleSort ordena o vetor "por dentro" (não retorna nada novo,
// ele mexe direto no array original)
console.log(nums)
// aqui já sai ordenado: [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]



// É como se ele fosse trocando todos os números de lugar, até que todos fiquem em ordem crescente.
// Ele vai trocando um por um, do maior pro menor. Ou seja, deixa ele em ordem.