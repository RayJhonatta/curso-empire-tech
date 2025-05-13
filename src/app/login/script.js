function ValidarLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Por favor, preencha os campos corretamente!");
        return;
    }

    if (!email.includes("@")) {
        alert("Por favor, informe o @ no seu email!!");
        return;
    }

    if (!email.includes("gmail.com")) {
        alert("Por favor, informe o 'gmail.com' no seu email!!");
        return;
    }

    if(password.length < 8) {
        alert("A senha precisa de mais 8 caracteres!!");
        return;
    }

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    alert("Login bem-sucedido!");
    window.location.href = "../dashboard/dashboard.html";
}
