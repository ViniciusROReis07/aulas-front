"use strict";

const masks = { 
    text : value => value.replace(/[^a-z A-Z À-ÿ]/,''),
    cellphone : value => value.replace(/[^0-9 ]/g,'').replace(/(.{2})(.{5})(.{4})/,'($1) $2-$3'),
    email : value => value.replace(/[""'']/,''),
    cep : value => value.replace(/[^0-9 -]/,''),
    number : value => value.replace(/[^0-9]/,''),
    city : value => value.replace(/[.]/,''),
    bairro : value => value.replace(/[.]/,''),
};

export const validator = element => {
    element.addEventListener('input', ( event ) => {
        const $input = event.target;
        const typeMask = $input.dataset.type;

        if(masks.hasOwnProperty(typeMask)){
            $input.value = masks[typeMask]($input.value);
        }
    })
};

export const emailValidator = element => {
  element.addEventListener('blur', () => {
        if(!element.value.match (/.*@.*\..*/) ){
            alert("Verifique o e-email!");
        }
     });
}