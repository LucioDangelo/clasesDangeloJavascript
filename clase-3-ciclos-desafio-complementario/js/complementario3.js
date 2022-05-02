//Pedir un numero mediante prompt y sumarle otro numero en cada repeticion, realizando una salida por cada resultado.

let total = Number(prompt('ingresar un numero'));
let numero2 = '';

do{
    let numero2 = Number(prompt('ingresar otro numero'))
    total = total+numero2
    console.log(total)
} while (total)