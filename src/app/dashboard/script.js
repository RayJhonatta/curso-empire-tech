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
    }

    document.getElementById('title').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('year').value = '';
}
