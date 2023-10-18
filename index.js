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


const body = document.querySelector('body');

body.innerHTML+='<dialog><br><button class="btn-leia-mais" autofocus>FECHAR</button><br><br><br><img src="./assets/img/imeretian-khachapuri-cheese-lemon-side-view.jpg" alt="PEGADINHA"><a href="https://www.freepik.com/free-photo/imeretian-khachapuri-cheese-lemon-side-view_8275435.htm#query=calzone&position=8&from_view=keyword&track=sph">Image by KamranAydinov</a> on Freepik</dialog>'


const dialog = document.querySelector("dialog");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
setInterval(() => {
    dialog.showModal();
}, 15*1000);

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
