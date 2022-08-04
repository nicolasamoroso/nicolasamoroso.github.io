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


//pinta el boton cuando se el scroll llega a offset_p1 y cambia nav

var p1 = document.querySelector('.p1');
var p2 = document.querySelector('.p2');
var p3 = document.querySelector('.p3');

if (p1) {
    var offset_p1 = p1.offsetTop-150;
    console.log(offset_p1);
}
if (p2) {
    var offset_p2 = p2.offsetTop-150;
    console.log(offset_p2);
}
if (p3) {
    var offset_p3 = p3.offsetTop;
    console.log(offset_p3);
}

window.onscroll = function() {
    let nav = document.querySelector('#navig');
    let name1 = document.querySelector('.name');
    let p = document.querySelector('.p');
    let link = document.querySelector('.nav-link');
    if (window.pageYOffset > 40) {
        nav.classList.add('nuevo_nav');
        name1.classList.add('name-hidden');
        if (window.pageYOffset >= offset_p1) {
            p.classList.add('active');
            link.classList.remove('active');
        } else {
            p.classList.remove('active');
            link.classList.add('active');
        }
    } else if (window.pageYOffset <= 40) {
        nav.classList.remove('nuevo_nav');
        name1.classList.remove('name-hidden');
    }  
}


//scroll botón "projects"
var cont = 1;

function projects() {
    if (window.pageYOffset < offset_p1) cont = 1;
    else if (window.pageYOffset < offset_p2) cont = 2;

    if (cont === 1) window.scroll(offset_p1, offset_p1);
    else if (cont === 2) window.scroll(offset_p2, offset_p2);
    else if (cont === 3) window.scroll(offset_p3, offset_p3);
    else window.scroll(offset_p1, offset_p1);
    cont++;
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


