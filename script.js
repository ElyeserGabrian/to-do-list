// Recebendo o nome
function PegarNome() {
    let nome = document.getElementById("nome").value;
    localStorage.setItem("usuarioNome", nome);
    window.location.href = "index.html";
}

let nomeArmazenado = localStorage.getItem("usuarioNome");

if (nomeArmazenado) {
    // Exibir o nome no h1
    document.getElementById("mensagem").textContent = "To Do List - " + nomeArmazenado;
} else {
    // Redirecionar para a página de login se o nome não estiver disponível
    window.location.href = "login.html";
}