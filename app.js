gitlet listaDeNumerosSorteados = [];
let numeroLimite = 50
let numeroSecreto = GerarNumeroAleatorio();
let tentativas = 1

function ExibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
ExibirTextoNaTela('h1', 'Jogo do Número Secreto')
ExibirTextoNaTela('p', 'Escolha um número entre 1 e 100')
}

exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value

if(chute == numeroSecreto){
    ExibirTextoNaTela('h1', 'acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
    let mensagemTentativas = `Você descobriu o número secreto, com 
    ${tentativas} ${palavraTentativa} !`; 
    ExibirTextoNaTela('p', mensagemTentativas);
  document.getElementById('reiniciar').removeAttribute('disabled')
}else {
    if (chute > numeroSecreto){
        ExibirTextoNaTela('p', 'o número secreto é menor');
    }else {
        ExibirTextoNaTela('p', 'o número secreto é maior');
    }
    tentativas++;
    limparCampo();
}
} 

function GerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *10 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.lenght;

    if (quantidadeDeElementosNaLista == 10) {
        listaDeNumerosSorteados = [];
    }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return GerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido)
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido
   }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = GerarNumeroAleatorio();
    limparCampo();
    tentativas = 1
exibirMensagemInicial()
document.getElementById('reinicar').setAttribute('disabled', true)
}
