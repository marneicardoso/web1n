
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