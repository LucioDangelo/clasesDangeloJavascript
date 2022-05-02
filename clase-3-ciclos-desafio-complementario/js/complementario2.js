//Pedir un texto mediante prompt, concatenar un valor en cada repeticion, realizando una salida por cada resultado hasta que se ingrese ESC.

let total = prompt('ingresar un texto');
let concatenar = '';

do{
    let concatenar = prompt('ingresar otro texto')
    total = total+' '+concatenar
    console.log(total)
} while (!total.includes("ESC"))