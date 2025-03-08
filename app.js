let lista = document.getElementById('listaAmigos')

let amigos = []
let sorteados = []

function limparCampo()
{
    nomes = document.querySelector('input')
    nomes.value = "";
}

function adicionarAmigo()
{
    let nomes = document.querySelector('input').value
    
    if(document.querySelector('input').value == "")
    {
        alert("Por favor, insira um nome!")
    }
    
    if (amigos.includes(nomes)) {
        alert("Esse nome já foi inserido!");
    } 

    else
    {
        amigos.push(nomes);
        console.log(amigos)
        limparCampo()
    }
}


function sortearAmigo() 
{
    if (amigos.length < 3) 
    {
        alert(`Digite ${3 - amigos.length} amigo(s) para sortear!`);
        return;
    }

    let amigosNaoSorteados = amigos.filter(amigo => !sorteados.includes(amigo));

    if (amigosNaoSorteados.length === 0) {
        alert("Todos os amigos já foram sorteados!");
    }
    
    let sorteioAmigo = amigosNaoSorteados[Math.floor(Math.random() * amigosNaoSorteados.length)];
    sorteados.push(sorteioAmigo);
    
    resultado.textContent = `O amigo sorteado é: ${sorteioAmigo}`;
}