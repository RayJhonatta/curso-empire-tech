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
    
}