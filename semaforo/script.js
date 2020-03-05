"use strict";

const $img=document.getElementById( 'img' );

const $vermelho=document.getElementById( 'vermelho' );

const $amarelo=document.getElementById( 'amarelo' );

const $verde=document.getElementById( 'verde' );




const $automatico=document.getElementById( 'automatico' );

const vermelho = ( ) => $img.src=`img/vermelho.png`;

const amarelo = ( ) => $img.src=`img/amarelo.png`;

const verde = ( ) => $img.src=`img/verde.png`;

const automatico = ( ) => {
    setInterval(vermelho, 2000);
    setInterval(amarelo, 4000);
    setInterval(verde, 8000);

}


$vermelho.addEventListener( 'click', vermelho );

$amarelo.addEventListener( 'click', amarelo );

$verde.addEventListener( 'click', verde );

$vermelho.addEventListener( 'click', vermelho );

$automatico.addEventListener('click', automatico);
