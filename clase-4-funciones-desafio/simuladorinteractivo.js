//Calcula el precio final de un producto. Teniendo en cuenta el costo de envio por distancia, el IVA y un descuento.

//Boton
var button = document.querySelector("button");
const myText1 = document.getElementById("theDiv1");
const myText2 = document.getElementById("theDiv2");
const myText3 = document.getElementById("theDiv3");
const myText4 = document.getElementById("theDiv4");

//funcion que convierte a minusculas todo lo que ingreso
const normalizeInput = (mensaje) => prompt(mensaje).trim().toLocaleLowerCase();

//funcion iva
const iva = (a) => a * 1.21;

//funcion distancia, en donde se calcula entre varias zonas
const distancia = () => {
  do {
    const zona = normalizeInput("Ingresa la zona de entrega");
    switch (zona) {
      case "a1":
        precioZona = 10;
        break;
      case "b1":
        precioZona = 15;
        break;
      case "c1":
        precioZona = 20;
        break;
      default:
        alert(
          `Ingresa una zona existente. Haga referencia al mapa de zonas de nuestra web`
        );
        precioZona = "A";
    }
  } while (isNaN(precioZona));
};

//pushear
const pushear = () =>
  pedidosRealizados.push(
    new pedidosRealizados(precioZona, precioProducto, descuento, precioFinal)
  );

//array de objetos
var historialVentas = [
  { precioProducto: 10, precioZona: 10, descuento: 10, precioFinal: 100 },
];

//logica del boton
button.onclick = function () {
  let iniciar = normalizeInput("Desea calcular un precio? Si/No");
  if (iniciar.includes("si")) {
    do {
      distancia();

      let precioProducto = Number(
        normalizeInput("ingresa el precio del producto")
      );
      let descuento = Number(
        normalizeInput("ingresa el descuento del producto")
      );

      if (isNaN(precioProducto) || isNaN(descuento)) {
        alert(`Porfavor ingrese datos numericos`);
      } else {
        let precioFinal = precioZona + iva(precioProducto) - descuento;

        alert(
          "El precio final a pagar es de: " +
            precioFinal +
            "$ (Precio producto sin IVA: " +
            precioProducto +
            "$, Descuento: " +
            descuento +
            "$, Precio de Envio: " +
            precioZona +
            "$ )"
        );

        historialVentas.pop();
        historialVentas.push({
          precioProducto: precioProducto,
          precioZona: precioZona,
          descuento: descuento,
          precioFinal: precioFinal,
        });

        for (let i = 0; i < historialVentas.length; i++) {
          console.log(historialVentas[i]);
        }

        myText1.innerHTML = historialVentas[0].precioProducto;
        myText2.innerHTML = historialVentas[0].precioZona;
        myText3.innerHTML = historialVentas[0].descuento;
        myText4.innerHTML = historialVentas[0].precioFinal;
      }

      let iniciar2 = normalizeInput("Desea calcular otro precio? Si/No");
      iniciar = iniciar + iniciar2;
    } while (!iniciar.includes("no"));
  } else {
    alert("Vuelva pronto");
  }
};
