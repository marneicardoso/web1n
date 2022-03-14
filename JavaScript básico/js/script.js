
// Exercício 1
function somar() {
	
	// Declaração das variáveis
	const valor1 = document.getElementById('valor1').value;
	const valor2 = document.getElementById('valor2').value;
	
	// Faz a soma dos valores
	const resultado = parseInt(valor1) + parseInt(valor2);
	
	// Mostra o resultado
	document.getElementById('resultado1').value = resultado;
}










// Exercício 2
function calcularMedia() {
	// 1. Declaração das variáveis
	/*const nota1 = document.getElementById('nota1').value;
	const nota2 = document.getElementById('nota2').value;
	const nota3 = document.getElementById('nota3').value;*/

	// Recebe os valores informados pelo usuário
	const nota1 = parseInt(prompt("Informe a nota 1")); // converte para Inteiro
	const nota2 = prompt("Informe a nota 2");
	const nota3 = prompt("Informe a nota 3");
	
	// Calcula a média das notas
	const resultado = (nota1 + parseInt(nota2) + parseInt(nota3)) / 3;
	
	// Mostra o resultado (com uma casa decimal)
	document.getElementById('resultado2').value = resultado.toFixed(1);
}










// Exercício 3
function calcularDesconto() {
	// Declaração das variáveis
	const valorProduto = parseFloat(document.getElementById('valorProduto').value);
	const desconto = 10;
	
	// Calcula o desconto
	const novoValorProduto = valorProduto - valorProduto / 100 * desconto;
	
	// Mostra o resultado (com duas casas decimais)
	document.getElementById('resultado3').value = novoValorProduto.toFixed(2);
}










// Exercício 4
function calcularDesconto2() {
	// Declaração das variáveis
	const valorProduto = parseFloat(document.getElementById('valorProduto2').value);
	const percentualDesconto = parseFloat(document.getElementById('percentualDesconto').value);
	
	// Calcula o desconto
	const novoValorProduto = valorProduto - valorProduto / 100 * percentualDesconto;
	
	// Mostra o resultado
	document.getElementById('resultado4').value = novoValorProduto.toFixed(2);
}










// Exercício 5
function inverterValores() {
	// Declaração das variáveis
	let valorA = document.getElementById('valorA').value;
	let valorB = document.getElementById('valorB').value;
	let aux;
	
	// Inverte os valores
	aux = valorA;
	valorA = valorB;
	valorB = aux;
	
	// Mostra o resultado
	document.getElementById('valorA').value = valorA;
	document.getElementById('valorB').value = valorB;
}










// Exercício 6
function calcularVendaPicoles() {
	// Declaração das variáveis
	const valorFruta = 2.5;
	const valorChocolate = 3.5;
	const valorRecheado = 4.5;
	
	// Recebe as quantidades informadas
	const quantidadeFruta = document.getElementById('quantidadeFruta').value;
	const quantidadeChocolate = document.getElementById('quantidadeChocolate').value;
	const quantidadeRecheado = document.getElementById('quantidadeRecheado').value;
	
	// Calcula as vendas
	const totalFruta = valorFruta * quantidadeFruta;
	const totalChocolate = valorChocolate * quantidadeChocolate;
	const totalRecheado = valorRecheado * quantidadeRecheado;
	const totalVendas = totalFruta + totalChocolate + totalRecheado;
	
	// Mostra o resultado
	document.getElementById('resultadoFruta').value = totalFruta.toFixed(2);
	document.getElementById('resultadoChocolate').value = totalChocolate.toFixed(2);
	document.getElementById('resultadoRecheado').value = totalRecheado.toFixed(2);
	document.getElementById('resultado6').value = totalVendas.toFixed(2);
}










// Exercício 7
function calcularParcelas() {
	// Declaração das variáveis
	const totalParcelas = document.getElementById('totalParcelas').value;
	const quantidadePagas = document.getElementById('quantidadePagas').value;
	const valorParcela = document.getElementById('valorParcela').value;
	
	// Calcula o saldo devedor
	const parcelasRestantes = totalParcelas - quantidadePagas;
	const saldoDevedor = parcelasRestantes * valorParcela;
	
	// Mostra o saldo devedor
	document.getElementById('saldoDevedor').innerHTML = `Saldo devedor: R$ ${saldoDevedor.toFixed(2)}`;
	document.getElementById('parcelasRestantes').innerHTML = `Parcelas restantes: ${parcelasRestantes}`;
}
