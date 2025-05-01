window.addEventListener('DOMContentLoaded', function(){
    const foto = document.querySelector('.div-foto');
    const yazi = document.querySelector('.yazi');
    const hamburger = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.mobile-nav');

    setTimeout(() => {
        foto.classList.add('show');
    }, 400);

    setTimeout(() => {
        yazi.classList.add('show');
    }, 1000);

    hamburger.addEventListener('click', function(){
        menu.classList.toggle('show');
        hamburger.classList.toggle('active');
    })

});