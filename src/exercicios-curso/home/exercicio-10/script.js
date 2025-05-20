function LoginAllowed() {
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    if(!name || !password) {
        Swal.fire({
            title: 'Por favor, preencha os campos obrigatórios',
            icon: 'warning',
            confirmButtonText: 'Ok'
        });
        return;
    }
    
    if(password.length < 8) {
        Swal.fire({
            title: 'Por favor, a senha precisa de mais de 8 caracteres',
            icon: 'warning',
            confirmButtonText: 'Ok'
        });
        return;
    }

    document.getElementById("name").value = "";
    document.getElementById("password").value = "";

    Swal.fire({
        title: 'Login realizado com sucesso!!',
        icon: 'success',
        confirmButtonText: 'Ok',
        willClose: () => {
            window.location.href = '../exercicio-9/home/index.html';
        }
    });
}