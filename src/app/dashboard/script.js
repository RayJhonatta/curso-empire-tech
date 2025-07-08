window.onload = () =>  {
    loadMovies();
}

const host = "http://localhost:3002";

function loadMovies() {
    fetch(`${host}/movies`)
    .then(response => response.json()) 
    .then(response => {
        AddDataToTheTable(response);
    });
}

function AddDataToTheTable(movies) {
    let table = document.querySelector(".tbody-table");
    table.innerHTML = '';

    movies.forEach((movie) => {
        let newRow = table.insertRow();

        let titleCell = newRow.insertCell();
        titleCell.classList.add("title-data");
        titleCell.textContent = movie.title;

        let genderCell = newRow.insertCell();
        genderCell.classList.add("data-table");
        genderCell.textContent = movie.gender;

        let yearCell = newRow.insertCell();
        yearCell.classList.add("data-table");
        yearCell.textContent = movie.year;

        let actionsCell = newRow.insertCell();
        actionsCell.classList.add("data-table");
        actionsCell.innerHTML = `
            <a href="#" class="link-edit-table" data-id="${movie.id}">
                <i class="material-icons">edit</i>
                Editar
            </a> 
            <a href="#" class="link-delete-table" data-id="${movie.id}">
                <i class="material-icons">delete</i>
                Deletar
            </a>`;
    });
        document.querySelectorAll('.link-edit-table').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const id = link.getAttribute('data-id');
                editMovies(id);
            });
        });
        fetch(`${host}/movies/${id}`)

        document.getElementById('title').value = movie.title;
        document.getElementById("gender").value = movie.gender;
        document.getElementById("year").value = movie.year;

}

function createMovies() {
    let titleField = document.getElementById('title').value;
    let genderField = document.getElementById('gender').value;
    let yearField = document.getElementById('year').value;

    if(!titleField || !genderField || !yearField) {
        Swal.fire ({
            text: "Por favor, preencha todos os campos!!",
            icon: "warning",
            confirmButtonText: "Ok"
        });
        return;
    }

    const movies = {
        title: titleField,
        gender: genderField,
        year: yearField
    };

    fetch(`${host}/movies`, {
        method: 'POST',
        body: JSON.stringify(movies),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if(response.ok) {
            loadMovies();
        }
    })
    .catch(error => {
        console.log('Error', error);
    });
}

function updateMovies(id) {
    Swal.fire({ 
        title: "Tem certeza?",
        text: "Você deseja atualizar os dados do filme?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sim",
        cancelButtonText: "Não"
    }).then(result => {
        if (result.isConfirmed) {
            let titleField = document.getElementById('title').value;
            let genderField = document.getElementById('gender').value;
            let yearField = document.getElementById('year').value;

        const movies = {
            title: titleField,
            gender: genderField,
            year: yearField
        };

        fetch(`${host}/movies${id}`, {
            method: 'PUT',
            body: JSON.stringify(movies),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.ok) {
                loadMovies();
            }
        })
        .catch(error => {
            console.log('Error', error);
        });
            }
        })
} 

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