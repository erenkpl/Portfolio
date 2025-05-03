window.addEventListener('DOMContentLoaded', function(){
    const foto = document.querySelector('.div-foto');
    const yazi = document.querySelector('.yazi');
    const hamburger = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.mobile-nav');

    menu.style.display = "none";

    /* Bunlar kalkabilir*/
    foto.classList.remove('show');
    yazi.classList.remove('show');

    setTimeout(() => {
        menu.style.display = "block";
    }, 200);

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