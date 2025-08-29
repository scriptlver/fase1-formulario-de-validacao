const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

//evita que a página dê refresh no form.
form.addEventListener("submit", (event) => {
    event.preventDefault();

    //valida nome
    if(nameInput.value ===""){
        alert("Por favor, preencha o seu nome");
        return;
    }
    //valida email
    if(emailInput.value ===""){
        alert("Por favor, preencha o seu e-mail");
        return;
    }
    //valida senha
    if(!validatePassword(passwordInput.value, 8)){
        alert("A senha precisa ter no mínimo 8 dígitos");
        return;
    }
    //valida situação
    if(jobSelect.value ===""){
        alert("Por favor, escolha uma situação de trabalho");
        return;
    }
    //valida mensagem
    if(messageTextarea.value ===""){
        alert("Por favor, preencha a mensagem");
        return;
    }
    form.submit();
})

//Função que valida senha
function validatePassword(password, minDigit) {
    if (password.length >= minDigit) {
        return true

    }
    return false
};