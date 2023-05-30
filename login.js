function entrar(){
  let usuario = document.querySelector('#usuario')
  let usuarioLabel = document.querySelector('#usuarioLabel')

  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')

  let msgErro = document.querySelector('#msgErro')

  let listaUsuario = []

  let usuariovalid = {
    nome: null,
    usuario: null,
    senha: null //pegando so os tres pq foi os que validei no function cadastrar. depois tem que add os outros
  }

    listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'))

    listaUsuario?.forEach((item) => {
      if (usuario.value == item.usuarioCad && senha.value == item.senhaCad){
        usuariovalid = {
          nome: item.nomeCad,
          usuario: item.usuarioCad,
          senha: item.senhaCad
        }
      }
    })

  if (usuario.value == usuariovalid.usuario && senha.value == usuariovalid.senha){
    window.location.href = 'inicial.html'

    let token = Math.random().toString(16).substring(2)
    localStorage.setItem('token', token)
    
    localStorage.setItem('usuarioLogado', JSON.stringify(usuariovalid))

    
  } else {
    usuarioLabel.setAttribute('style', 'color:red')
    usuario.setAttribute('style', 'border-color:red')
    senhaLabel.setAttribute('style', 'color:red')
    senha.setAttribute('style', 'border-color:red')
    msgErro.setAttribute('style', 'display: block')
    msgErro.innerHTML = 'Usuário ou senha incorretos.'
    usuario.focus() //<<<<<<<------vai piscar onde tá o erro no campo de digitação do login
  }
}

let button = document.querySelector(".bi-eye")

button.addEventListener("click", () => {
  let inputSenha = document.querySelector ("#senha")

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text")
  } else {
    inputSenha.setAttribute("type", "password")
  }})
