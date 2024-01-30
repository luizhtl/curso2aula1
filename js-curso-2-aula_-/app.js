let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'jogo do numero secreto');
exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto);
    console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}