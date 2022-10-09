var btn2 = document.querySelector('.btn-simulador2')
btn2.disabled = true;

var input2 = document.querySelector('.valor-simulador2');


input2.addEventListener('change', stateHandle);

function stateHandle(){
    if(input2.value <= 0 ){
        btn2.disabled = true;
    }else{
        btn2.disabled = false;

        btn2.addEventListener('click', function(){
            var url2 = "https://api.whatsapp.com/send?phone=5551991800640&text=Olá, gostaria de simular meu saque FGTS, saldo FGTS: R$" +input2.value+ ",00 para antecipação."
            var win2 = window.open(url2, '_blank');
            win2.focus()
        });
    }
}