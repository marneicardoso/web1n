// alert("Hello World");
// console.log("Buenas");

// 1. Mudando valores com .value
function mudarTexto() {
    document.getElementById('texto1').value = "Buenas";
    // console.log("Buenas");
}

// 2. Mudando valores com .innerText
function mudarTexto2() {
    // document.getElementById('texto2').innerText = "Novo texto";
    document.getElementById('texto2').innerText =
        "<ul>" +
        "<li>Item 1</li>" +
        "<li>Item 2</li>" +
        "<li>Item 3</li>" +
        "</ul>";
    // console.log("Novo texto");
}

// 3. Mudando valores com .innerHTML
function mudarTexto3() {
    document.getElementById('texto3').innerHTML =
        "<ul>" +
        "<li>Item 1</li>" +
        "<li>Item 2</li>" +
        "<li>Item 3</li>" +
        "</ul>";

    // console.log("Texto 3");
}

// 4. Mudando uma imagem ao clicar
function mudarImagem() {
    document.getElementById('img1').src = "img/002.jpg";
}

// 5. Mudando uma imagem (ao passar o mouse)
function mudarImagem2() {
    document.getElementById('img2').src = "img/001.jpg";
}

function voltarImagem2() {
    document.getElementById('img2').src = "img/002.jpg";
}

// 6. Mudando o CSS (estilo)
function mudarCorTexto() {
    const texto = document.getElementById('texto6');

    // Mudar a cor do texto
    // texto.style.color = "blue";
    texto.style.color = "#8400ff";
    texto.style.backgroundColor = "yellow";
    texto.style.padding = "10px";
    // texto.style.fontSize = "28px"
    texto.style.fontSize = "1.5rem";
    // texto.style.fontWeight = "bold";
    texto.style.fontWeight = "700";
}

// 7. Mudando o CSS (com parâmetro)
function mudarTexto7(elemento) {
    elemento.innerHTML = "Texto alterado por JavaScript";
}

// 8. Chamando uma function que chama outra
function mostrarResultado(n1, n2, resultado) {

    // Converte para inteiro
    n1 = parseInt(n1.value);
    n2 = parseInt(n2.value);

    // resultado.innerHTML = "Resultado: " + somar(n1, n2);
    resultado.innerHTML = `Resultado: ${somar(n1, n2)}`;
}

function somar(valor1, valor2) {
    return valor1 + valor2;
}

// 9. Clicar, segurar e soltar
function segurar(elemento) {
    elemento.innerHTML = "Solte!";
    elemento.style.backgroundColor = "#1ec5e5";
}

function soltar(elemento) {
    elemento.innerHTML = "Clicar!";
    elemento.style.backgroundColor = "#ff7f50";
}

// 10. Data e hora
function mostrarData() {
    document.getElementById('data').innerHTML = Date();
}

// Variável com Espoco Global
let contador = 0;

// 11. Contador de Cliques
function contarCliques() {
    // Incrementa o contador
    contador++;
    // contador = contador + 1;
    // contador += 1;

    // Mostra o resultado
    atualizarDisplay();
    // document.getElementById('display').value = contador;
}

function zerarContador() {
    contador = 0;

    // Mostra o resultado
    atualizarDisplay();
    // document.getElementById('display').value = contador;
}

function atualizarDisplay() {
    document.getElementById('display').value = contador;
}