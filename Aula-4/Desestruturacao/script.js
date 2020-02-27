"use strict";

//Desestruturação de array
const alunoH = ['Harry Potter', '5', '5', '5','16'];

const [nomeH, nota1=0, nota2=0,nota3=0, idade] = alunoH;


//Desestruturação de objetos

const alunoR = {
    nomeR: "Rony Weasley",
    n1: "3",
    n2: "5",
    n3: "4",
    idd: "17"
};

const {nomeR, idd}= alunoR;



console.log (nomeR,idd);

console.log (nomeH, idade);


//Rest ...o que vem depois e resto

const [cliente, ...valores] = alunoH ;

console.log(valores);

//Spread espalha os valores 
const maior=Math.max(...valores);
console.log (maior);

const soma = ( ...num ) => num.reduce( (acc,num ) => acc+num );

console.log (soma( 10,10,10) );