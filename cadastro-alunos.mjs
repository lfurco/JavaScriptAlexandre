// array de objetos
const alunos = []

// para saber se o aluno foi aprovado ou reprovado, com base na média
function calcularResultado(media){
    return media >= 6.0 ? "Aprovado" : "Reprovado"
}

// cadastro de aluno
function cadastrarAluno(nome, ra, idade, sexo, media){
    alunos.push({
        nome,
        ra,
        idade,
        sexo,
        media,
        resultado: calcularResultado(media)
    })
}

// selection sort genérico, sem usar Array.sort()
function selectionSort(vetor, comparar){
    for(let i = 0; i < vetor.length - 1; i++){
        let menor = i + 1

        for(let j = menor + 1; j < vetor.length; j++){
            if(comparar(vetor[menor], vetor[j])) menor = j
        }

        if(comparar(vetor[i], vetor[menor])){
            [vetor[i], vetor[menor]] = [vetor[menor], vetor[i]]
        }
    }
}

// exibição dos alunos    (o que vou cadastrar)
function exibirAlunos(lista){
    lista.forEach((a, i) => {
        console.log(`\nAluno ${i + 1}`)
        console.log(`Nome: ${a.nome}`)
        console.log(`RA: ${a.ra}`)
        console.log(`Idade: ${a.idade}`)
        console.log(`Sexo: ${a.sexo}`)
        console.log(`Média: ${a.media}`)
        console.log(`Resultado: ${a.resultado}`)
    })
}

// cadastro dos alunos    (para testar no programa, sem precisar digitar no console)
cadastrarAluno("Carlos", 105, 20, "M", 5.5)
cadastrarAluno("ana", 102, 22, "F", 8.0)
cadastrarAluno("Bruno", 110, 21, "M", 7.2)
cadastrarAluno("Julia", 108, 19, "F", 9.1)
cadastrarAluno("Diego", 101, 23, "M", 4.0)

// relatório 1: ordem crescente por nome
let porNome = [...alunos]
selectionSort(porNome, (a, b) => a.nome.toUpperCase() > b.nome.toUpperCase())
console.log("=== Relatório - Ordem Crescente por Nome ===")
exibirAlunos(porNome)

// relatório 2: ordem decrescente por RA
let porRA = [...alunos]
selectionSort(porRA, (a, b) => a.ra < b.ra)
console.log("\n=== Relatório - Ordem Decrescente por RA ===")
exibirAlunos(porRA)

// relatório 3: aprovados, ordem crescente por nome
let aprovados = alunos.filter(a => a.resultado === "Aprovado")
selectionSort(aprovados, (a, b) => a.nome.toUpperCase() > b.nome.toUpperCase())
console.log("\n=== Relatório - Aprovados em Ordem Crescente por Nome ===")
exibirAlunos(aprovados)