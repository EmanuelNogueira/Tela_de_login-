const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

//  Mudança de CSS --------

function loadCSS(file) {
    var link = document.getElementById('style');
    link.href = file;
}

function checkWidth() {
    var newCSS = window.innerWidth <= 550 ? 'style_2.css' : 'style.css';
    loadCSS(newCSS);
}

// Verifica a largura inicial da janela
checkWidth();

// Adiciona um ouvinte de evento para verificar a largura da janela ao redimensionar
window.addEventListener('resize', function(){
    checkWidth();
});
