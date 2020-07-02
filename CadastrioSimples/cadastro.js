"use strict";

import { validator , emailValidator } from "./masks.js";


const $novo = document.getElementById('novo');

const $fechar = document.getElementById('fechar');

const $salvar = document.getElementById('salvar');

const $campos = document.querySelectorAll('.form>input');

const exibirModal = () => document.querySelector('.conteiner-modal').classList.add('exibirModal');

const fecharModal = () => document.querySelector(".conteiner-modal").classList.remove('exibirModal');

const salvarAluno = () => {
    fecharModal();
}
console.log("Test");
console['log']("Test");

// $campos.forEach( input => {
//     const tipoValidacao = input.dataset.type;
//     input.addEventListener('input' , e =>{
//         e.target.value =masks[tipoValidacao](e.target.value) ;
//     });
// } )
validator( document.getElementById('form') );
emailValidator(document.getElementById('email'));

$novo.addEventListener('click',exibirModal);
$fechar.addEventListener('click',fecharModal);
$salvar.addEventListener('click',salvarAluno);