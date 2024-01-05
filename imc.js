
const calcular = window.document.getElementById('calcular');

function imc(){
    const nome = window.document.getElementById('nome').value;
    const altura = window.document.getElementById('altura').value;
    const peso = window.document.getElementById('peso').value;
    const resultado  = window.document.getElementById('resultado');
    
    if(nome !== '' && altura !== '' && peso !== '' ){
        const valorIMC = (peso/(altura * altura)).toFixed(1);
             
        
        let classificacao = '';
        
        if(valorIMC < 18.5){
            classificacao = 'Abaixo do peso';
        }else if(valorIMC < 25){
            classificacao = 'com peso ideal,Parabéns!!!';
        }else if(valorIMC < 30){
            classificacao ='levemente acima do peso';
        }else if(valorIMC < 35){
            classificacao = 'com obesidade Grau I.';
        }else if(valorIMC < 40 ){
            classificacao = 'com obesidade Grau II.';
        }else{
            classificacao = 'com obesidade Grau III, CUIDADO!';

        }


        
        
        resultado.textContent = `Olá, ${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
    }else{
        resultado.textContent = 'preencha os campos'
    }

}
 
calcular.addEventListener('click',imc);