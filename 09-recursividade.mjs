// Fatorial recursivo, FEITO PARA POUPAR TEMPO
/*
fatorial iterativo

5! = 5 * 4 * 3 * 2 * 1 = 120
*/

function fatorial(n) {
    let resultado = 1

    for (let i = n; i > 1; i--) {
        resultado *= i
    }
    return resultado
}


console.log("Fatorial de 5: ", fatorial(5))

/* 
    FATORIAL RECURSIVO

    5! = 5 * 4!
    4! = 4 * 3!
    3! = 3 * 2!
    2! = 2 * 1!
    1! = 1
    0! = 1

*/

function fatorialRec(n){
    if(n <= 1){
        return 1;
    }
    return n * fatorialRec(n - 1)   // Ele chama a fatorial novamente
}

console.log("Fatorial recursivo de 5: ", fatorialRec(5))




// recursividade seria uma função que chama a si mesma, até chegar em um caso base, que é o que vai parar a recursividade.