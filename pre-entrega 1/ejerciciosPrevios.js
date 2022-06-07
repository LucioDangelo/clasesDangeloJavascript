const TextLocalCercano = document.getElementById("theDiv5");
const TextMapLink = document.getElementById("theDiv6");



//funcion que convierte a minusculas todo lo que ingreso
const normalizeInput = (mensaje) => prompt(mensaje).trim().toLocaleLowerCase();

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


  //logica del boton Principal
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
  
          TextPrecioProducto.innerHTML = historialVentas[0].precioProducto + " $";
          TextCostoEnvio.innerHTML = historialVentas[0].precioZona + " $";
          TextDescuento.innerHTML = historialVentas[0].descuento + " $";
          TextPrecioFinal.innerHTML = historialVentas[0].precioFinal + " $";
          TextLocalCercano.innerHTML = retirar.direccion;
          TextMapLink.innerHTML = retirar.link;
        }
  
        let iniciar2 = normalizeInput("Desea calcular otro precio? Si/No");
        iniciar = iniciar + iniciar2;
      } while (!iniciar.includes("no"));
      button.classList.add("nuevaClase");
    } else {
      alert("Vuelva pronto");
    }
  };


  //Submit del Form de reserva
const validarFormulario = (e) => {
    e.preventDefault();
    alert("Gracias por tu reserva, te responderemos a la brevedad");
  };
  
  formulario.addEventListener("submit", validarFormulario);