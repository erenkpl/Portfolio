function toggleMenu(){
    const menu = document.querySelector('.mobile-nav');
    const hamburger = document.querySelector('.hamburger-menu');

    menu.classList.toggle('show');
    hamburger.classList.toggle('active');
}