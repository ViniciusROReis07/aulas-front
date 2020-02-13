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


const $calcular=document.getElementById('calcular');
const $exibir=document.getElementById('exibir');
const $conteiner=document.querySelector('.conteiner');


const calcularMedia = (n1,n2) => (parseInt(n1)+parseInt(n2)) /2;

const verificarSituacao = (media) =>media>=5? "Aprovado":"Reprovado";

const exibirMedia = () => {
    const $nome = document.getElementById('nome');
    console.log($nome.value);

    const n1=document.getElementById('nota1').value;
    const n2=document.getElementById('nota2').value;
    const $media=document.getElementById('media');
    const $situcao=document.getElementById('situacao');

    const media= calcularMedia(n1,n2);

    if( media >= 5){
        $situcao.value = "Aprovado";
        $situcao.classList.remove('Reprovado');
        $situcao.classList.add('aprovado');
    }else{
        $situcao.value = "Reprovado";
        $situcao.classList.remove('aprovado');
        $situcao.classList.add('reprovado');
        
    }
    
    $media.value=media;

    

    

}

const  defineConceito= ()=>{

    const media=document.getElementById('media').value
    const $conceito=document.getElementById('conceito');

      if(media<3){
          $conceito.value="E";
      }else if(media<5){
          $conceito.value="D";
      }else if(media<8){
          $conceito.value="C";
      }else if(media<10){
          $conceito.value="B"
      }else{
          $conceito.value="A";
      }
}

   /* //Armazenando função 
    const calc = function () {
        calcularMedia();
        calculaConceito();
            
    }*/

    //Arrow function
    const exibirResultados = () =>{
        exibirMedia();
        verificarSituacao();
        defineConceito();
    }

    const exibir= (el) => el.classList.add('exibir');

/*
    function calculara(){
        calcularMedia();
        calculaConceito();
    }*/

    /*function soma  (a,b){
        return a + b;
    }*/

    //Arrow ignora as chaves e o return , e se tiver um argumento somente pode ignorar as chaves
    const soma2 = (a,b)=> a+b;

    

$calcular.addEventListener('click', exibirResultados);
$exibir.addEventListener('click',( ) => exibir ($conteiner));
