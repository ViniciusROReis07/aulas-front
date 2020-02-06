/*const nome = "Vinicius";
const idade = 16;
const teste = true;
const produto = {produto : "mouse", quantidade:"45"};
const somar = ()=> 3+3;

console.log(typeof (nome) );
console.log(typeof (idade) );
console.log(typeof (teste) );
console.log(typeof (produto) );
console.log(typeof (somar) );

const cidade="Itapevi";
const estado= "São paulo";
const pais=`BR`;

console.log("minha cidade é: ", cidade);
console.log("Estado: ", estado);
console.log("Pais: "+pais);


let nota1=8;
let nota2=8;


console.log(nota1++);
console.log(++nota2);*/


const $calcular=document.getElementById("calcular");

alert(nome.value);

function calcularMedia(){
    const $nome = document.getElementById('nome');
    console.log($nome.value);

    const $nota1=document.getElementById('nota1');
    const $nota2=document.getElementById('nota2');
    const $media=document.getElementById('media');
    const $situcao=document.getElementById('situacao');

    const media=( parseInt( $nota1.value) + parseInt($nota2.value) )/2;

    if( media >= 5){
        $situcao.value = "aprovado";
        $situcao.classList.remove('Reprovado');
        $situcao.classList.add('aprovado');
    }else{
        $situcao.value = "Reprovado";
        $situcao.classList.remove('aprovado');
        $situcao.classList.add('reprovado');
        
    }
    
    $media.value=media;

}

$calcular.addEventListener('click', calcularMedia);
