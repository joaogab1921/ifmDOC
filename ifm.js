let index = 0;

const imagens = document.querySelectorAll('.imagem');
const totalImagens = imagens.length;

const setaEsquerda = document.querySelector('.seta.esquerda');
const setaDireita = document.querySelector('.seta.direita');

function mostrarImagem(indexAtual) {
    const deslocamento = -indexAtual * 100;
    document.querySelector('.carrossel').style.transform = `translateX(${deslocamento}%)`;
}

setaEsquerda.addEventListener('click', () => {
    index = (index === 0) ? totalImagens - 1 : index - 1;
    mostrarImagem(index);
});

setaDireita.addEventListener('click', () => {
    index = (index === totalImagens - 1) ? 0 : index + 1;
    mostrarImagem(index);
});