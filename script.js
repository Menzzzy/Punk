document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)

    })

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    const alternaContraste = document.getElementById('alterna-contraste')


    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    alternaContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste')
    })

})

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

const imagens = [
    'img/The-Pill-Presse-2024.jpg',
    'img/imagem1.jpg',
    'img/Punk_Occupy_Pittsburgh_protestors_(6262172208).jpg',
    'img/sentados.jpg',
    'img/Punks_burning_a_flag.jpg'
];
function abrirPopup(idx) {
    document.getElementById('popup-img-src').src = imagens[idx];
    document.getElementById('popup-bg').classList.add('active');
}
function fecharPopup(e) {
    if (e.target.id === 'popup-bg' || e.target.classList.contains('popup-close')) {
        document.getElementById('popup-bg').classList.remove('active');
        document.getElementById('popup-img-src').src = '';
    }
}
document.querySelector('.contato-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensagem enviada! (simulação)');
    this.reset();
});
