"use strict";

const notas=[2,8,15,0,8,]; 
const clientes =[
    { "nome": "Vinicius","idade": "16","cidade": "ItapeviCity" },
    { "nome": "Julia","idade": "16","cidade": "ItapeviCity" },
    { "nome": "Larrisa","idade": "16","cidade": "ItapeviCity" },
    { "nome": "Agatha","idade": "16","cidade": "Caracas" },




]
       


//notas.push ( prompt ("Digite uma nota") );

// Pqaradigma imperativo
// let notasAtualizadas = [];
// const limite=notas.length;
// for(let indice=0;indice<limite;indice++)
// {
//     notasAtualizadas.push ( notas [indice]*10 );
// }

/*MAP - retorna um novo array do mesmo tamanho modificado ou não;
argumentos
1º elemento
2º indice
3º array

*/
const notasAtualizadas = notas.map( (elemento) => elemento*10 );

/*FILTER - Retorna um novo array filtrando pela condição;
argumentos
1º elemento
2º indice
3º array 




*/

const notasAcimaDaMedia = notas.filter ( nota => nota >5 );

const notastotal = notas.reduce ( (acc, nota)=> acc + nota, 0 );

/*REDUCE - Retorna um unico valor;
argumentos do callback;
1º acumulador
2º elemento
3º indice 
4º array

*/

const notasPares100= notas.filter ( nota=> nota % 2 ==0  ).map( nota => nota + 100 );

const exibirDados = ( el, cliente ) => {

      
    el.innerHTML += `
        <div class="card text-white bg-info mb-3" style="width: 18vw;">
            <div class="card-header">
                ${cliente.nome}
            </div>
            <div class="card-body">
                <p>${cliente.cidade}</p>
                <p>${cliente.idade}</p>
            </div>
        </div>
    `;
}

const $resultados = document.getElementById ( 'resultados' );

clientes.forEach( cliente => exibirDados ($resultados, cliente) );

//elemento.forEach( elemento , indice , array,  => exibirDados ($resultados, cliente) )

//exibirDados ( $resultados, notas );
// exibirDados ( $resultados, notasPares100 );
// exibirDados ( $resultados, notasAcimaDaMedia );
//exibirDados ( $resultados, clientes, "Clientes" );
