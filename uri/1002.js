var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let raio=parseFloat( lines.shift() );

console.log("A="+(3.14159* Math.pow(raio,2)  ).toFixed(4) );