const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const birthInput = document.querySelector("#birth");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const sexoSelect = document.querySelector("#sexo");
const camisaSelect = document.querySelector("#camisa");
const oficinaSelect = document.querySelector("#oficina");
const turnoSelect = document.querySelector("#turno");
const ticketSelect = document.querySelector("#ticket");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameInput.value === ""){
        alert("Por favor, preencha o seu nome.");
        return;
    }

    if (birthInput.value === "") {
        alert("Por favor, preencha a sua data de nascimento.");
        return;
    }

    if (emailInput.value === "") {
        alert("Por favor, preencha com o seu email.");
        return;
    }

    if (phoneInput.value === ""){
        alert("Por favor, preencha com o seu número de telefone.");
        return;
    }

    if (sexoSelect.value === ""){
        alert("Por favor, escolha uma das opções.");
        return;
    }

    if (camisaSelect.value === ""){
        alert("Por favor, escolha um dos tamanhos de camisa.");
        return;
    }

    if (oficinaSelect.value === ""){
        alert("Por favor, escolha uma das oficinas.");
        return;
    }

    if (turnoSelect.value === ""){
        alert("Por favor, escolha uma das opções de turno.");
        return;
    }

    if (ticketSelect.value === ""){
        alert("Por favor, escolha um dos tipos de ingresso.");
        return;
    }

    if (messageTextarea.value === ""){
        alert("Por favor, preencha o campo de mensagem.");
        return;
    }

    console.log("Nome:", nameInput.value);
    console.log("Data de nascimento:", birthInput.value);
    console.log("Email:", emailInput.value);
    console.log("Telefone:", phoneInput.value);
    console.log("Sexo:", sexoSelect.value);
    console.log("Tamanho da camisa:", camisaSelect.value);
    console.log("Oficina:", oficinaSelect.value);
    console.log("Turno:", turnoSelect.value);
    console.log("Tipo de ingresso:", ticketSelect.value);
    console.log("Mensagem:", messageTextarea.value);

    alert("Inscrição realizada com sucesso! Confira o seu email para mais informações.");

    form.reset();
});
