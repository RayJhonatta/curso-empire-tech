window.onload = () => {
    loadClients();
}

    const host = 'http://localhost:3001';

function loadClients() {
    fetch(`${host}/clients`)
        .then(response => response.json())
        .then(response => {
            setClientsList(response);
        });
}

function setClientsList(clients) {
    const list = document.getElementById("clients-list").querySelector('tbody');
    list.innerHTML = "";
    clients.forEach((clients) => {
        let row = list.insertRow();

        const cellId = row.insertCell();
        cellId.textContent = clients.id;

        const cellName = row.insertCell();
        cellName.textContent = clients.name;

       const cellResponsible = row.insertCell();
        cellResponsible.textContent = clients.responsible;

        const cellEmail = row.insertCell();
        cellEmail.textContent = clients.email;

        const cellStatus = row.insertCell();
        cellStatus.textContent = clients.status;

        const cellActions = row.insertCell();
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => fillForm(clients);
        cellActions.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteClient(clients.id);
        cellActions.appendChild(deleteButton);
    });
}

function createClient() {
    let idField = document.getElementById('id').value;
    let nameField = document.getElementById('name').value;
    let responsibleField = document.getElementById('responsible').value;
    let emailField = document.getElementById('email').value;
    let statusField = document.getElementById('status').value;

    const clients = {
        id: idField,
        name: nameField,
        responsible: responsibleField,
        email: emailField,
        status: statusField
    };

    fetch(`${host}/clients`, {
        method: "POST",
        body: JSON.stringify(clients),
        headers: {
            'Content-Type': 'application/json'
        }
    }) 
    .then(response => {
        if (response.ok) {
            loadClients();
            clearForm();
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function updateClients() {
    let idField = document.getElementById('id').value;
    let nameField = document.getElementById('name').value;
    let responsibleField = document.getElementById('responsible').value;
    let emailField = document.getElementById('email').value;
    let statusField = document.getElementById('status').value;

    const clients = {
        id: idField,
        name: nameField,
        responsible: responsibleField,
        email: emailField,
        status: statusField
    };

    fetch(`${host}/clients/${idField}`, {
        method: "PUT",
        body: JSON.stringify(clients),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            loadClients();
            clearForm();
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
    clearForm();
}

function deleteClient(id) {
    if (!confirm("Tem certeza que deseja excluir este cliente?")) return;

    fetch(`${host}/clients/${id}`, {
        method: "DELETE"
    })
    .then(response => {
        if (response.ok) {
            loadClients();
            clearForm();
        }
    })
    .catch(error => {
        console.error('Erro ao deletar:', error);
    });
}

function fillForm(clients) {
    document.getElementById('id').value = clients.id;
    document.getElementById('name').value = clients.name;
    document.getElementById('responsible').value = clients.responsible;
    document.getElementById('email').value = clients.email;
    document.getElementById('status').value = clients.status;
}

function clearForm() {
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('responsible').value = '';
    document.getElementById('email').value = '';
    document.getElementById('status').value = '';
}