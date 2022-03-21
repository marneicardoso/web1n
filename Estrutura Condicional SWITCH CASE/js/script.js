
function mostrarValor() {
    const valorInformado = parseInt(document.getElementById('valorInformado').value);
    let resultado = "";

    switch (valorInformado) {
        case 0:
            resultado = "Zero";
            break;
        case 1:
            resultado = "Um";
            break;
        case 2:
            resultado = "Dois";
            break;
        case 3:
            resultado = "Três";
            break;
        case 4:
            resultado = "Quatro";
            break;
        case 5:
            resultado = "Cinco";
            break;
        default:
            resultado = "Informe um valor entre 0 e 5";
    }

    /*if (valorInformado == 0) {
        resultado = "Zero";
    } else if (valorInformado == 1) {
        resultado = "Um";
    } else if (valorInformado == 2) {
        resultado = "Dois";
    } else if (valorInformado == 3) {
        resultado = "Três";
    } else if (valorInformado == 4) {
        resultado = "Quatro";
    } else if (valorInformado == 5) {
        resultado = "Cinco";
    } else {
        resultado = "Informe um valor entre 0 e 5";
    }*/

    document.getElementById('resultado').innerHTML = resultado;
}

function mostrarOpcao() {
    let opcaoEscolhida = document.getElementById('opcaoEscolhida').value;
    let resultado = "";

    opcaoEscolhida = opcaoEscolhida.toLowerCase();
    console.log(opcaoEscolhida);

    switch (opcaoEscolhida) {
        case "c":
        // case "C":
            resultado = "Cadastrar/Inserir";
            break;
        case "r":
        // case "R":
            resultado = "Buscar/Ler";
            break;
        case "u":
        // case "U":
            resultado = "Editar/Atualizar";
            break;
        case "d":
        // case "D":
            resultado = "Excluir/Apagar";
            break;
        default:
            resultado = "Informe uma das opções do menu";
    }

    document.getElementById('resultado2').innerHTML = resultado;
}