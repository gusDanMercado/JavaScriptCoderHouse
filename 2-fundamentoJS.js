let edad = 21;
let nombre = "Gustavo";
let es_mayor = true;

//console.log(edad);
//console.log(nombre);
//console.log(es_mayor);

let dinero = false;

if (edad >= 18 && dinero == true) {
  console.log("Podes ingresar al Bar");
} else {
  console.log("No podes ingresar al Bar");
}

// ciclos por repeticion

for (let i = 0; i < 5; i++) {
  console.log("Hola mundo", i);
}

// ciclo condicionales
/*
const passwordguardada = "1234";
let passwordingresado = prompt("Ingrese su contreña: ");

while (passwordguardada != passwordingresado) {
  passwordingresado = prompt("Contraseña incorrecta, Ingrese su contreña: ");
}
*/

const mensaje = document.getElementById("mensaje");
const bton = document.getElementById("cambiarDescuento");

let descuentoInicial;
// aqui tenemos una logica que puedeo modificar el descuento inicial

const descuentoPredeterminado = 10;

//let descuentoActual = descuentoInicial ?? descuentoPredeterminado;
let descuentoActual = descuentoInicial || descuentoPredeterminado;

mensaje.textContent = `El descuento actual es del ${descuentoActual}%`;

bton.addEventListener("click", () => {
  let descuentoingresado = prompt("Ingrese el descuento en porcentaje...");
  descuentoingresado = Number(descuentoingresado);

  //descuentoActual = descuentoingresado ?? descuentoPredeterminado;
  descuentoActual = descuentoingresado ?? descuentoPredeterminado;

  mensaje.textContent = `El descuento actual es del ${descuentoActual}%`;
});

/*
Actividad Practica
Crea un algoritmo utilizando un ciclo
*/

let nro = prompt("Ingrese cantidad de numero a ingresar: ");
let N = Number(nro);
let suma = 0;

for (let i = 0; i < N; i++) {
  nro = prompt("Ingrese nro: ");
  nro = Number(nro);

  suma = suma + nro;
  console.log(suma);
}

let texto = prompt("Ingrese texto: ");
texto = String(texto);

let textoFinal = texto;

while (texto !== "ESC") {
  texto = prompt("Ingrese texto: ");
  texto = String(texto);

  textoFinal = textoFinal + texto;

  console.log(textoFinal);
}

N = prompt("Ingrese cantidad de veces a repetir el ciclo: ");
N = Number(N);

for (let i = 0; i < N; i++) {
  console.log("Hola");
}
