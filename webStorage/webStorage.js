"use strict";

const $add = document.getElementById('btnAdd');
const $update = document.getElementById('btnUpdate');
const $clear = document.getElementById('btnClear');
const $remove = document.getElementById('btnRemove');
const $dados = document.getElementById('txtEntrada');
const $names = document.getElementById('names');
let names = new Array ();



const addName = async () => {
    let namesJson = JSON.parse(localStorage.getItem('names'));
     if(localStorage.hasOwnProperty( 'names' ) ){
         $names.innerHTML=``;
         namesJson.forEach(object => { $names.innerHTML += `<div class='name'>${object.names}</div>` });
     }else{
         $names.innerHTML =``;    
        }

}

const add = (name) => { 
    names.push( {'names' : name}, );
    localStorage.setItem('names', JSON.stringify(names) );
    addName();
}
const clear = () => {
    localStorage.clear('names');
    addName();
}
const remove = (name) => {

    names = names.filter( peoples => peoples.names != name );
    localStorage.setItem('names',JSON.stringify(names));
    addName();
}
const update =  () => {

        const name = prompt( "Insira o nome que será alterado:" );

        const newName = prompt("Insira o novo nome:");

        remove(name);
        add(newName);
        localStorage.setItem('names',JSON.stringify(names));
        addName();
}

const exibirName = () => {
    add($dados.value);
}

const removeDado = () => {
    remove($dados.value);
}


$add.addEventListener('click',exibirName);

$remove.addEventListener('click',removeDado);

$clear.addEventListener('click', clear);

$update.addEventListener('click',update);