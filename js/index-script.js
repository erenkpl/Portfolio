window.addEventListener('DOMContentLoaded', function() {
    const buton = document.getElementById("projeButon");
    const foto = document.querySelector('.div-foto');
    const yazi = document.querySelector('.yazi');
    const proje = document.querySelector('.proje');
    const ust_div = document.querySelector('.ust-div');
    const proje_kutusu = document.querySelectorAll('.proje-kutusu');

    const anasayfa = document.getElementById("giris");
    const projesayfasi = document.getElementById("projeSayfasi");

    // Sayfa durumu kontrolü
    const currentPage = localStorage.getItem("currentPage");

    // Sayfa durumu varsa, ona göre gösterim yap
    if (currentPage === "projeSayfasi") {
        anasayfa.classList.remove('aktif');
        projesayfasi.classList.add('aktif');
        document.body.classList.add('gradient-expanded');
        proje.classList.add('show');
        proje_kutusu.forEach((kutu, index) => {
            setTimeout(() => {
                kutu.classList.add('show');
            }, 1200 + index * 100);
        });
    }

    buton.addEventListener('click', function() {
        setTimeout(() => {
            foto.classList.add('hide');
        }, 100);

        setTimeout(() => {
            yazi.classList.add('hide');
        }, 200);

        setTimeout(() => {
            anasayfa.classList.remove('aktif');
            projesayfasi.classList.add('aktif');
        }, 400);

        setTimeout(() => {
            document.body.classList.add('gradient-expanded');
        }, 600);

        setTimeout(() => {
            proje.classList.add('show');
        }, 1000);

        proje_kutusu.forEach((kutu, index) => {
            setTimeout(() => {
                kutu.classList.add('show');
            }, 1200 + index * 100);
        });

        // Sayfa durumu kaydediliyor
        localStorage.setItem("currentPage", "projeSayfasi");
    });
});
