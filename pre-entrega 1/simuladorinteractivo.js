//var button = document.querySelector("button");
//const button = document.getElementById("buttonCalcular");

//botones del paso 1
const buttonMas = document.getElementById("buttonMas");
const buttonTodos = document.getElementById("buttonTodos");
const buttonMenos = document.getElementById("buttonMenos");
const tablaHabitaciones = document.getElementById("habitacionesTodos");
const btnGuardar = document.getElementById("btnGuardar");
const btnBorrar = document.getElementById("btnBorrar");
//boton del paso 2
const calcularHabitacion = document.getElementById("buttonHabitacion");
//divs del paso 2
const TextNombreHabitacion = document.getElementById("Div1");
const TextPrecioHabitacion = document.getElementById("Div2");
const TextPlaya = document.getElementById("Div3");
const TextDesayuno = document.getElementById("Div4");
const TextTemporada = document.getElementById("Div5");
const TextPrecioFinal = document.getElementById("Div6");
//formulario paso 3
const formulario = document.getElementById("formulario");

//funcion iva
const iva = (a) => a * 1.21;

//habitaciones y sus precios
const habitacionesDisponibles = [
  { id: 1, playa: "No", habitacion: "Clasica", precio: 10000 },
  { id: 2, playa: "No", habitacion: "Club ", precio: 20000 },
  { id: 3, playa: "Si", habitacion: "Premier", precio: 30000 },
  { id: 4, playa: "Si", habitacion: "Belgrano", precio: 40000 },
  { id: 5, playa: "Si", habitacion: "San Martin", precio: 50000 },
];

//logica de la lista de precios
buttonTodos.onclick = function () {
  let agregar = "";
  const listaHabitacion = habitacionesDisponibles.map(
    (habitacion) => habitacion
  );
  console.log(listaHabitacion);
  for (let i = 0; i < listaHabitacion.length; i++) {
    habitacione = listaHabitacion[i];
    console.log(habitacione);
    agregar += `<tr><td>${habitacione.habitacion}</td><td>${habitacione.playa}</td><td>${habitacione.precio}</td></tr>`;
  }
  tablaHabitaciones.innerHTML = agregar;
};

//Tenes dos funciones enlazadas a un buttonMas y buttonMenos que son exactamente iguales,
//solamente cambian en la condición. Ambas funciones deberías reemplazarlas por una sola.
//Piensa en la forma de cambiar la condición dependiendo el botón que se presiona

funcionRepetida = (listaHabitacion) => {
  var agregar = "";
  for (let i = 0; i < listaHabitacion.length; i++) {
    habitacione = listaHabitacion[i];
    console.log(habitacione);
    agregar += `<tr><td>${habitacione.habitacion}</td><td>${habitacione.playa}</td><td>${habitacione.precio}</td></tr>`;
  }
  tablaHabitaciones.innerHTML = agregar;
};

//logica de la lista de precios menores a 15k
buttonMenos.onclick = function () {
  const listaHabitacion = habitacionesDisponibles.filter(
    (habitacion) => habitacion.precio < 31000
  );
  funcionRepetida(listaHabitacion);
};

//logica de la lista de precios mayores a 15k
buttonMas.onclick = function () {
  const listaHabitacion = habitacionesDisponibles.filter(
    (habitacion) => habitacion.precio > 31000
  );
  funcionRepetida(listaHabitacion);
};

//Botones para seleccionar habitacion
btnGuardar.addEventListener("click", () => {
  let val = document.getElementById("valorInput").value;
  localStorage.setItem("valorEnLS", val);

  let desayuno = document.getElementById("valorInputDesayuno").value;
  localStorage.setItem("valorDesayuno", desayuno);

  let mes = document.getElementById("valorInputMes").value;
  localStorage.setItem("valorMes", mes);

  document.getElementById("valorInput").value = "";
  document.getElementById("valorInputDesayuno").value = "";
  document.getElementById("valorInputMes").value = "";

  let val2 = localStorage.getItem("valorEnLS");
  document.getElementById("valorDesdeLS").innerHTML = val2;

  let desayuno2 = localStorage.getItem("valorDesayuno");
  document.getElementById("valorDesdeLSDesayuno").innerHTML = desayuno2;

  let mes2 = localStorage.getItem("valorMes");
  document.getElementById("valorDesdeLSMes").innerHTML = mes2;

  document.getElementById("mitad").classList.remove("d-none");
});

btnBorrar.addEventListener("click", () => {
  document.getElementById("valorDesdeLS").innerHTML = "";
  document.getElementById("valorDesdeLSDesayuno").innerHTML = "";
  document.getElementById("valorDesdeLSMes").innerHTML = "";
  localStorage.clear();
  document.getElementById("mitad").classList.add("d-none");
});

const normalizar = () => {
  let val3 = localStorage.getItem("valorEnLS");
  val4 = val3.trim().toLocaleLowerCase();

  let val5 = localStorage.getItem("valorDesayuno");
  val6 = val5.trim().toLocaleLowerCase();

  let val7 = localStorage.getItem("valorMes");
  val8 = val7.trim().toLocaleLowerCase();
};

