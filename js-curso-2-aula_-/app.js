/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'jogo do numero secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'escolha um numero entre 1 e 10';*/

function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'jogo do numero secreto');
exibirTextoNaTela('p', 'escolha um numero entre 1 e 100');

function verificarChute(){
    console.log('o botao foi clicado');
}