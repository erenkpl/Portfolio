window.addEventListener('DOMContentLoaded', function() {
    const HomeButton = document.getElementById("home-butonu");
    const buton_proje = document.getElementById("projeButon");
    const buton_proje_mobile = document.getElementById("projeButonMobile");
    const foto = document.querySelector('.div-foto');
    const yazi = document.querySelector('.yazi');
    const proje = document.querySelector('.proje');
    const info = document.querySelector('.info');
    const info_baslık = document.querySelector('.info-baslik');
    const proje_kutusu = document.querySelectorAll('.proje-kutusu');
    const hamburger = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.mobile-nav');

    const anasayfa = document.getElementById("giris");
    const projesayfasi = document.getElementById("projeSayfasi");
    const infoSayfasi = document.getElementById("infoSayfasi");

    const currentPage = localStorage.getItem("currentPage");

    if (currentPage === "projeSayfasi") {

        foto.classList.remove('show');
        foto.classList.add('hide');
        yazi.classList.remove('show');
        yazi.classList.add('hide');
        info.classList.remove('show');
        info.classList.add('hide');
        
        setTimeout(() => {
            anasayfa.classList.remove('aktif');
            infoSayfasi.classList.remove('aktif');
            projesayfasi.classList.add('aktif');
        }, 100);

        setTimeout(() => {
            document.body.classList.toggle('gradient-black', false);
            document.body.classList.toggle('gradient-expanded', true);
        }, 100);

        setTimeout(() => {
            proje.classList.add('show');
        }, 600);

        proje_kutusu.forEach((kutu, index) => {
            setTimeout(() => {
                kutu.classList.add('show');
            }, 800 + index * 100);
        });

        setTimeout(() => {
            HomeButton.classList.remove('hide');
            HomeButton.classList.add('show');
        }, 900);
    }

    buton_proje.addEventListener('click', function() {
        
        setTimeout(() => {
            foto.classList.remove('show');
            foto.classList.add('hide');
        }, 200);

        setTimeout(() => {
            
        }, 400);

        setTimeout(() => {
            anasayfa.classList.remove('aktif');
            infoSayfasi.classList.remove('aktif');
            projesayfasi.classList.add('aktif');
        }, 500);

        setTimeout(() => {
            yazi.classList.remove('show');
            yazi.classList.add('hide');
            info.classList.remove('show');
            info.classList.add('hide');
            info_baslık.classList.remove('show');
            info_baslık.classList.add('hide');
            document.body.classList.toggle('gradient-expanded', true);
        }, 600);

        setTimeout(() => {
            proje.classList.remove('hide');
            proje.classList.add('show');
        }, 800);

        proje_kutusu.forEach((kutu, index) => {
            setTimeout(() => {
                kutu.classList.remove('hide');
                kutu.classList.add('show');
            }, 1000 + index * 100);
        });

        setTimeout(() => {
            HomeButton.classList.remove('hide');
            HomeButton.classList.add('show');
        }, 1200);

        // Sayfa durumu kaydediliyor
        localStorage.setItem("currentPage", "projeSayfasi");
    });

    buton_proje_mobile.addEventListener('click', function(){

        menu.classList.toggle('show');
        hamburger.classList.toggle('active');
        
        setTimeout(() => {
            foto.classList.remove('show');
            foto.classList.add('hide');
        }, 200);

        setTimeout(() => {
            
        }, 400);

        setTimeout(() => {
            anasayfa.classList.remove('aktif');
            infoSayfasi.classList.remove('aktif');
            projesayfasi.classList.add('aktif');
        }, 500);

        setTimeout(() => {
            yazi.classList.remove('show');
            yazi.classList.add('hide');
            info.classList.remove('show');
            info.classList.add('hide');
            info_baslık.classList.remove('show');
            info_baslık.classList.add('hide');
            document.body.classList.toggle('gradient-expanded', true);
        }, 600);

        setTimeout(() => {
            proje.classList.remove('hide');
            proje.classList.add('show');
        }, 800);

        proje_kutusu.forEach((kutu, index) => {
            setTimeout(() => {
                kutu.classList.remove('hide');
                kutu.classList.add('show');
            }, 1000 + index * 100);
        });

        setTimeout(() => {
            HomeButton.classList.remove('hide');
            HomeButton.classList.add('show');
        }, 1200);

        // Sayfa durumu kaydediliyor
        localStorage.setItem("currentPage", "projeSayfasi");
    });
});
