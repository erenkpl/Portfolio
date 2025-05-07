window.addEventListener('DOMContentLoaded', function() {
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
    }

    buton_proje.addEventListener('click', function() {
        setTimeout(() => {
            foto.classList.remove('show');
            foto.classList.add('hide');
        }, 100);

        setTimeout(() => {
            yazi.classList.remove('hide');
            yazi.classList.add('hide');
        }, 200);

        setTimeout(() => {
            anasayfa.classList.remove('aktif');
            projesayfasi.classList.add('aktif');
        }, 400);

        setTimeout(() => {
            document.body.classList.toggle('gradient-expanded', true);
        }, 600);

        setTimeout(() => {
            proje.classList.remove('hide');
            proje.classList.add('show');
        }, 1000);

        proje_kutusu.forEach((kutu, index) => {
            setTimeout(() => {
                kutu.classList.remove('hide');
                kutu.classList.add('show');
            }, 1200 + index * 100);
        });

        // Sayfa durumu kaydediliyor
        localStorage.setItem("currentPage", "projeSayfasi");
    });
});
