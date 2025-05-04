window.addEventListener('DOMContentLoaded', function(){
    const buton = document.getElementById("projeButon");
    const foto = document.querySelector('.div-foto');
    const yazi = document.querySelector('.yazi');
    const proje = document.querySelector('.proje');
    const ust_div = document.querySelector('.ust-div');

    buton.addEventListener('click', function(){

        ust_div.classList.add('hide');
        
        setTimeout(() => {
            foto.classList.add('hide');
        }, 100);
    
        setTimeout(() => {
            yazi.classList.add('hide');
        }, 200);
    
        setTimeout(() => {
            document.body.classList.add('gradient-expanded');
        }, 600);

        setTimeout(() => {
            proje.classList.add('show');
        }, 1000);
        
    });
    
});