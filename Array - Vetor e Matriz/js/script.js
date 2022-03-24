
// Array - Vetor e Matriz

const cores = []; // Array vazio

// Atribui um valor na primeira posição (índice 0)
cores[0] = "azul";
console.log(cores);

cores.push("verde"); // Cria uma nova posição no final do Array
console.log(cores);

cores[0] = "roxo";
console.log(cores);

cores[5] = "vermelho";
console.log(cores);

cores.push("laranja");
console.log(cores);

// Tamanho do Array
console.log(cores.length);

// Criando o Array com valores
const frutas = ["maçã", "banana", "mamão"];
console.log(frutas);

frutas.push("morango");
console.log(frutas);

const funcionarios = [
    [1579, "Maria", 52, 65.3],
    [1775, "Pedro", 43, 92.25]
];

console.log(funcionarios[1][0]);

// Arrays e Objetos em JavaScript

// Array
const carrosA = [
    "Palio",
    "Civic",
    "Mustang",
];

// Objeto
const carrosO = {
    "Fiat": "Palio",
    "Honda": "Civic",
    "Ford": "Mustang",
};

// Buscando os valores no Array
console.log(carrosA);
console.log(carrosO);

console.log(carrosA[2]);
console.log(carrosO["Ford"]);


// Preencher um Array com números aleatórios
function preencherNumerosAleatorios() {
    // Guarda o valor informado pelo usuário
    const valorInformado = document.querySelector('#valorInformado').value;
    console.log(valorInformado)

    // Cria o Array vazio
    const numeros = [];

    // Preenche o Array com números aleatórios
    for (let i = 0; i < valorInformado; i++) {
        // Gera números aleatórios (random)
        const numeroAleatorio = parseInt(Math.random() * 100);
        numeros.push(numeroAleatorio);
    }

    // Mostra o resultado parcial
    console.log(numeros);

    // Altera os valores do Array com novos números aleatórios
    for (let i = 0; i < numeros.length; i++) {
        // Gera números aleatórios (random)
        const numeroAleatorio = parseInt(Math.random() * 100);
        numeros[i] = numeroAleatorio;
    }

    // Mostra o resultado final
    console.log(numeros);
}









// Escreva um algoritmo para cadastrar os alunos de uma turma. Informe a quantidade de alunos da turma, depois informe a matrícula, o nome e a idade de cada aluno. Mostre o resultado.
function cadastrarAlunos() {
    // Guarda a quantidade de alunos informada
    const numeroAlunos = document.querySelector('#numeroAlunos').value;
    let resultado = "";
    const turma = [];

    // Cadastra os alunos
    for (let i = 0; i < numeroAlunos; i++) {
        const nome = prompt(`Informe o Nome do aluno (${i +1})`);
        const idade = prompt(`Informe a Idade do aluno (${i +1})`);
        const matricula = prompt(`Informe a Matrícula do aluno (${i +1})`);

        // Preenche os dados do aluno na turma
        turma.push(
            {
                'nome': nome,
                'idade': idade,
                'matricula': matricula
            }
        );
    }

    // Mostra os alunos cadastrados
    for (let i = 0; i < turma.length; i++) {
        resultado +=
            `<h4>
                Matrícula: ${turma[i]['matricula']}<br>
                Nome: ${turma[i]['nome']}<br>
                Idade: ${turma[i]['idade']}
            </h4>`;
    }

    document.querySelector('#turma').innerHTML = resultado;
}