window.onload = () => {
    loadProducts();
}
  
    const host = 'http://localhost:3000';

function loadProducts() {
    fetch(`${host}/products`)
        .then(response => response.json())
        .then(response => {
            setProductsList(response);
        });
}

function setProductsList(products) {
    const list = document.getElementById("products-list").querySelector('tbody');
    list.innerHTML = '';
        for (const product of products) {
            const row = document.createElement('tr');
            for (const key of Object.keys(product)) {
                if (key !== 'id') {
                    populateRow(product, key, row);
                }
            }
           list.appendChild(row);
        } 
}

function populateRow(product, key, row) {
    const cell = document.createElement('td');
        cell.classList.add('table-data');
        cell.innerText = product[key]; 
        row.appendChild(cell);
}

function create() {
        const codeField = document.getElementById('code');
        const nameField = document.getElementById('name');
        const priceField = document.getElementById('price');
        const amountField = document.getElementById('amount');
        fetch(`${host}/products`, {
            method: "POST",
            body: JSON.stringify(
                {
                    code: codeField.value,
                    name: nameField.value,
                    price: priceField.value,
                    amount: amountField.value,
                }
            )
        });
        loadProducts();
}