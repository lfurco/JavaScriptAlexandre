
import BinarySearchTree from "./lib/BinarySearchTree.mjs";

const arvore = new BinarySearchTree()

// Nós começamos pelo valor 48, que será a raiz da árvore
// A partir daí, vamos separando os valores menores para a esquerda e os maiores para a direita


/* Seria dessa forma que a árvore ficaria:
                48
              /    \
            15      71
           /  \    /  \
          1   29  57   80
           \  / \  / \
           14 19 37 51 64
                \
                23
               /  \
              21  25
*/


arvore.insert(48)
arvore.insert(71)
arvore.insert(15)
arvore.insert(29)
arvore.insert(57)
arvore.insert(1)
arvore.insert(80)
arvore.insert(14)
arvore.insert(19)
arvore.insert(37)
arvore.insert(23)
arvore.insert(21)
arvore.insert(25)
arvore.insert(51)
arvore.insert(64)


// Percursos da árvore
let percursoIN = []
let percursoPRE = []
let percursoPOS = []

// Percurso em ordem (in-order)
arvore.inOrderTraversal(val => percursoIN.push(val))
// Percurso em ordem (in-order): [ 1, 14, 15, 19, 21, 23, 25, 29, 37, 48, 51, 57, 64, 71, 80 ]
console.log('Percurso em ordem (in-order):', percursoIN)

// Percurso pré-ordem (pre-order)
arvore.preOrderTraversal(val => percursoPRE.push(val))
// Percurso pré-ordem (pre-order): [ 48, 15, 1, 14, 29, 19, 23, 21, 25, 37, 71, 57, 51, 64, 80 ]
console.log('Percurso pré-ordem (pre-order):', percursoPRE)

// Percurso pós-ordem (post-order)
arvore.postOrderTraversal(val => percursoPOS.push(val))
// Percurso pós-ordem (post-order): [ 14, 1, 21, 25, 23, 19, 37, 29, 15, 51, 64, 57, 80, 71, 48 ]
console.log('Percurso pós-ordem (post-order):', percursoPOS)


// TESTES DE REMOÇÃO
let percursoREM = []
arvore.inOrderTraversal(val => percursoREM.push(val))
console.log('ANTES DAS REMOÇÕES:', percursoREM)

// REMOÇÃO DE UM NODO DE GRAU 0
arvore.remove(64)
percursoREM = []
arvore.inOrderTraversal(val => percursoREM.push(val))
console.log('Após a remoção do 64:', percursoREM)

// REMOÇÃO DE UM NODO DE GRAU 1
arvore.remove(1)
percursoREM = []
arvore.inOrderTraversal(val => percursoREM.push(val))
console.log('Após a remoção do 1:', percursoREM)

// REMOÇÃO DE UM NODO DE GRAU 2
arvore.remove(15)
percursoREM = []
arvore.inOrderTraversal(val => percursoREM.push(val))
console.log('Após a remoção do 15:', percursoREM)

// REMOÇÃO DA RAIZ
arvore.remove(48)
percursoREM = []
arvore.inOrderTraversal(val => percursoREM.push(val))
console.log('Após a remoção do 48:', percursoREM)

// Descobrir o novo valor da raiz
percursoREM = []
arvore.preOrderTraversal(val => percursoREM.push(val))
console.log(`O novo valor na raiz é ${percursoREM[0]}`)


// TESTES DE BUSCA
let existe13 = arvore.search(13)
let existe23 = arvore.search(23)
let existe40 = arvore.search(40)
let existe57 = arvore.search(57)

console.log({existe13, existe23, existe40, existe57})