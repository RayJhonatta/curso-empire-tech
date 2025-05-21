function ValidarLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        Swal.fire ({
            title: "Por favor, preencha os campos corretamente!!",
            icon: 'warning',
            confirmButtonText: 'Ok'
        });
        return;
    }

    if (!email.includes("@")) {
        Swal.fire ({
            title: "Por favor, informe o @ no seu email!!",
            icon: 'warning',
            confirmButtonText: 'Ok'
        });
        return;
    }

    if (!email.includes("gmail.com")) {
        Swal.fire ({
            title: "Por favor, informe o 'gmail.com' no seu email!!",
            icon: 'warning',
            confirmButtonText: 'Ok'
        });
        return;
    }

    if(password.length < 8) {
        Swal.fire ({
            title: "A senha precisa de mais 8 caracteres!!",
            icon: 'warning',
            confirmButtonText: 'Ok'
        });
        return;
    }

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    Swal.fire ({
        title: "Login bem-sucedido!",
        icon: 'success',
        confirmButtonText: 'Ok',
        willClose: () => {
            window.location.href = "../dashboard/dashboard.html";
        } 
    });
}