const habitaciones = () => {
  do {
    normalizar();
    const habitacion = val4;

    switch (habitacion) {
      case "clasica":
        precioHabitacion = 10000;
        vistaAlaPlaya = "no";
        desayuno = val6;
        habitacion1 = habitacion;
        break;

      case "club":
        precioHabitacion = 20000;
        vistaAlaPlaya = "no";
        desayuno = val6;
        habitacion1 = habitacion;
        break;

      case "premier":
        precioHabitacion = 30000;
        vistaAlaPlaya = "si";
        desayuno = val6;
        habitacion1 = habitacion;
        break;

      case "belgrano":
        precioHabitacion = 40000;
        vistaAlaPlaya = "si";
        desayuno = val6;
        habitacion1 = habitacion;
        break;

      case "san martin":
        precioHabitacion = 50000;
        vistaAlaPlaya = "si";
        desayuno = val6;
        habitacion1 = habitacion;
        break;

      default:
        precioHabitacion = 0;
        document.getElementById("mitad").classList.add("d-none");
        document.getElementById("ErrorHabitacion").classList.remove("d-none");
    }
  } while (isNaN(precioHabitacion));
};

const mesReserva = () => {
  do {
    normalizar();
    const mes = val8;

    switch (mes) {
      case "enero":
        precioTemporada = 2;
        mesDeReserva = "Enero";
        break;

      case "febrero":
        precioTemporada = 2;
        mesDeReserva = "Febrero";
        break;

      case "marzo":
        precioTemporada = 1;
        mesDeReserva = "Marzo";
        break;

      case "abril":
        precioTemporada = 1;
        mesDeReserva = "Abril";
        break;

      case "mayo":
        precioTemporada = 1;
        mesDeReserva = "Mayo";
        break;

      case "junio":
        precioTemporada = 2;
        mesDeReserva = "Junio";
        break;

      case "julio":
        precioTemporada = 2;
        mesDeReserva = "Julio";
        break;

      case "agosto":
        precioTemporada = 1;
        mesDeReserva = "Agosto";
        break;

      case "septiembre":
        precioTemporada = 1;
        mesDeReserva = "Septiembre";
        break;

      case "octubre":
        precioTemporada = 1;
        mesDeReserva = "Octubre";
        break;

      case "noviembre":
        precioTemporada = 1;
        mesDeReserva = "Noviembre";
        break;

      case "diciembre":
        precioTemporada = 2;
        mesDeReserva = "Diciembre";
        break;

      default:
        document.getElementById("ErrorMes").classList.remove("d-none");
        document.getElementById("mitad").classList.add("d-none");
        precioTemporada = 0;
    }
  } while (isNaN(precioHabitacion));
};

var historialReservas = [
  {
    habitacion1: 10,
    precioHabitacion: 10,
    vistaAlaPlaya: 10,
    desayuno: 100,
    precioTemporada: 10,
    precioTotal: 10,
    mesDeReserva: 10,
  },
];

//funcionalidad del boton, solo aparece si se completo el paso 1
calcularHabitacion.onclick = function () {
  habitaciones();
  mesReserva();
  console.log(habitacion1);
  console.log(precioHabitacion);
  console.log(vistaAlaPlaya);
  console.log(desayuno);
  console.log(precioTemporada);
  console.log(precioTotal);

  if (desayuno == "no") {
    var precioTotal = iva(precioHabitacion * precioTemporada);
  } else {
    var precioTotal = iva((precioHabitacion + 1000) * precioTemporada);
  }

  historialReservas.pop();
  historialReservas.push({
    habitacion1: habitacion1,
    precioHabitacion: precioHabitacion,
    vistaAlaPlaya: vistaAlaPlaya,
    desayuno: desayuno,
    precioTemporada: precioTemporada,
    precioTotal: precioTotal,
    mesDeReserva: mesDeReserva,
  });

  TextNombreHabitacion.innerHTML = historialReservas[0].habitacion1;
  TextPrecioHabitacion.innerHTML = historialReservas[0].precioHabitacion + " $";
  TextPlaya.innerHTML = historialReservas[0].vistaAlaPlaya;
  TextDesayuno.innerHTML = historialReservas[0].desayuno;
  TextTemporada.innerHTML = historialReservas[0].mesDeReserva;
  TextPrecioFinal.innerHTML = historialReservas[0].precioTotal + " $";

  document.getElementById("principio").classList.add("d-none");
  document.getElementById("final").classList.remove("d-none");
};

//funcionalidad del boton de reserva, solo aparece si se completo el paso 2
btnReservar.addEventListener("click", () => {
  let nombreApellido = document.getElementById(
    "valorInputNombreApellido"
  ).value;
  localStorage.setItem("NombreApellido", nombreApellido);
  document.getElementById("valorInputNombreApellido").value = "";

  let mail = document.getElementById("valorInputMail").value;
  localStorage.setItem("valorMail", mail);
  document.getElementById("valorInputMail").value = "";

  let valNombreApellido = localStorage.getItem("NombreApellido");
  let valMail = localStorage.getItem("valorMail");
  let valHabitacion = localStorage.getItem("valorEnLS");
  let valDesayuno = localStorage.getItem("valorDesayuno");
  let valMes = localStorage.getItem("valorMes");

  if (valNombreApellido == "" || valMail == "") {
    document.getElementById("valorDesdeNombreApellido").innerHTML =
      "Completar todos los campos.";
  } else {
    document.getElementById("valorDesdeNombreApellido").innerHTML =
      "RESERVA A NOMBRE DE: " + valNombreApellido + " REALIZADA CON EXITO.";
    document.getElementById("valorDesdeNombreApellido2").innerHTML =
      "HABITACION: " +
      valHabitacion +
      " ,CON DESAYUNO INCLUIDO? " +
      valDesayuno +
      ".";
    document.getElementById("valorDesdeNombreApellido3").innerHTML =
      "EN EL MES DE: " +
      valMes +
      ". RECIBIRA LA CONFIRMACION AL MAIL: " +
      valMail +
      ".";
    document.getElementById("mitad").classList.add("d-none");
  }
});
