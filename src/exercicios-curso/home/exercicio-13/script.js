function ReceiveData() {
    const cep = document.getElementById("cep");
    this.validateCep(cep);

    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
    .then(response => response.json())
    .then(response => {
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = `
        <p><strong>CEP:</strong> ${response.cep}</p>
        <p><strong>Bairro:</strong> ${response.bairro}</p>
        <p><strong>Cidade:</strong> ${response.localidade}</p>
        `
    })
    .catch(error => {
        alert("An error occurred while searching for the zip code. Please check if it is correct!!");
        return;
    })
}

function validateCep(cep) {
    if(!cep) {
        alert("Cep field not found");
        return;
    }

    if(!cep.value) {
        alert("Cep field is null");
        return;
    }
}