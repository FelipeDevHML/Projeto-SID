const botoesLeiaMais = document.querySelectorAll('.btn-leia-mais');
const textosCompletos = document.querySelectorAll('.texto-completo');

botoesLeiaMais.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        if (textosCompletos[index].style.display === 'none' || textosCompletos[index].style.display === '') {
            textosCompletos[index].style.display = 'inline';
            botao.textContent = 'Mostrar Menos';
        } else {
            textosCompletos[index].style.display = 'none';
            botao.textContent = 'Leia Mais';
        }
    });
});