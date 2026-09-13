let pass, comps, trocas;
// variáveis "de fora" pra contar estatísticas:
// pass = quantas passadas o loop deu
// comps = quantas comparações foram feitas
// trocas = quantas trocas aconteceram

function bubbleSort(vetor, fnComp) {
  pass = 0, comps = 0, trocas = 0
  // zera os contadores toda vez que a função roda

  let trocou;

  do {
    pass++
    // conta mais uma passada completa pelo vetor
    trocou = false;

    for (let i = 0; i < vetor.length - 1; i++) {
        comps++
        // conta mais uma comparação feita
      if (fnComp(vetor[i], vetor[i + 1])) {
        // igual ao 05, mas agora quem decide "está fora de ordem?"
        // é a função fnComp, não um ">" fixo
        [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]];
        trocou = true;
        trocas++
        // conta mais uma troca feita
      }
    }
  } while (trocou);
}

import { objMotoristas } from "./data/motoristas-obj-desord.mjs";
// array de objetos motorista, tipo:
// [{ nome_motorista: "CARLOS" }, { nome_motorista: "ANA" }, ...]

bubbleSort(
  objMotoristas,
  (elem1, elem2) => elem1.nome_motorista > elem2.nome_motorista,
  // essa é a fnComp: compara o nome de dois motoristas
  // retorna true se elem1 vem "depois" de elem2 (fora de ordem)
);

console.log(objMotoristas);
// mostra o array já ordenado por nome_motorista

console.log({pass, comps, trocas})
// mostra quantas passadas, comparações e trocas foram necessárias