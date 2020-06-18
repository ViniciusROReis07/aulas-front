"use stritc";
const verificaCep = (cep) => document.getElementById('cep').reportValidity();

const encontrarCep =  ( cep ) => {
    
  if( verificaCep (cep) ){
        const url = `https://viacep.com.br/ws/${cep}/json`;
        fetch (url).then ( resposta => resposta.json () )
            .then ( dados => prencherForm (dados))
            .catch( err => console.log(err));
            document.getElementById ('endereco').value = 'pesquisando cep...';
  }
     
}


const prencherForm = ( dados ) => {
    document.getElementById ( 'endereco' ).value = dados.logradouro;

    document.getElementById ( 'bairro' ).value = dados.bairro;
    
    document.getElementById ( 'cidade' ).value = dados.localidade;
    
    document.getElementById ( 'estado' ).value = dados.uf;
}


const exibirDados= () => {
   encontrarCep($cep.value);
}
document.getElementById('cep').addEventListener('blur', ( e ) => encontrarCep( e.target.value ));


