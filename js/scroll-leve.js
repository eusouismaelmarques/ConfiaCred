var v = document.querySelector('.menu-vantagens');
var c = document.querySelector('.menu-como-obter');
var f = document.querySelector('.menu-faq');
var d = document.querySelector('.menu-depoimentos');

var btn = document.querySelector('.scrolldown');



function decidirBotao(){
    if(window.scrollY === 0){
        btn.style.display = "none"
    }else{
        btn.style.display = "block"
    }
}

window.addEventListener('scroll', decidirBotao)




function subirTela(){
    window.scrollTo({
        top:0,
        left: 0,
        behavior: 'smooth'
    })
}