window.addEventListener('DOMContentLoaded', function(){
    const HomeButton = document.getElementById("home-butonu");
    const foto = document.querySelector('.div-foto');
    const yazi = document.querySelector('.yazi');
    const info = document.querySelector('.info');
    const info_baslik = document.querySelector('.info-baslik');
    const info_yazi = document.querySelector('.info-text');
    const hamburger = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.mobile-nav');
    const anasayfa = document.getElementById("giris");
    const projesayfasi = document.getElementById("projeSayfasi");
    const infoSayfasi = document.getElementById("infoSayfasi");
    const proje_kutusu = document.querySelectorAll('.proje-kutusu');

    menu.style.display = "none";
    info.style.display = "none";

    setTimeout(() => {
        menu.style.display = "block";
        info.style.display = "flex";
        HomeButton.style.visibility = "visible";
    }, 500);

    setTimeout(() => {
        foto.classList.remove('hide');
        foto.classList.add('show');
    }, 400);

    setTimeout(() => {
        yazi.classList.remove('hide');
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
        }, 200);

        proje_kutusu.forEach((kutu, index) => {
            setTimeout(() => {
                kutu.classList.remove('show');
                kutu.classList.add('hide');
            }, 300 + index * 100);
        });

        setTimeout(() => {
            info.classList.remove('show');
            info.classList.add('hide');
            info_baslik.classList.remove('show');
            info_baslik.classList.add('hide');
        }, 300);

        setTimeout(() => {
            info_yazi.classList.remove('show');
            info_yazi.classList.add('hide');
        }, 400);

        setTimeout(() => {
            projesayfasi.classList.remove('aktif'); 
            infoSayfasi.classList.remove('aktif');
            anasayfa.classList.add('aktif');
        }, 500);

        setTimeout(() => {
            document.body.classList.toggle('gradient-expanded', false);
            document.body.classList.toggle('gradient-black', false);
        }, 600);
    
        setTimeout(() => {
            foto.classList.remove('hide');
            foto.classList.add('show');
        }, 1000);
    
        setTimeout(() => {
            yazi.classList.remove('hide');
            yazi.classList.add('show');
        }, 1200);
    

        // Sayfa durumu kaydediliyor
        localStorage.setItem("currentPage", "giris");
    });
});
