//Calcula el precio final de un producto. Teniendo en cuenta el costo de envio por distancia, el IVA y un descuento.

//Boton
//var button = document.querySelector("button");
const buttonMas = document.getElementById("buttonMas");
const buttonTodos = document.getElementById("buttonTodos");
const buttonMenos = document.getElementById("buttonMenos");
const button = document.getElementById("buttonCalcular");
const myText1 = document.getElementById("theDiv1");
const myText2 = document.getElementById("theDiv2");
const myText3 = document.getElementById("theDiv3");
const myText4 = document.getElementById("theDiv4");
const myText5 = document.getElementById("theDiv5");
const myText6 = document.getElementById("theDiv6");
const myText7 = document.getElementById("theDiv7");
const autos1 = document.getElementById("autosTodos");

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
        direccionCercana = "a1";
        break;
      case "b1":
        precioZona = 15;
        direccionCercana = "b1";
        break;
      case "c1":
        precioZona = 20;
        direccionCercana = "c1";
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

const puntoDeRetiro = [
  {
    id: 1,
    zonaAsociada: "a1",
    direccion: "Esmeralda 515, Microcentro",
    link: "https://goo.gl/maps/kc4Yd4bEq8ugcccS8",
  },
  {
    id: 2,
    zonaAsociada: "b1",
    direccion: "Cramer 600, Colegiales",
    link: "https://goo.gl/maps/8ns5WEUg25m8zkfc8",
  },
  {
    id: 3,
    zonaAsociada: "c1",
    direccion: "Quesada 5100, Villa Urquiza",
    link: "https://goo.gl/maps/FbKTfynZYcT5Z34e6",
  },
];

const autosDisponibles = [
  { id: 1, marca: "BMW", modelo: "A1", precio: 10000 },
  { id: 2, marca: "AUDI", modelo: "B1", precio: 20000 },
  { id: 3, marca: "FERRARI", modelo: "C1", precio: 30000 },
];

//logica de la lista de precios
buttonTodos.onclick = function () {
  let agregar = "";
  const listaAutos = autosDisponibles.map((auto) => auto);
  console.log(listaAutos);
  for (let i = 0; i < listaAutos.length; i++) {
    autos = listaAutos[i];
    console.log(autos);
    agregar += `<tr><td>${autos.modelo}</td><td>${autos.marca}</td><td>${autos.precio}</td></tr>`;
  }
  autos1.innerHTML = agregar;
};

//logica de la lista de precios menores a 15k
buttonMenos.onclick = function () {
  let agregar = "";
  const listaAutos = autosDisponibles.filter((auto) => auto.precio < 15000);
  console.log(listaAutos);
  for (let i = 0; i < listaAutos.length; i++) {
    autos = listaAutos[i];
    console.log(autos);
    agregar += `<tr><td>${autos.modelo}</td><td>${autos.marca}</td><td>${autos.precio}</td></tr>`;
  }
  autos1.innerHTML = agregar;
};

//logica de la lista de precios mayores a 15k
buttonMas.onclick = function () {
  let agregar = "";
  const listaAutos = autosDisponibles.filter((auto) => auto.precio > 15000);
  console.log(listaAutos);
  for (let i = 0; i < listaAutos.length; i++) {
    autos = listaAutos[i];
    console.log(autos);
    agregar += `<tr><td>${autos.modelo}</td><td>${autos.marca}</td><td>${autos.precio}</td></tr>`;
  }
  autos1.innerHTML = agregar;
};

//logica del boton
button.onclick = function () {
  let iniciar = normalizeInput("Desea calcular un precio? Si/No");
  if (iniciar.includes("si")) {
    do {
      distancia();

      //busca el punto de retiro mas cercano a la zona asociada
      const retirar = puntoDeRetiro.find(
        (retiro) => retiro.zonaAsociada === direccionCercana
      );

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
        myText5.innerHTML = retirar.direccion;
        myText6.innerHTML = retirar.link;
      }

      let iniciar2 = normalizeInput("Desea calcular otro precio? Si/No");
      iniciar = iniciar + iniciar2;
    } while (!iniciar.includes("no"));
    button.classList.add('nuevaClase');
  } else {
    alert("Vuelva pronto");
  }
};
