window.addEventListener('DOMContentLoaded', function() {
    const HomeButton = document.getElementById("home-butonu");
    const buton_proje = document.getElementById("projeButon");
    const foto = document.querySelector('.div-foto');
    const yazi = document.querySelector('.yazi');
    const proje = document.querySelector('.proje');
    const proje_kutusu = document.querySelectorAll('.proje-kutusu');

    const anasayfa = document.getElementById("giris");
    const projesayfasi = document.getElementById("projeSayfasi");

    const currentPage = localStorage.getItem("currentPage");

    if (currentPage === "projeSayfasi") {
        
        setTimeout(() => {
            anasayfa.classList.remove('aktif');
            projesayfasi.classList.add('aktif');
        }, 400);

        setTimeout(() => {
            document.body.classList.toggle('gradient-expanded', true);
        }, 600);

        setTimeout(() => {
            proje.classList.add('show');
        }, 1000);

        proje_kutusu.forEach((kutu, index) => {
            setTimeout(() => {
                kutu.classList.add('show');
            }, 1200 + index * 100);
        });

        setTimeout(() => {
            HomeButton.classList.remove('hide');
            HomeButton.classList.add('show');
        }, 1400);
    }

    buton_proje.addEventListener('click', function() {
        setTimeout(() => {
            foto.classList.remove('show');
            foto.classList.add('hide');
        }, 200);

        setTimeout(() => {
            yazi.classList.remove('show');
            yazi.classList.add('hide');
        }, 400);

        setTimeout(() => {
            anasayfa.classList.remove('aktif');
            projesayfasi.classList.add('aktif');
        }, 500);

        setTimeout(() => {
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
