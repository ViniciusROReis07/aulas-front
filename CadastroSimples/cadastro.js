"use strict";

import { validator , emailValidator } from "./masks.js";

const $novo = document.getElementById('novo');

const $fechar = document.getElementById('fechar');

const $salvar = document.getElementById('salvar');

const $campos = document.querySelectorAll('.form>input');

const $nome = document.getElementById('nome');

const $email = document.getElementById('email');

const $celular = document.getElementById('celular');

const $endereco = document.getElementById('endereco');

const $numero = document.getElementById('numero');

const $bairro = document.getElementById('bairro');

const $cidade = document.getElementById('cidade');

const $estado = document.getElementById('estado');

const $cep = document.getElementById('cep');

const exibirModal = () => document.querySelector('.conteiner-modal').classList.add('exibirModal');

const fecharModal = () => document.querySelector(".conteiner-modal").classList.remove('exibirModal');

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

const tableLoad = (data) => {
    const $registros = document.getElementById('registros');

    const $tr = document.createElement('tr');

    data.forEach( element => {
        const $tr = document.createElement( 'tr' );

        $tr.innerHTML = `
            <td>${element.codigo}</td>
            <td>${element.aluno}</td>
            <td>${element.email}</td>
            <td>${element.celular}</td>
            <td>${element.cidade}</td>
            <td>${element.acoes}</td>
              <td>
                <button id='editar-${element.codigo}'>Upload</button>
                <button id='excluir-${element.codigo}'>Delete</button>
              </td>
        `;

        $registros.appendChild($tr);
    } );
}

const getAlunos = async ( url ) =>{     
  const fetchUrl =  await fetch(url);
  const json = await fetchUrl.json();
  return json.data;
} 

const  showAlunos = async () =>  {
    const url = 'http://localhost/DS2M20201/Vinicius_Reis/apiphp-master/alunos/';
    const alunos = await getAlunos(url);

    const formatAlunos = alunos.map(({id:codigo,nome:aluno,email,celular,cidade}) =>
                                                                  ({ codigo,aluno,email,celular,cidade})
    );

    tableLoad(formatAlunos);
}

function createAluno( aluno ) {
    const url = 'http://localhost/DS2M20201/Vinicius_Reis/apiphp-master/alunos/';
    const options = {
      method: 'POST',
      body: JSON.stringify( aluno )
    };
    fetch(url, options)
  }

const salvarAluno = () => {
    const aluno = {
        'nome': $nome.value,
        'email': email.value,
        'celular': celular.value,
        'logradouro':endereco.value,
        'numero': numero.value,
        'bairro': $bairro.value,
        'cidade': $cidade.value,
        'estado': $estado.value,
        'cep': $cep.value
    };

    createAluno(aluno);
    fecharModal();
}

function deleteAluno( alunoId ) {
    const url = `http://localhost/DS2M20201/Vinicius_Reis/apiphp-master/alunos/${alunoId}`;
    const options = {
      method: 'DELETE'
    };
  
    fetch(url, options )
  }
  
deleteAluno( 5 );

function updateAluno( aluno ) {
    const url = `http://localhost/DS2M20201/Vinicius_Reis/apiphp-master/alunos/${aluno.id}`;
    const options = {
      method: 'PUT',
      body: JSON.stringify( aluno )
    };
  
    fetch(url, options )
  }
  
    const alunoUpdate = {
      "id":"3",
      "nome": "Vinicius R.",
  };
  
  updateAluno(alunoUpdate);

  showAlunos();

$novo.addEventListener('click',exibirModal);
$fechar.addEventListener('click',fecharModal);
$salvar.addEventListener('click',salvarAluno);