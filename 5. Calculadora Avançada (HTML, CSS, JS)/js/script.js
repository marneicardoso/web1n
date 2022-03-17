
// Variáveis com escopo Global
let numero1 = 0;
let numero2 = 0;
let operador = "";

function pegarValor(valor) {
    somTecla();

    // Verifica de o operador tem valor
    if (operador == "") {
        numero1 = numero1 + valor;
        // numero1 += valor; // o mesmo que acima

        // Atualiza o display
        atualizarDisplay(numero1);
        console.log("num1");
    
    } else {
        numero2 = numero2 + valor;

        // Atualiza o display
        atualizarDisplay(numero2);
        console.log("num2");
    }
}

function pegarOperador(sinal) {
    somTecla();

    console.log("operador");

    // Verifica se o primeiro valor foi informado
    if (numero1 != "") {

        // verifica se o segundo valor foi informado
        if (numero2 == "") {
            operador = sinal;
            atualizarDisplay(numero1 + operador);
        
        } else {
            // Faz o cálculo
            calcular();
        }
    }
}

function calcular() {
    let resultado = "";

    // Verifica o Sinal informado
    if (operador == '+') {
        resultado = numero1 + numero2;
    }

    resetar();
    atualizarDisplay(resultado);
}

function verificarIgual() {
    somTecla();

    // Verifica se TODOS os campos foram preenchidos
    if (numero1 != "" && numero2 != "" && operador != "") {
        calcular();
    }
}

function somTecla() {
    const blip = document.getElementById('blip');

    blip.volume = 0.5;
    blip.play();
}

function resetar() {
    somTecla();
    numero1 = 0;
    numero2 = 0;
    operador = "";
    atualizarDisplay(0);
}

function atualizarDisplay(valor) {
    document.getElementById('display').innerHTML = valor;
}