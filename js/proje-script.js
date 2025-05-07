window.addEventListener('DOMContentLoaded', function(){
    const HomeButton = document.getElementById("home-butonu");
    const foto = document.querySelector('.div-foto');
    const yazi = document.querySelector('.yazi');
    const hamburger = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.mobile-nav');
    const anasayfa = document.getElementById("giris");
    const projesayfasi = document.getElementById("projeSayfasi");

    menu.style.display = "none";

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
    });

    // Anasayfaya dönüş işlemi
    HomeButton.addEventListener('click', function() {
        setTimeout(() => {
            projesayfasi.classList.remove('aktif'); 
            anasayfa.classList.add('aktif');
        }, 400);

        setTimeout(() => {
            document.body.classList.add('gradient-expanded-back');
        }, 600);
    
        setTimeout(() => {
            foto.classList.add('show');
        }, 800);
    
        setTimeout(() => {
            yazi.classList.add('show');
        }, 1200);
    

        // Sayfa durumu kaydediliyor
        localStorage.setItem("currentPage", "giris");
    });
});
