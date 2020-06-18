"use strict";

let id;


const loadImages = () => {
    const arrImg=[];

    for(let i=1; i<6;i++){
        arrImg.push(`./img/imagem (${i}).jpg`);
    }

 return arrImg;
} 

const insertImages= (images) => {
    const htmlImg= images.map (img => `<img class='images' src='${img}'>`).join(" ");
    
    const $container=document.getElementById('container');

    const $containerImages=document.createElement('div');

    const $next = document.getElementById('next');

    $containerImages.id='conteinerImgas';

    $containerImages.innerHTML += htmlImg;

    $container.insertBefore($containerImages, $next);
}

const next = () => {
    const $img = document.querySelectorAll ('.images');
    const max = ($img.length -1) * (-50) ;
    let marginLeft = +($img[0].style.marginLeft.replace("vw",""));

if( marginLeft == max ){
    marginLeft=50;
}


    $img[0].style.marginLeft=(marginLeft -50)+"vw";
   
}

const prev = () => {
    const $img = document.querySelectorAll ('.images');
    const max = ($img.length -1) * (50) ;
    let marginLeft = +($img[0].style.marginLeft.replace("vw",""));

  

if( marginLeft == 0 ){
    marginLeft=-250;
}


    $img[0].style.marginLeft=(marginLeft +50)+"vw";
   
}


const automatico = () => {

   id= setInterval(next,6000);
  
}

const parar = () => {
    clearInterval(id);
}



insertImages( loadImages() );

automatico();
parar();

document.getElementById('next').addEventListener('click',next);


document.getElementById('prev').addEventListener('click',prev );


