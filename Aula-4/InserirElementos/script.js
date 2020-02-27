"use strict";

const frutas = ['mamao', 'laranja', 'uva','pera','Morango'];

const clientes = ["Vinicius", "Batman", "Harry", "Rony","Hermione"];

const card = (arr, title="Lista") => {

const $card = document.createElement('div');

//Adiciona class aos elelementos criado no Js
$card.classList.add ( 'card' );

//Join separa os itens do array pelo caracter informado
const elementos = arr.join( '</li> <li>' );
    $card.innerHTML = `
    <div class="card-title">${title}</div>
    <div class="card-body">

        <ul>
           <li>${elementos}</li>
         </ul>
    </div>

`;
console.log($card);
return $card;

}


 /*Resgata todos os elementos com essa class
const $conteiner = document.querySelector('.conteiner');

Maneira não ideal
$conteiner.innerHTML = card ();

Criando elemento HTML , como se fosse um obj em java 
const $div = document.createElement( 'div' );

$div.innerHTML= card();

 acrescentar um filho a este elemento 
$conteiner.appendChild($div);*/

const $conteiner = document.querySelector('.conteiner' );

$conteiner.appendChild( card(frutas,"Frutas") );
$conteiner.appendChild(card(clientes, "Clientes")  );