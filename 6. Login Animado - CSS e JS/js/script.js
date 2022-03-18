const btnAtivar = document.querySelector('#btnAtivar');
const btnLogar = document.querySelector('#btnLogar');
const modal = document.querySelector('#modal');
const loader = document.querySelector('#load');
const notificacao = document.querySelector('#notificacao');
let isLoading = false;

// Forma tradicional
/*function animarModal() {
    modal.classList.toggle('animar');
}*/

// Forma avançada 1 (com Função Anônima)
/*btnAtivar.addEventListener('click', function() {
    modal.classList.toggle('animar');
});*/

// Forma avançada 2 (com Arrow Function)
btnAtivar.addEventListener('click', () => {
    modal.classList.toggle('animar');
    document.querySelector('#email').focus();
    notificacao.style.display = 'none';
});

btnLogar.addEventListener('click', () => {
    console.log("1. isLoad: " + isLoading); // << Notificação

    if (!isLoading) {
        console.log("2. IF");

        isLoading = true;
        console.log("3. isLoad: " + isLoading);

        loader.style.display = "block";
        console.log("4. loader.display: block");

        loader.classList.toggle('loader');
        console.log("5. toggle('loader')");

        notificacao.style.display = "none";

        // Espera 2 segundos
        setTimeout(() => {
            console.log("6. setTimeout");

            loader.style.display = "none";
            console.log("7. loader.display: none");

            loader.classList.toggle('loader');
            console.log("8. toggle('loader')");

            isLoading = false;
            console.log("9. isLoad: " + isLoading);

            efetuarLogin();

        }, 2000); // tempo em mili (1 segundo == 1000 mili)
    }
});

// Simulando os dados armazenados no Banco de Dados
const emailDB = "prof.marneicardoso@gmail.com";
const senhaDB = "12345";

function efetuarLogin() {
    // Guarda os valores informados pelo usuário
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;

    notificacao.style.display = "block";

    if (email == "") {
        notificacao.style.color = "#ff4639";
        notificacao.innerHTML = "Preencha o campo E-mail";
        document.querySelector('#email').focus();
        return; // Early return (retorno precoce)
    }

    if (senha == "") {
        notificacao.style.color = "#ff4639";
        notificacao.innerHTML = "Preencha o campo Senha";
        document.querySelector('#senha').focus();
        return;
    }

    // Compara com os dados do DB
    if (email == emailDB && senha == senhaDB) {
        notificacao.style.color = "#49b401";
        notificacao.innerHTML = "Login efetuado com sucesso!";
    
    } else{
        notificacao.style.color = "#ff4639";
        notificacao.innerHTML = "E-mail ou Senha inválidos";
    }
}