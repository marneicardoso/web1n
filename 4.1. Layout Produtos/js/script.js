
/*
Métodos:
 - Os métodos em JavaScript devem iniciar
 com a palavra reservada "function", seguido de um nome,
 dos parâmetros (entre parênteses) e a abertura do bloco
 com as chaves.

 function nomeDaFunction() {
    código
 }
*/

/*
Padrão de nomenclatura de métodos (function)

 - Deve iniciar com letra minúscula
 - O nome deve iniciar com um verbo no
    infinitivo (verbo sem conjugação)
 - Seguido de um substantivo ou adjetivo
 - Este Padrão é chamado de lowerCamelCase
 Ex:
*/

function mudarCorBotao(btnComprar) {
    btnComprar.classList.replace('btn-outline-light', 'btn-success');
}

function voltarCorBotao(btnComprar) {
    btnComprar.classList.replace('btn-success', 'btn-outline-light');
}
