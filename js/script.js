const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const birthInput = document.querySelector("#birth");
const cpfInput = document.querySelector("#cpf");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const sexoSelect = document.querySelector("#sexo");
const camisaSelect = document.querySelector("#camisa");
const tipoSelect = document.querySelector("#tipo");
const categoriaSelect = document.querySelector("#categoria");
const messageTextarea = document.querySelector("#message");
const confirmCheckbox = document.querySelector("#confirm");


cpfInput.addEventListener("input", () => {
    let cpf = cpfInput.value.replace(/\D/g, ""); 
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");  
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); 
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); 
    cpfInput.value = cpf;
});

phoneInput.addEventListener("input", () => {
    let phone = phoneInput.value.replace(/\D/g, ""); 
    phone = phone.replace(/^(\d{2})(\d)/g, "($1) $2"); 
    phone = phone.replace(/(\d{5})(\d{4})$/, "$1-$2"); 
    phoneInput.value = phone;
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nameInput.value === "") {
        alert("Por favor, preencha com o seu nome.");
        return;
    }

    if (birthInput.value === "") {
        alert("Por favor, preencha com a sua data de nascimento.");
        return;
    }

    let data = birthInput.value; 
    let partes = data.split("-"); 
    let dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`; 

    let cpf = cpfInput.value.replace(/\D/g, "");
    if (cpf === "") {
        alert("Por favor, preencha com o seu CPF.");
        return;
    }
    if (cpf.length !== 11) {
        alert("O CPF deve conter 11 dígitos numéricos.");
        return;
    }

    if (emailInput.value === "") {
        alert("Por favor, preencha com o seu email.");
        return;
    }

    let phone = phoneInput.value.replace(/\D/g, "");
    if (phone === "") {
        alert("Por favor, preencha com o seu número de telefone.");
        return;
    }
    if (phone.length !== 11) {
        alert("O telefone deve ter 11 dígitos (DDD + número).");
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

    if (tipoSelect.value == "") {
        alert("Por favor, escolha uma das opções.");
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

    let resumo = `Confira seus dados antes de enviar:

    Nome: ${nameInput.value}
    Data de nascimento: ${dataFormatada}
    CPF: ${cpfInput.value}
    Email: ${emailInput.value}
    Telefone: ${phoneInput.value}
    Sexo: ${sexoSelect.value}
    Tamanho da camisa: ${camisaSelect.value}
    Atleta PCD: ${tipoSelect.value}
    Categoria da corrida: ${categoriaSelect.value}
    Observações: ${messageTextarea.value}
    
    `;

    let confirmar = confirm(resumo + "\nDeseja confirmar sua inscrição?");

    if (!confirmar) {
        return; 
    }

    alert("Inscrição realizada com sucesso! Confira o seu email para mais informações.");

    form.reset();
});
