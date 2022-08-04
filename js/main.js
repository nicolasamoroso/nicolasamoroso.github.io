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


// var x = window.matchMedia("(max-width: 600px)");
// if (x.matches) alert("XDDD");

//pinta el boton cuando se el scroll llega a offset_p1 y cambia nav

var p1 = document.querySelector('.p1');

if (p1)
    var offset_p1 = p1.offsetTop-200;

window.onscroll = function() {
    let nav = document.querySelector('#navig');
    let name1 = document.querySelector('.name');
    let p = document.querySelector('.p');
    let link = document.querySelector('.nav-link');
    if (window.pageYOffset > 40) {
        nav.classList.add('nuevo_nav');
        name1.classList.add('name-hidden');
        if (p.classList.contains('active') && window.pageYOffset < offset_p1) {
            p.classList.remove('active');
            link.classList.add('active');
        }
        else if (!p.classList.contains('active') && window.pageYOffset >= offset_p1) {
            p.classList.add('active');
            link.classList.remove('active');
        }
    } else if (window.pageYOffset <= 40) {
        nav.classList.remove('nuevo_nav');
        name1.classList.remove('name-hidden');
    }  
}

//Cambiar el hover con js
// let current = document.getElementsByClassName('active');
                
// var css = 'table td:hover{ background-color: #fff }';
// var style = document.createElement('style');

// if (style.styleSheet) {
//     style.styleSheet.cssText = css;
// } else {
//     style.appendChild(document.createTextNode(css));
// }

// document.getElementsByTagName('nav-link')[0].appendChild(style);


