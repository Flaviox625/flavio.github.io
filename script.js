function redirectToLogin() {
    // Redireciona para a página de login
    window.location.href = "login.html"; // Altere para o nome do arquivo de login, se necessário
}

document.getElementById("studentCreationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos do formulário
    var laudo = document.getElementById("laudo").value;
    var matricula = document.getElementById("matricula").value;
    var alunoNome = document.getElementById("alunoNome").value;
    var responsavelNome = document.getElementById("responsavelNome").value;
    var curso = document.getElementById("curso").value;
    var responsavelNumero = document.getElementById("responsavelNumero").value;
    var responsavelEmail = document.getElementById("responsavelEmail").value;
    var bloco = document.getElementById("bloco").value;
    var turno = document.getElementById("turno").value;

    // Verifica se algum campo está vazio
    if (laudo === "" || matricula === "" || alunoNome === "" || responsavelNome === "" || curso === "" || responsavelNumero === "" || responsavelEmail === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Cria um objeto com os dados do formulário
    var formData = {
        laudo: laudo,
        matricula: matricula,
        alunoNome: alunoNome,
        responsavelNome: responsavelNome,
        curso: curso,
        responsavelNumero: responsavelNumero,
        responsavelEmail: responsavelEmail,
        bloco: bloco,
        turno: turno
    };

    // Converte o objeto para uma string JSON
    var formDataString = JSON.stringify(formData);

    // Armazena os dados no localStorage
    localStorage.setItem("formData", formDataString);

    // Limpa o formulário após o armazenamento dos dados
    document.getElementById("studentCreationForm").reset();

    // Exibe uma mensagem de confirmação para o usuário
    alert("Cadastro realizado com sucesso!");

    // Redireciona para a página de login
    redirectToLogin();
});


// Função para redirecionar para a tela de cadastro de administrador
function redirectToAdminRegistration() {
    window.location.href = 'cadastro_admin.html';
}

// Função para redirecionar para a tela de cadastro de aluno/responsável
function redirectToStudentRegistration() {
    window.location.href = 'cadastro_aluno.html';
}
