//Calcula el precio final de un producto. Teniendo en cuenta el costo de envio por distancia, el IVA y un descuento.

//Boton
var button = document.querySelector("button");

//funcion que convierte a minusculas todo lo que ingreso
const normalizeInput = (mensaje) => prompt(mensaje).trim().toLocaleLowerCase();

//funcion iva
const iva = (a) => a * 0.21;

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
      }

      let iniciar2 = normalizeInput("Desea calcular otro precio? Si/No");
      iniciar = iniciar + iniciar2;
    } while (!iniciar.includes("no"));
  } else {
    alert("Vuelva pronto");
  }
};
