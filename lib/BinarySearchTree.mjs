
/*
  ESTRUTURA DE DADOS ÁRVORE BINÁRIA DE BUSCA
  - Árvore: estrutura de dados não-linear e hierárquica.
  - Árvore binária: cada nodo pode ter, no máximo, dois filhos.
  - Árvore binária de busca: organiza os valores para facilitar a busca.
*/

//Classe que representa a unidade de informação da árvore binária de busca
class Node {
  constructor(val) {
    this.data = val; // armazena a informação da árvore binária de busca
    this.left = null; // ponteiro para a subárvore esquerda
    this.right = null; // ponteiro para a subárvore direita
  }
}

//Classe que implementa a árvore binária de busca
export default class BinarySearchTree {
  #root; //raiz da árvore

  constructor() {
    this.#root = null;
  }

  //método para efetuar inserção ABB
  insert(val) {
    const inserted = new Node(val);

    //1º caso: árvore vazia
    //o primeiro nodo fica sendo a raiz da árvore
    if (this.#root === null) {
      this.#root = inserted;
    }
    //2º caso: inserção recursiva, percorrendo a árvore recursivamente
    else {
      this.#insertNode(inserted, this.#root);
    }
  }

  //método PRIVADO que insere um novo nodo na árvore
  #insertNode(inserted, root) {
    //1º caso: valor a ser inserido é MENOR que o valor da raiz
    //inserção ocorre à ESQUERDA da raiz
    if (inserted.data < root.data) {
      //se a posição à esquerda da raiz está desocupada, faz a inserção
      if (root.left === null) {
        root.left = inserted;
      }
      //senão, reinicia o processo de inserção recursivamente
      //com a subárvore esquerda como raiz
      else {
        this.#insertNode(inserted, root.left);
      }
    }

    //2º caso: valor a ser inserido é MAIOR que o valor da raiz
    //inserção ocorre à DIREITA da raiz
    else if (inserted.data > root.data) {
      //se a posição à direita da raiz está desocupada, faz a inserção
      if (root.right === null) {
        root.right = inserted;
      }
      //senão, reinicia o processo de inserção recursivamente
      //com a subárvore direita como raiz
      else {
        this.#insertNode(inserted, root.right);
      }
    }

