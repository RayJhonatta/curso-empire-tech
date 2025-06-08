function BackToLoginScreen() {
    Swal.fire({
        title: "Tem certeza?",
        text: "Você deseja retornar a tela de login?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sim",
        cancelButtonText: "Não"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Ação realizada com sucesso!!",
                icon: 'success',
                confirmButtonText: 'Ok',
                willClose: () => {
                    window.location.href = "../login/index.html";
                }
            });
        } else {
            Swal.fire ({
                title: "Ação cancelada!!",
                icon: "error",
                confirmButtonText: 'Ok'
            });
        } 
    });
}

// ========== LocalStorage ========== //

function AddDataToTheTable() {
    const title = document.getElementById("title").value;
    const gender = document.getElementById("gender").value;
    const year = document.getElementById("year").value;

    if(!title || !gender || !year) {
        Swal.fire ({
            text: "Por favor, preencha todos os campos!!",
            icon: "warning",
            confirmButtonText: "Ok"
        });
        return;
    }

    let table = document.querySelector(".tbody-table");
    let newRow = table.insertRow();

    let titleCell = newRow.insertCell();
    titleCell.classList.add("title-data");
    titleCell.textContent = title;

    let genderCell = newRow.insertCell();
    genderCell.classList.add("data-table");
    genderCell.textContent = gender;

    let yearCell = newRow.insertCell();
    yearCell.classList.add("data-table");
    yearCell.textContent = year;

    let actionsCell = newRow.insertCell();
    actionsCell.classList.add("data-table");
    actionsCell.innerHTML = `
        <a href="#" class="link-edit-table">
            <i class="material-icons">edit</i>
                Editar</a> 
        <a href="#" class="link-delete-table">
            <i class="material-icons">delete</i>
                Deletar</a>`;
}

// ==========  ======== //