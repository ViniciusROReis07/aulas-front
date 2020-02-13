"use strict";
// Deixa o js mais chato, serve para ser mais criterioso
const calcularImc=(peso,altura)=> peso/ (altura ** 2);

const definirEstado=(imc) =>{
let msg;

    if(imc<18.6){
        msg = 'muito abaixo do peso';
    }else if(imc<24.5){
        msg = 'peso ok. Parabéns! ';
    }else if(imc<30){
        msg = 'levemente acima do peso';
    }else if(imc<35){
        msg = 'obesidade grau I';
    }else if(imc<40){
        msg = 'obesidade grau II';
    }else{
        msg = 'obesidade grau III';
    }

    return msg;

}



const exibirResultado=()=>{
    const nome=document.getElementById('nome').value;

    const peso = document.getElementById('peso').value;

    const altura = document.getElementById('altura').value;

    const $resultado = document.getElementById('resultado');

    const imc = calcularImc(peso,altura);

    const estado = definirEstado(imc);


    // innerHtml rescreve todos os arquivos html nao usar
    // {} sinaliza que e uma variavel
    $resultado.innerHTML=`${nome} seu IMC foi de ${imc} vc esta ${estado}` ;
}

document.getElementById('calcular').addEventListener('click', exibirResultado);