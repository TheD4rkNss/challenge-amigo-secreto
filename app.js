//Crie array para armazenar os nomes dos amigos
let amigos = []

//Crie uma função para adicionar nomes dos amigos ao array e ligue ao botão adicionar
function adicionarAmigo() {
    let nome = document.getElementById('nome').value
    if (nome.trim() !== '') {
        amigos.push(nome)
    }
    document.getElementById('nome').value = ''
    console.log(amigos)
    mostrarAmigos()
}

//crie uma função para mostrar na tela o nome dos amigos adicionados ao array, um por vez
function mostrarAmigos() {
    let lista = document.getElementById('lista')
    lista.innerHTML = ''
    let fragment = document.createDocumentFragment()
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li')
        li.textContent = amigos[i]
        fragment.appendChild(li)
    }
    lista.appendChild(fragment)
    if (amigos.length === 0) {
        document.getElementById('sorteado').innerHTML = 'Nenhum amigo disponível para sortear'
    }
}

//crie a função que sorteia amigo secreto, ao clicar no botão sortear
function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById('sorteado').innerHTML = 'Nenhum amigo disponível para sortear'
    } else {
        let sorteado = amigos[Math.floor(Math.random() * amigos.length)]
        document.getElementById('sorteado').innerHTML = sorteado
    }
}

document.getElementById('adicionarAmigoBtn').addEventListener('click', adicionarAmigo)
document.getElementById('mostrarAmigosBtn').addEventListener('click', mostrarAmigos)
document.getElementById('sortearAmigoBtn').addEventListener('click', sortearAmigo)
