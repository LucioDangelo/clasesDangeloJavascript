//Pedir un numero por promt, repetir la salida del mensaje 'Hola' la cantidad de veces ingresada.


let numerodeveces = Number(prompt('Ingresa un numero mayor a 0:'));

if(isNaN(numerodeveces)) {
    alert('Seleccione un numero')
}
else{
    for (let i=1; i<=numerodeveces;i++)
    console.log('Hola')
}