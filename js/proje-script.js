window.addEventListener('DOMContentLoaded', function(){
    const HomeButton = document.getElementById("home-butonu");
    const foto = document.querySelector('.div-foto');
    const yazi = document.querySelector('.yazi');
    const hamburger = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.mobile-nav');
    const anasayfa = document.getElementById("giris");
    const projesayfasi = document.getElementById("projeSayfasi");
    const proje_kutusu = document.querySelectorAll('.proje-kutusu');

    menu.style.display = "none";
    HomeButton.classList.add('hide');

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
            HomeButton.classList.remove('show');
            HomeButton.classList.add('hide');
        }, 100);

        proje_kutusu.forEach((kutu, index) => {
            setTimeout(() => {
                kutu.classList.remove('show');
                kutu.classList.add('hide');
            }, 200 + index * 100);
        });

        setTimeout(() => {
            projesayfasi.classList.remove('aktif'); 
            anasayfa.classList.add('aktif');
        }, 400);

        setTimeout(() => {
            document.body.classList.toggle('gradient-expanded', false);
        }, 600);
    
        setTimeout(() => {
            foto.classList.remove('hide');
            foto.classList.add('show');
        }, 800);
    
        setTimeout(() => {
            yazi.classList.remove('hide');
            yazi.classList.add('show');
        }, 1200);
    

        // Sayfa durumu kaydediliyor
        localStorage.setItem("currentPage", "giris");
    });
});
