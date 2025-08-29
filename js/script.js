const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const birthInput = document.querySelector("#birth");
const cpfInput = document.querySelector("#cpf");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const sexoSelect = document.querySelector("#sexo");
const camisaSelect = document.querySelector("#camisa");
const categoriaSelect = document.querySelector("#categoria");
const messageTextarea = document.querySelector("#message");
const confirmCheckbox = document.querySelector("#confirm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nameInput.value === "") {
        alert("Por favor, preencha o seu nome.");
        return;
    }

    if (birthInput.value === "") {
        alert("Por favor, preencha a sua data de nascimento.");
        return;
    }

    if (cpfInput.value === ""){
        alert("Por favor, preencha o seu CPF.");
        return;
    }

    if (emailInput.value === "") {
        alert("Por favor, preencha com o seu email.");
        return;
    }

    if (phoneInput.value === "") {
        alert("Por favor, preencha com o seu número de telefone.");
        return;
    }

    if (sexoSelect.value === "") {
        alert("Por favor, escolha uma das opções de sexo.");
        return;
    }

    if (camisaSelect.value === "") {
        alert("Por favor, escolha um dos tamanhos de camisa.");
        return;
    }

    if (categoriaSelect.value === "") {
        alert("Por favor, escolha uma categoria da corrida.");
        return;
    }

    if (!confirmCheckbox.checked) {
        alert("Você precisa confirmar sua inscrição.");
        return;
    }

    if (messageTextarea.value === "") {
        alert("Por favor, preencha o campo de observações.");
        return;
    }

    console.log("Nome:", nameInput.value);
    console.log("Data de nascimento:", birthInput.value);
    console.log("Email:", emailInput.value);
    console.log("Telefone:", phoneInput.value);
    console.log("Sexo:", sexoSelect.value);
    console.log("Tamanho da camisa:", camisaSelect.value);
    console.log("Categoria da corrida:", categoriaSelect.value);
    console.log("Observações:", messageTextarea.value);

    alert("Inscrição realizada com sucesso! Confira o seu email para mais informações.");

    form.reset();
});
