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

//Adicionar task ao clicar no botao

 function adicionaTask(){
    let novatask = document.getElementById('input-new-task');
    let task = novatask.value
    

    let ul = document.getElementById('to-do-list')
    //criacao da div para a li e os botoes
    let div = document.createElement('div')
    // colocando uma classe para a div
    div.classList.add("li-task")
    // criando os botoes
    let btn_excluir = document.createElement('button')
    let lixo = document.createElement('i')
    lixo.className = "fas fa-trash"
    // classe para os botoes
    btn_excluir.classList.add("btn_excluir")
    // criando a li
    let lista = document.createElement('li');
    // colocando o texto do input dentro da li
    lista.textContent = task

    // aqui colocando no html para ver na pagina
    ul.appendChild(div);    
    div.appendChild(lista)
    div.appendChild(btn_excluir)
    btn_excluir.appendChild(lixo)

    btn_excluir.onclick = function(){
        let resposta = confirm("Você deseja excluir?")
        if (resposta == true){
            ul.removeChild(div)
            console.log("Usuario clicou Ok")

        }
        else{
            console.log("usuario clicou em cancelar")
        }
    }

 }
