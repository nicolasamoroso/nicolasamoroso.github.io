//pinta el boton al clickearlo
function pintar() {

    let header = document.getElementById('navig');
    if (header !== null) {

        let btns = header.getElementsByClassName('nav-link');
        
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
                var current = document.getElementsByClassName('active');
                if (current[0])
                    current[0].className = current[0].className.replace(' active', '');
                this.className += ' active';
            });
        }
    }
}

pintar();


window.onscroll = function() {

    //hace o deshace el navbar flex custom
    let nav = document.querySelector('#navig');
    let name1 = document.querySelector('.name');
    if (window.pageYOffset > 0) {
        nav.classList.add('nuevo_nav');
        name1.classList.add('name-hidden');
    } else if (window.pageYOffset <= 0) {
        nav.classList.remove('nuevo_nav');
        name1.classList.remove('name-hidden');
    }


    //pinta el boton cuando se supera su offset

    let offset_p1 = document.querySelector('#projects').offsetTop-150;

    let p = document.querySelector('.p');
    let link = document.querySelector('.nav-link');
    if (p.classList.contains('active') && window.pageYOffset < offset_p1) {
        p.classList.remove('active');
        link.classList.add('active');
    }
    else if (!p.classList.contains('active') && window.pageYOffset >= offset_p1) {
        p.classList.add('active');
        link.classList.remove('active');
    }
}

