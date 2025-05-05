window.addEventListener('DOMContentLoaded', function(){
    const buton = document.getElementById("projeButon");
    const foto = document.querySelector('.div-foto');
    const yazi = document.querySelector('.yazi');
    const proje = document.querySelector('.proje');
    const ust_div = document.querySelector('.ust-div');

    const anasayfa = document.getElementById("giris");
    const projesayfasi = document.getElementById("projeSayfasi")

    buton.addEventListener('click', function(){
        
        setTimeout(() => {
            foto.classList.add('hide');
        }, 100);
    
        setTimeout(() => {
            yazi.classList.add('hide');
        }, 200);

        setTimeout(() => {
            anasayfa.classList.remove('aktif');
            proje.classList.add('aktif');
        }, 400);
    
        setTimeout(() => {
            document.body.classList.add('gradient-expanded');
        }, 600);

        setTimeout(() => {
            proje.classList.add('show');
        }, 1000);
        
    });
    
});