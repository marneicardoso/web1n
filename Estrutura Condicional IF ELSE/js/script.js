
// 1. Algoritmo para verificar a idade.
function verificarIdade() {
    // 1. ENTRADA
    // Declaração das variáveis e Atribuição de valores
    const idade = document.getElementById('idade').value;

    // 2. PROCESSAMENTO
    // Cálculos e Validações
    if (idade >= 18) {
        // 3. SAÍDA
        // Mostra o resultado
        document.getElementById('resultado1').innerHTML = "Maior de 18 anos";
    
    } else {
        // 3. SAÍDA
        // Mostra o resultado
        document.getElementById('resultado1').innerHTML = "Menor de 18 anos";
    }
}
        






// 2. Algoritmo para verificar se um número é Par, Ímpar ou Zero.
function verificarParImpar() {
    // 1. ENTRADA
    // Declaração das variáveis e Atribuição de valores
    const valor = document.getElementById('valor').value;

    /*
    Verifica se o valor é par, usando o operador matemático Mod, que é
    uma divisão com resto, ou seja, se o valor informado for divisível
    por 2, ele é par, senão é ímpar.
    
    Por exemplo: o valor 10 dividido por 2 é 5, e o resto é 0 (par).
    Já o valor 15 dividido por 2 é 7 (2 x 7 = 14), e o resto é 1 (ímpar).
    */

    // 2. PROCESSAMENTO
    // Cálculos e Validações
    if (valor == "") {
        document.getElementById('valor').focus();
        document.getElementById('resultado2').innerHTML = "Informe um valor";
        return; // Early return (retorno precoce)
    }

    if (valor == 0) {
        // 3. SAÍDA
        // Mostra o resultado
        document.getElementById('resultado2').innerHTML = "Zero";
    
    } else if (valor % 3 == 0) {
        // 3. SAÍDA
        // Mostra o resultado
        document.getElementById('resultado2').innerHTML = "Par";
    
    } else {
        // 3. SAÍDA
        // Mostra o resultado
        document.getElementById('resultado2').innerHTML = "Ímpar";
    }
}
        






// 3. Algoritmo para calcular o IMC.

/*
O cálculo do IMC é feito da seguinte forma:
  A altura é multiplicada pela altura (ex: 1.75 * 1.75)
  O peso é dividido pelo resultado da multiplicação da altura (85 / 3.06)
 
  IMC => 27.7

Abaixo de 17:    "Muito abaixo do peso"
Entre 17 e 18.5: "Abaixo do peso"
Entre 18.5 e 25: "Peso normal"
Entre 25 e 30:   "Acima do peso"
Entre 30 e 35:   "Obesidade 1"
Entre 35 e 40:   "Obesidade 2 (severa)"
Acima de 40:     "Obesidade 3 (mórbida)"
*/

function calcularIMC() {
    // 1. ENTRADA
    // Declaração das variáveis e Atribuição de valores
    const peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let resultado = "";

    // 2. PROCESSAMENTO
	// Converte a altura de centímetro para metro
    altura = altura / 100;

    // Calcula o IMC
    const imc = peso / (altura * altura);

    console.log(peso / (altura * altura));

    // Verifica a faixa de peso conforme o resultado do IMC
    if (imc < 17) {
        resultado = "Muito abaixo do peso";
    
    } else if (imc < 18.50) {
        resultado = "Abaixo do peso";
    
    } else if (imc < 25) {
        resultado = "Peso normal";
    
    } else if (imc < 30) {
        resultado = "Acima do peso";
    
    } else if (imc < 35) {
        resultado = "Obesidade 1";
    
    } else if (imc < 40) {
        resultado = "Obesidade 2 (severa)";
    
    } else {
        resultado = "Obesidade 3 (mórbida)";
    }

    // Concatena o resultado com o valor do IMC
    resultado += `<br>IMC: ${imc.toFixed(1)}`;

    // 3. SAÍDA
	// Mostra o resultado na tela
	document.getElementById('resultado3').innerHTML = resultado;
}