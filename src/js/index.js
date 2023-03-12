/*
    OBJETIVO - quando clicarmos no botão temos que
    mostrar a imagem de fundo correspondente.

    - passo 1 - dar um jeito de pegar o elemento HTML
    dos botões
    - passo 2 - dar um jeito de identificar o clique
    do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se 
    estivesse selecionado
    - passo 5 - esconder a imagem anterior
    - passo 6 - fazer aparecer a imagem correspondente 
    ao botão clicado
*/

// - passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//- passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //- passo 3 - desmarcar o botão selecionado anterior
        //const botaoSelecionado = document.querySelector('.selecionado');
        //botaoSelecionado.classList.remove('selecionado');
        //selecione as 2 linhas de código ->botao direito ->Refatorar ->Extrair para escopo global ->nome da função.
        desativarBotaoSelecionado();

        //- passo 4 - marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        //- passo 5 - esconder a imagem ativa de fundo
        //const imagemAtiva = document.querySelector('.ativa');
        //imagemAtiva.classList.remove('ativa');
        esconderImagemAtiva();

        //- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        imagens[indice].classList.add('ativa');
    });
})

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

