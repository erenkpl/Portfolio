window.addEventListener('DOMContentLoaded', function(){
    const foto = this.document.querySelector('.div-foto');
    const yazi = this.document.querySelector('.yazi');

    setTimeout(() => {
        foto.classList.add('show');
    }, 400);

    setTimeout(() => {
        yazi.classList.add('show');
    }, 1000);

});

function toggleMenu(){
    const menu = document.querySelector('.mobile-nav');
    const hamburger = document.querySelector('.hamburger-menu');

    menu.classList.toggle('show');
    hamburger.classList.toggle('active');
}
