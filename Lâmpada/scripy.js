"use strict";

let id;
let id2;



const $lampada=document.getElementById( 'lampada' );

const $interruptor=document.getElementById( 'interruptor' );

const ligada = ( ) =>$lampada.src=`./img/ligada.jpg`;



const desligada = ( ) =>  $lampada.src=`img/desligada.jpg`;




const piscar = ( ) => {

    if(id=== undefined || id2 === undefined){
        id= setInterval(ligada, 100);

        id2= setInterval(desligada, 300);
   
    }

}



 const parar = (  ) => {
    id=  clearInterval(id);
    id2=  clearInterval(id2);
    
 }

$lampada.addEventListener( 'mouseenter', ligada );

$lampada.addEventListener( 'mouseout', desligada);

$lampada.addEventListener('click', piscar );


$interruptor.addEventListener( 'click', parar);