    //3º caso: o valor a ser inserido é IGUAL ao valor da raiz
    //não se faz nada, já que a ABB não deve ter valores repetidos
    else {
      return;
    }
  }

  /*
    PERCURSOS

    Método que executa o percurso em-ordem (in-order traversal) na árvore

    Ordem do percurso:
        1º ~> percorre recursivamente em-ordem a subárvore esquerda
        2º ~> visita a raiz
        3º ~> percorre recursivamente em-ordem a subárvore direita
  */
  inOrderTraversal(fnCallback, root = this.#root) {
    if (root !== null) {
      this.inOrderTraversal(fnCallback, root.left); //1º
      fnCallback(root.data); //2º
      this.inOrderTraversal(fnCallback, root.right); //3º
    }
  }

  /*
    Método que executa o percurso pré-ordem (pre-order traversal) na árvore

    Ordem do percurso:
        1º ~> visita a raiz
        2º ~> percorre recursivamente a subárvore esquerda
        3º ~> percorre recursivamente a subárvore direita
  */
  preOrderTraversal(fnCallback, root = this.#root) {
    if (root !== null) {
      fnCallback(root.data); //1º
      this.preOrderTraversal(fnCallback, root.left); //2º
      this.preOrderTraversal(fnCallback, root.right); //3º
    }
  }

  /*
    Método que executa o percurso pós-ordem (post-order traversal) na árvore

    Ordem do percurso:
        1º ~> percorre recursivamente a subárvore esquerda
        2º ~> percorre recursivamente a subárvore direita
        3º ~> visita a raiz
  */
  postOrderTraversal(fnCallback, root = this.#root) {
    if (root !== null) {
      this.postOrderTraversal(fnCallback, root.left); //1º
      this.postOrderTraversal(fnCallback, root.right); //2º
      fnCallback(root.data); //3º
    }
  }

  /* Método PRIVADO que retorna o nodo de MENOR valor da árvore */
  #minNode(root) {
    //A partir da raiz, percorre à esquerda enquanto possível
    while (root !== null && root.left !== null) {
      root = root.left;
    }

    return root; // retorna o nodo de menor valor
  }

  /* Método PRIVADO que retorna o nodo de MAIOR valor da árvore */
  #maxNode(root) {
    //A partir da raiz, percorre à direita enquanto possível
    while (root !== null && root.right !== null) {
      root = root.right;
    }

    return root; // retorna o nodo de maior valor
  }

  /* Método PÚBLICO para excluir um nodo da árvore */
  remove(val) {
    this.#root = this.#removeNode(this.#root, val);
    //atualiza a raiz da árvore, caso o nodo removido seja a raiz
  }

  /* Método PRIVADO que remove um nodo da árvore */
  #removeNode(root, val) {
    //1º caso: árvore vazia
    if (root === null) {
      return null;
    }

    //2º caso: valor a ser removido é MENOR que o valor da raiz
    //continua recursivamente pela subárvore esquerda
    if (val < root.data) {
      root.left = this.#removeNode(root.left, val);
      return root;
    }

    //3º caso: valor a ser removido é MAIOR que o valor da raiz
    //continua recursivamente pela subárvore direita
    if (val > root.data) {
      root.right = this.#removeNode(root.right, val);
      return root;
    }

    /*
      4º caso: valor a ser removido é IGUAL ao valor da raiz
      O nodo foi encontrado; é necessário verificar o GRAU
      para aplicar o algoritmo de exclusão apropriado
    */

    //4.1º caso: nodo a ser removido é uma FOLHA (grau 0)
    if (root.left === null && root.right === null) {
      root = null; //remove o nodo da árvore
      return root;
    }

    //4.2º caso: nodo de grau 1, com subárvore à esquerda
    if (root.left !== null && root.right === null) {
      root = root.left; //substitui pelo filho esquerdo
      return root;
    }

    //4.3º caso: nodo de grau 1, com subárvore à direita
    if (root.left === null && root.right !== null) {
      root = root.right; //substitui pelo filho direito
      return root;
    }

    //4.4º caso: nodo de grau 2 (possui dois filhos)
    /*
      Precisamos encontrar:
      1) O nodo de MAIOR valor da subárvore ESQUERDA; ou
      2) O nodo de MENOR valor da subárvore DIREITA
    */

    //Nodo de menor valor da subárvore direita
    const newRoot = this.#minNode(root.right);

    //Substitui o valor do nodo pelo menor valor da subárvore direita
    root.data = newRoot.data;

    //Exclui o nodo que teve seu valor copiado
    root.right = this.#removeNode(root.right, newRoot.data);

    return root;
  }

  /*
    Método PÚBLICO que busca por um valor dentro da árvore

    Retorna:
    - true, caso o valor exista; ou
    - false, caso o valor não exista
  */
  search(val) {
    const node = this.#searchNode(this.#root, val);
    return node !== null;
  }

  /* Método PRIVADO que busca o nodo que contém o valor especificado */
  #searchNode(root, val) {
    //1º caso: árvore vazia ou valor não encontrado
    if (root === null) {
      return null;
    }

    //2º caso: valor a ser buscado é MENOR que o valor da raiz
    //continua a busca pela subárvore esquerda
    if (val < root.data) {
      return this.#searchNode(root.left, val);
    }

    //3º caso: valor a ser buscado é MAIOR que o valor da raiz
    //continua a busca pela subárvore direita
    if (val > root.data) {
      return this.#searchNode(root.right, val);
    }

    //4º caso: valor encontrado (IGUAL ao valor da raiz)
    //o valor procurado foi encontrado, retorna o nodo
    return root;
  }
}
