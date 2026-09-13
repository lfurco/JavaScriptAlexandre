import { objNomes } from "./data/vetor-obj-nomes.mjs";

function buscaBinaria(vetor, fnComp) {
  let ini = 0;
  let fim = vetor.length - 1;
  // mesma lógica do 03: ini/fim marcam o pedaço que ainda vamos olhar

  while (fim >= ini) {
    let meio = Math.floor((ini + fim) / 2);

    // aqui muda: em vez de comparar direto, chama fnComp
    // e fnComp devolve um CÓDIGO (0, 1 ou -1) em vez de true/false
    switch (fnComp(vetor[meio])) {
      case 0:
        return meio;
        // 0 = "achei, é esse mesmo"

      case 1:
        ini = meio + 1;
        break;
        // 1 = "o que eu procuro é maior, vai pra direita"

      default:
        fim = meio - 1;
        // qualquer outra coisa (-1) = "é menor, vai pra esquerda"
    }
  }
  return -1;
}

console.log(
  "Posição de first_name === ALEXANDRE",
  buscaBinaria(objNomes, (valorMeio, valorBusca = "ALEXANDRE") => {
    // essa arrow function é o fnComp
    // ela recebe o objeto do meio (valorMeio)
    // e compara o first_name dele com "ALEXANDRE"
    if (valorBusca === valorMeio.first_name) return 0; // achou
    else if (valorBusca > valorMeio.first_name) return 1; // vai pra direita
    else return -1; // vai pra esquerda
  }),
);

// as linhas comentadas abaixo são a MESMA função, só que escrita
// separada (function compara) em vez de arrow function direto no console.log
// function compara(valorMeio, valorBusca = "ALEXANDRE") {
//   if (valorBusca === valorMeio.first_name) return 0;
//   else if (valorBusca > valorMeio.first_name) return 1;
//   else return -1;
// }
// console.log("Posição de first_name=ALEXANDRE", buscaBinaria(objNomes, compara));