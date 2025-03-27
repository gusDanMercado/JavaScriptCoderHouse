// condicionales
console.log("Clase 2");

// operadores
let numero = 15;
let esPar = numero % 2 == 0;
let esImpar = numero % 2 !== 0;

console.log("es par ", esPar);
console.log("es impar ", esImpar);

console.log("--------------------");

let edadUsuario = 12; //Number(prompt("Ingrese su edad: "));

let resultadoCondicion =
  edadUsuario >= 18
    ? console.log("Si podes pasar")
    : console.log("No podes pasar");

console.log("--------------------");

// controlar el acceso a un recital de musica
/**
 * si es mayor lo dejamos pasar
 * si es menor pero viene con un adulto, le mostramos que si puede pasar pero con el adulto
 * si es menor y no viene con un adulto, no puede pasar
 */

let edadPersona = 12;
let vieneAcompañado = true;

if (edadPersona >= 18) {
  console.log("Si podes pasar");
} else if (edadPersona < 18 && vieneAcompañado) {
  console.log("Si podes pasar pero con el adulto");
} else {
  console.log("No podes pasar");
}
