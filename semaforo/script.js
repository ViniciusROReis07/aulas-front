"use strict";


let id;
let id2;
let id3;


const $img=document.getElementById( 'img' );

const $vermelho=document.getElementById( 'vermelho' );

const $amarelo=document.getElementById( 'amarelo' );

const $verde=document.getElementById( 'verde' );




const $automatico=document.getElementById( 'automatico' );

const vermelho = ( ) => {
    
    $img.src=`img/vermelho.png`;
}

const amarelo = ( ) =>{
    
    $img.src=`img/amarelo.png`;
}

const verde = ( ) =>{
    
    $img.src=`img/verde.png`;
} 

const automatico = ( ) => {
     id= setInterval(vermelho, 2000);
     id2= setInterval(amarelo, 4000);
     id3= setInterval(verde, 6000);
     
}

const clear = () =>{
    clearInterval(id);
    clearInterval(id2);
    clearInterval(id3);

}




$vermelho.addEventListener( 'click', vermelho );
$vermelho.addEventListener( 'click',  clear );

$amarelo.addEventListener( 'click', amarelo );
$amarelo.addEventListener( 'click',  clear );

$verde.addEventListener( 'click', verde );
$verde.addEventListener( 'click',  clear);

$automatico.addEventListener('click', automatico);
