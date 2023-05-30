if (localStorage.getItem('token') == null) {
    alert('você precisa logar');
    window.location.href = 'login.html';
}
let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

let logado = document.querySelector('#logado');
logado.innerHTML = `Bem vindo (a), ${usuarioLogado.nome}`;

function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'login.html'
}