
// Array para armazenar os nomes
let amigos = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
  let input = document.getElementById('amigo');
  let nome = input.value.trim();
  if (nome === "") {
    alert("Coloque um nome válido para o amigo!");
    return;
  }

  if (amigos.includes(nome)) {
    alert("Esse nome já foi adicionado na lista.");
    return;
  }

  amigos.push(nome);
  atualizarLista();
  limpaCampos(); 

}
function limparCampos() {
    input = document.getElementById('input');
    input.value = '';
}
// Atualiza a lista de amigos na tela



function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = "";

  amigos.forEach(amigo => {
    const item = document.createElement('li');
    item.textContent = amigo;
    lista.appendChild(item);
  });
}

// Função para sortear apenas UM amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo!");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const sorteado = amigos[indiceSorteado];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = "";
  const item = document.createElement('li');
  item.textContent = `🎉 O(a) sorteado(a) foi: ${sorteado}! 🎁`;
  resultado.appendChild(item);
}
