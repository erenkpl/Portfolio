window.addEventListener('DOMContentLoaded', function() {
    const HomeButton = document.getElementById("home-butonu");
    const buton_info = document.getElementById("infoButon");
    const buton_info_mobile = document.getElementById("infoButonMobile");
    const foto = document.querySelector('.div-foto');
    const yazi = document.querySelector('.yazi');
    const info = document.querySelector('.info');
    const info_baslık = document.querySelector('.info-baslik');
    const proje = document.querySelector('.proje');
    const proje_kutusu = document.querySelectorAll('.proje-kutusu');
    const hamburger = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.mobile-nav');

    const anasayfa = document.getElementById("giris");
    const projesayfasi = document.getElementById("projeSayfasi");
    const infoSayfasi = document.getElementById("infoSayfasi");

    const currentPage = localStorage.getItem("currentPage");

    if (currentPage === "infoSayfasi") {

        foto.classList.remove('show');
        foto.classList.add('hide');
        yazi.classList.remove('show');
        yazi.classList.add('hide');
        proje.classList.remove('show');
        proje.classList.add('hide');
        
        setTimeout(() => {
            anasayfa.classList.remove('aktif');
            projesayfasi.classList.remove('aktif');
            infoSayfasi.classList.add('aktif');
        }, 100);

        setTimeout(() => {
            document.body.classList.toggle('gradient-expanded', false);
            document.body.classList.toggle('gradient-black', true);
        }, 100);

        setTimeout(() => {
            info.classList.remove('hide');
            info.classList.add('show');
            info_baslık.classList.remove('hide');
            info_baslık.classList.add('show');
        }, 600);

        setTimeout(() => {
            HomeButton.classList.remove('hide');
            HomeButton.classList.add('show');
        }, 900);
    }

    buton_info.addEventListener('click', function() {

        proje_kutusu.forEach((kutu, index) => {
            setTimeout(() => {
                kutu.classList.remove('show');
                kutu.classList.add('hide');
            }, 200 + index * 100);
        });

        setTimeout(() => {
            foto.classList.remove('show');
            foto.classList.add('hide');
        }, 200);

        setTimeout(() => {
            yazi.classList.remove('show');
            yazi.classList.add('hide');
            proje.classList.remove('show');
            proje.classList.add('hide');
        }, 400);

        setTimeout(() => {
            document.body.classList.toggle('gradient-expanded', false);
            document.body.classList.toggle('gradient-black', true);
        }, 400);

        setTimeout(() => {
            anasayfa.classList.remove('aktif');
            projesayfasi.classList.remove('aktif');
            infoSayfasi.classList.add('aktif');
        }, 500);

        setTimeout(() => {
            info.classList.remove('hide');
            info.classList.add('show');
        }, 800);

        setTimeout(() => {
            info_baslık.classList.remove('hide');
            info_baslık.classList.add('show');
        }, 1000);

        setTimeout(() => {
            HomeButton.classList.remove('hide');
            HomeButton.classList.add('show');
        }, 1200);

        // Sayfa durumu kaydediliyor
        localStorage.setItem("currentPage", "infoSayfasi");
    });

    buton_info_mobile.addEventListener('click', function(){

        menu.classList.toggle('show');
        hamburger.classList.toggle('active');

        proje_kutusu.forEach((kutu, index) => {
            setTimeout(() => {
                kutu.classList.remove('show');
                kutu.classList.add('hide');
            }, 200 + index * 100);
        });

        setTimeout(() => {
            foto.classList.remove('show');
            foto.classList.add('hide');
        }, 200);

        setTimeout(() => {
            yazi.classList.remove('show');
            yazi.classList.add('hide');
            proje.classList.remove('show');
            proje.classList.add('hide');
        }, 400);

        setTimeout(() => {
            document.body.classList.toggle('gradient-expanded', false);
            document.body.classList.toggle('gradient-black', true);
        }, 400);

        setTimeout(() => {
            anasayfa.classList.remove('aktif');
            projesayfasi.classList.remove('aktif');
            infoSayfasi.classList.add('aktif');
        }, 500);

        setTimeout(() => {
            info.classList.remove('hide');
            info.classList.add('show');
        }, 800);

        setTimeout(() => {
            info_baslık.classList.remove('hide');
            info_baslık.classList.add('show');
        }, 1000);

        setTimeout(() => {
            HomeButton.classList.remove('hide');
            HomeButton.classList.add('show');
        }, 1200);

        // Sayfa durumu kaydediliyor
        localStorage.setItem("currentPage", "infoSayfasi");
    });
});
