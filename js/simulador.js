var botao = document.querySelector('.btn-simulador');

//botao.disabled = true;

var input = document.querySelector('.valor-simulador');


botao.addEventListener('click', function(){
    var url = "https://api.whatsapp.com/send?phone=5551991800640&text=Olá, gostaria de simular meu saque FGTS, saldo FGTS: R$" +input.value+ ",00 para antecipação."
    var win = window.open(url, '_blank');
    win.focus()
});


//input.addEventListener('change', stateHandle);
/*
function stateHandle(){
    if(input.value <= 0 ){
        botao.disabled = true;
    }else{
        botao.disabled = false;

        
    }
}

*/





