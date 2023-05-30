let button = document.querySelector("#versenha")
let buttonCSenha = document.querySelector("#vercsenha")

button.addEventListener("click", () => {
    let inputSenha = document.querySelector("#senha")

    if (inputSenha.getAttribute("type") == "password") {
        inputSenha.setAttribute("type", "text")
    } else {
        inputSenha.setAttribute("type", "password")
    }
})

buttonCSenha.addEventListener("click", () => {
    let inputConfSenha = document.querySelector("#confirmsenha")

    if (inputConfSenha.getAttribute("type") == "password") {
        inputConfSenha.setAttribute("type", "text")
    } else {
        inputConfSenha.setAttribute("type", "password")
    }
})

let msgErro = document.querySelector('#msgErro')
let msgSucesso = document.querySelector('#msgSucesso')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false /*o que quer dizer o false? os campos ñ estão preenchidos. torna true quando é preenchida*/ 

let sexo = document.querySelector('#sexo')
let labelSexo = document.querySelector('#labelSexo')
let validSexo = false

let data = document.querySelector('#data')
let labelData = document.querySelector('#labelData')
let validData = false

let cpf = document.querySelector('#cpf')
let labelCpf = document.querySelector('#labelCpf')
let validCpf = false

let telefone = document.querySelector('#telefone')
let labelTelefone = document.querySelector('#labelTelefone')
let validTelefone = false

let celular = document.querySelector('#celular')
let labelCelular = document.querySelector('#labelCelular')
let validCelular = false

let nomemat = document.querySelector('#nomemat')
let labelNomemat = document.querySelector('#labelNomemat')
let validNomemat = false

let endereco = document.querySelector('#endereco')
let labelEndereco = document.querySelector('#labelEndereco')
let validEndereco = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmsenha = document.querySelector('#confirmsenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

nome.addEventListener('keyup', () => {
    if (nome.value.length < 15) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'O Campo NOME deve ter no mínimo 15 caracteres'
        nome.setAttribute('style', 'border-color:red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome válido'
        nome.setAttribute('style', 'border-color:green')
        validNome = true
    }
})

cpf.addEventListener('keyup', () => {
    if (cpf.value.length != 11) {
        labelCpf.setAttribute('style', 'color: red')
        labelCpf.innerHTML = 'Verifique se seu CPF está correto.'
        cpf.setAttribute('style', 'border-color:red')
        validCpf = false
    } else {
        labelCpf.setAttribute('style', 'color: green')
        labelCpf.innerHTML = 'CPF válido'
        cpf.setAttribute('style', 'border-color:green')
        validCpf = true
    }
})

telefone.addEventListener('keyup', () => {
    if (telefone.value.length != 16) {
        labelTelefone.setAttribute('style', 'color: red')
        labelTelefone.innerHTML = 'Digite seu número de telefone fixo (+55)XX-XXXXXXXX'
        telefone.setAttribute('style', 'border-color:red')
        validTelefone = false
    } else {
        labelTelefone.setAttribute('style', 'color: green')
        labelTelefone.innerHTML = 'Telefone válido'
        telefone.setAttribute('style', 'border-color:green')
        validTelefone = true
    }
})

celular.addEventListener('keyup', () => {
    if (celular.value.length != 17) {
        labelCelular.setAttribute('style', 'color: red')
        labelCelular.innerHTML = 'Digite seu número de celular (+55)XX-9XXXXXXXX'
        celular.setAttribute('style', 'border-color:red')
        validCelular = false
    } else {
        labelCelular.setAttribute('style', 'color: green')
        labelCelular.innerHTML = 'Celular válido'
        celular.setAttribute('style', 'border-color:green')
        validCelular = true
    }
})

nomemat.addEventListener('keyup', () => {
    if (nomemat.value.length < 10) {
        labelNomemat.setAttribute('style', 'color: red')
        labelNomemat.innerHTML = 'Verifique se o nome materno se está correto.'
        nomemat.setAttribute('style', 'border-color:red')
        validNomemat = false
    } else {
        labelNomemat.setAttribute('style', 'color: green')
        labelNomemat.innerHTML = 'Nome materno válido'
        nomemat.setAttribute('style', 'border-color:green')
        validNomemat = true
    }
})

endereco.addEventListener('keyup', () => {
    if (endereco.value.length < 10) {
        labelEndereco.setAttribute('style', 'color: red')
        labelEndereco.innerHTML = 'Verifique o endereço se está correto.'
        endereco.setAttribute('style', 'border-color:red')
        validEndereco = false
    } else {
        labelEndereco.setAttribute('style', 'color: green')
        labelEndereco.innerHTML = 'Endereço válido'
        endereco.setAttribute('style', 'border-color:green')
        validEndereco = true
    }
})

usuario.addEventListener('keyup', () => {
    if (usuario.value.length != 6) {
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Seu LOGIN deve ter 6 caracteres alfabéticos'
        usuario.setAttribute('style', 'border-color:red')
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Login válido'
        usuario.setAttribute('style', 'border-color:green')
        validUsuario = true
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length < 8) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Sua SENHA deve ter no mínimo 8 caracteres alfabéticos'
        senha.setAttribute('style', 'border-color:red')
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha válida'
        senha.setAttribute('style', 'border-color:green')
        validSenha = true
    }
})

confirmsenha.addEventListener('keyup', () => {
    if (senha.value != confirmsenha.value) {
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'As senhas não são idênticas'
        confirmsenha.setAttribute('style', 'border-color:red')
        validConfirmSenha = false
    } else {
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Confirmar senha'
        confirmsenha.setAttribute('style', 'border-color:green')
        validConfirmSenha = true
    }
})

function cadastrar() {
    if (validNome && /*validSexo && validData && */validCpf && validTelefone && validCelular && validNomemat 
    && validEndereco && validUsuario && validSenha && validConfirmSenha) {

        let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || "[]") /*JSON PARSE transforma o que vai 
        colocar dentro do localstorage em json. JSON é um formato aberto usado como alternativa ao XML 
        para a transferência de dados estruturados entre um servidor de Web e uma aplicação Web*/
        listaUsuario.push(
            {
                nomeCad: nome.value,
                cpfCad: cpf.value,
                nomeMatCad: nomemat.value,
                telefoneCad: telefone.value,
                celularCad: celular.value,
                enderecoCad: endereco.value,
                usuarioCad: usuario.value,
                senhaCad: senha.value
            }
        )

        localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario))

        msgSucesso.setAttribute('style', 'display: block')
        msgSucesso.innerHTML = 'Cadastro válido'
        msgErro.setAttribute('style', 'display: none')
        msgErro.innerHTML = ''

        setTimeout(() => {
            window.location.href = 'login.html'
        }, 2000)

    } else {
        msgErro.setAttribute('style', 'display: block')
        msgErro.innerHTML = 'Cadastro inválido. Preencha os campos de cadastro.'
        msgSucesso.innerHTML = ''
        msgSucesso.setAttribute('style', 'display: none')
    }
}   //**PRECISA ATRIBUIR EM TODOS OS VALID PRA APARECER CERTO NO PAG****

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  