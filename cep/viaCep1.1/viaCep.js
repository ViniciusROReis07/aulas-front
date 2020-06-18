"use stritc";
const verificaCep = (cep) => document.getElementById('cep').reportValidity();

const encontrarCep = async ( cep ) => {
    
  if( verificaCep (cep) ){
          const url = `https://viacep.com.br/ws/${cep}/json`;
          const getAddress = await fetch( url );
          const address= await getAddress.json();
          prencherForm( address );
        
  }
     
}


const prencherForm = ( dados ) => {
    
    if(dados.erro){
        document.getElementById ( 'endereco' ).value = '';

        document.getElementById ( 'bairro' ).value = '';

        document.getElementById ( 'cidade' ).value = '';

        document.getElementById ( 'estado' ).value = '';
        
    }else{
        document.getElementById ( 'endereco' ).value = dados.logradouro;

        document.getElementById ( 'bairro' ).value = dados.bairro;

        document.getElementById ( 'cidade' ).value = dados.localidade;

        document.getElementById ( 'estado' ).value = dados.uf;
    }
}


const maskCep = ( $el ) => {
    let aux= $el.value;
    aux = aux.replace (/[^0-9]/g, '');
    aux = aux.replace (/(.{5})(.)/,'$1-$2');
    $el.value = aux;
}

document.getElementById('cep').addEventListener('blur', ( e ) => encontrarCep( e.target.value ) );

document.getElementById('cep').addEventListener('keyup', ( e ) => maskCep( e.target ) );



