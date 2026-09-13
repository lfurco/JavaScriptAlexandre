function buscaSequencial(vetor, fnComp) {
  // igual à busca sequencial normal, mas em vez de comparar
  // "vetor[i] === valorBusca", ela chama uma FUNÇÃO (fnComp)
  // pra decidir se aquele item é o que procuramos
  for (let i = 0; i < vetor.length; i++) {
    if (fnComp(vetor[i])) return i;
    // fnComp(vetor[i]) retorna true ou false
  }
  return -1;
}

function comparaNome(obj) {
  // essa função é o "critério de busca"
  // recebe um objeto e verifica se o first_name é "ALEXANDRE"
  return obj.first_name === "ALEXANDRE";
}

import { objNomes } from "./data/vetor-obj-nomes.mjs";
// objNomes é um array de objetos, tipo:
// [{ first_name: "JOAO" }, { first_name: "ALEXANDRE" }, ...]

console.log("Posição de ALEXANDRE:", buscaSequencial(objNomes, comparaNome));
// aqui buscaSequencial vai passar cada objeto do array
// pra dentro de comparaNome, até achar um que dê true