//Calcula el precio final de un producto. Teniendo en cuenta el costo de envio por distancia, el IVA y un descuento.

var button = document.querySelector('button');
button.onclick = function() {

let iniciar = prompt('Desea calcular un precio? Si/No')
if (iniciar.includes("si")) {

do{
  
function distancia (){
  do{
     const zona = prompt('Ingresa la zona de entrega');
     switch (zona) {
         case 'a1':
             precioZona = 10;
        break;
         case 'b1':
            precioZona = 15;
         break;
         case 'c1':
            precioZona = 20;
         break;
         default:
         alert(`Ingresa una zona existente. Haga referencia al mapa de zonas de nuestra web`);
            precioZona = "A";
         
     }
  } while (isNaN(precioZona))
    }

    distancia();

const suma = (a,b) => a + b
const resta = (a,b) => a - b
const iva = (a) => a * 0.21


let precioProducto = Number(prompt('ingresa el precio del producto'));
let descuento = Number(prompt('ingresa el descuento del producto'));

let precioFinal = resta(suma(precioZona,suma(precioProducto, iva(precioProducto))),descuento);

console.log("El precio final a pagar es de: " + precioFinal + "$ (Precio producto sin IVA: " + precioProducto + "$, Descuento: " + descuento + "$, Precio de Envio: " + precioZona + "$ )");
  
  let iniciar2 = prompt('Desea calcular otro precio? Si/No')
  iniciar = iniciar + iniciar2
} while (!iniciar.includes("no"))
}
else { console.log("Vuelva pronto")}

}