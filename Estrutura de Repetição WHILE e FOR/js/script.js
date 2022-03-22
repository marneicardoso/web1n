
// 1. Enquanto o valor for menor que 5, mostre o valor na tela.
function contadorWhile1() {
    // Cria o contador fora do bloco while
    let contador = 1;

    // Enquanto o valor do contador for menor que 5
    while (contador <= 5) {
        document.querySelector('#contadorWhile1').innerHTML += `<br>${contador}`;

        // Incrementa o contador (dentro do bloco)
        contador++;
        // contador += 1;
        // contador = contador + 1;
    }
}





// 2. Receba um valor e enquanto o contador for menor que o valor informado, mostre o contador na tela.
function contadorWhile2() {
    // Cria o contador (fora do while)
    let contador = 1;

    // Guarda o número informado pelo usuário
    const numeroInformado = document.querySelector('#numeroInformado').value;

    // Enquanto o contador for menor que o número informado
    while (contador <= numeroInformado) {
        document.querySelector('#contadorWhile2').innerHTML += `<br>${contador}`;

        // Incrementar o contador (dentro do bloco)
        contador++;
    }
}

// Extra: Usuário informa um valor enquanto não for 0 (zero)
// Abra o console e difite o nome do método: informarValor()
function informarValor() {
    let resultado = 0;
    let valor = null;

    while (valor != 0) {
        // Guarda o valor informado pelo usuário
        valor = parseInt(prompt("Informe um valor"));

        resultado += valor;
        // resultado = resultado + valor;
    }

    alert(resultado);
}

// 3. Enquanto o valor for menor que 5, mostre o valor na tela.
function contadorFor1() {
    
    for (let contador = 1; contador <= 5; contador++) {
        // Mostra o valor na tela
        document.querySelector('#contadorFor1').innerHTML += `<br>${contador}`;
    }
}




// 4. Receba um valor e enquanto o contador for menor que o valor informado, mostre o contador na tela, apenas se for ímpar.
function contadorFor2() {
    const valorInformado = document.querySelector('#valorInformado').value;

    for (let contador = 1; contador <= valorInformado; contador++) {
        // Se o valor for ímpar
        if (contador % 2 != 0) {
            document.querySelector('#resultado').innerHTML += `<br>${contador}`;
        }
    }
}