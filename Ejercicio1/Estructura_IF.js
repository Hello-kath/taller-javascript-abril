
// Ejercicio 1: un programa que pida al usuario un número y muestre si es par o impar  

// paso 1: declaro la variable numero para almacenar el valor ingresado
// let numero =  parseInt(prompt("ingresa un número"));
// paso 3: verificar si el número es par o impar para ello declaro la siguiente variable 
// let esPar = numero % 2 === 0;
// paso 3: con la estructura if else verifico si el número es par o impar 
// if (esPar) {
// realizo la siguiente concatenacion para mostrar el resultado 
// alert("El número" + " " + numero + " " + "es par.");
// } else {
//  alert("El número" + " " + numero + " " + "es impar.");
// }
//________________________________________________________________________________________________

// Ejercicio 2: Escribe un programa que pida al usuario dos números y muestre el mayor de ellos  
// paso 1: creo dos variables para almacenar los numeros solicitador
/* let numero1 = parseInt(prompt("ingresa un número"));
let numero2 = parseInt(prompt("ingresa un segundo número"));

if (numero1 > numero2) {
 alert("El número" + " " + numero1 + " " + "es mayor que" + " " + numero2 );
 
} else{
 alert("El número" + " " + numero2 + " " + "es mayor que" + " " + numero1);
}*/
//_________________________________________________________________________________________________

// Ejercicio 3: Escribe un programa que pida al usuario un año y muestre si es bisiesto o no 
// let ingresaYear = parseInt(prompt("ingresa un año"));

//  if (ingresaYear % 4 === 0) {
//     alert("El año" + " " + ingresaYear + " " + "es bisiesto");

//  } else {
//     alert("El año" + " " + ingresaYear + " " + "no es bisiesto");
//  }
//___________________________________________________________________________________________________

//Ejercicio 4: Escribe un programa que pida al usuario una letra y muestre si es vocal o consonante. 
// let letra = prompt("ingresa una letra").toLowerCase();
// let vocales = ["a", "e", "i", "o", "u"];
// if (vocales.includes(letra)) {
//     alert("La letra" + " " + letra + " " + "es una vocal");
// } else {
//     alert("La letra" + " " + letra + " " + "es una consonante");
// }
//__________________________________________________________________________________________________

//Ejercicio 5: Escribe un programa que pida al usuario un mes y muestre el número de días que tiene.
// let mes = prompt("ingresa un mes");
//utilizo el operador or para enlazar las condiciones
// if (mes === "enero" || mes === "marzo" || mes === "mayo" || mes === "julio" || mes === "agosto" || mes === "octubre" || mes === "diciembre"){
//     alert( `El mes ${mes} tiene 31 dias`);
//el else if para que si la otra opcion no se cumpla pase a la siguiente
// }else if (mes === "febrero"){
//     alert(`el mes ${mes} tiene 28 dias a exepcion de los años bisiestos que tiene 29 días.`);
// }else if(mes === "abril" || mes === "junio" || mes === "septiembre" || mes === "novimbre"){
//     alert(`el mes ${mes} tiene 30 dias`);
// }else {
//     alert("Por favor ingrese un mes valido");
// }
//_________________________________________________________________________________________________

//EJERCICIO 6: Escribe un programa que pida al usuario una calificación numérica y muestre su equivalente en letras (A, B, C, D o F) 
// let calificacion = parseFloat(prompt("ingresa tu calificacion del 1 a 5"));
// if (calificacion >= 5.0) {
//     alert("Tu calificacion es A");
// } else if (calificacion >= 4.5) {
//     alert("Tu calificacion es B");

// } else if (calificacion >= 3.5) {
//     alert("Tu calificacion es C");

// } else if (calificacion >= 3.0) {
//     alert("Tu calificacion es D");

// } else if (calificacion >= 2.5) {
//     alert("Tu calificacion es E");

// } else if (calificacion <= 2.0) {
//     alert("Tu calificacion es F");

// } else if (calificacion <= 1.5) {
//     alert("Tu calificacion es F");

// } else if (calificacion <= 1.0) {
//     alert("Tu calificacion es F");

// } else {
//     alert("Por favor ingresa una calificacion valida");
// }
//_________________________________________________________________________________________________

//EJERCICIO 7: Escribe un programa que pida al usuario una temperatura en grados Celsius y muestre su equivalente en grados Fahrenheit

// let Celsius = parseFloat(prompt("ingresa la temperatura en grados celsius"));

// if (Fahrenheit = (Celsius * 9 / 5) + 32) {
//     alert(`${Celsius} °C grados celsius equivalen a ${Fahrenheit} °F grados fahrenheit.`);

// } else {
//     alert("Por favor ingresa una temperatura valida");

// }
//________________________________________________________________________________________________

//Ejercicio 8: Escribe un programa que pida al usuario una contraseña y muestre si es correcta o no . La contraseña válida es “ 1234 ” .

//  let contraseña = prompt("ingresa tu contraseña");
//  if (contraseña == "1234") {
//      alert("Tu contraseña es correcta");

//  } else {
//      alert("Tu contraseña es incorrecta");

//  }

//_________________________________________________________________________________________________

//Ejercicio 9: Escribe un programa que pida al usuario un color y muestre si es uno de los colores del arcoíris o no.

// let color = prompt("ingresa un color");

// if (color === "rojo" || color === "naranja" || color === "amarillo" || color === "verde" || color === "azul oscuro" || color === "azul" || color === "violeta") {
//     alert(`El ${color} hace parte de los colores del arcoíris`);
// } else {
//     alert(`El ${color} no hace parte de los colores del arcoíris`);
// }
//_________________________________________________________________________________________________

//Ejercicio 10:  Escribe un programa que pida al usuario un animal y muestre si es un mamífero, un ave, un reptil, un anfibio, un pez o un invertebrado 

// let nombreAnimal = prompt("ingresa el nombre de un animal:").toLocaleLowerCase();

// //utilizare arrays para clasificar los animales

// const mamiferos = ["perro", "gato", "lobo", "leon", "tigre", "leopardo", "conejo", "siervo", "caballo", "obeja", "cabra", "elefante", "ballena"];
// const aves = ["pajaro", "loro", "canario", "paloma", "codorniz", "cuervo", "colibri", "torcaza", "buho", "agila", "lechuza"];
// const reptiles = ["serpiente", "cocodrilo", "iguana", "tortuga", "lagarto"];
// const anfibios = ["rana", "lagartija"]
// const pez = ["tiburon", "pez payazo", "delfin"]
// const invertebrado = ["caracol", "babosa",]

// //para vericar si el animal ingresado esta en el array

// if (mamiferos.includes(nombreAnimal)) {
//     alert(`${nombreAnimal} es un mamífero.`);
// } else if (aves.includes(nombreAnimal)) {
//     alert(`${nombreAnimal} es un ave`);
// } else if (reptiles.includes(nombreAnimal)) {
//     alert(`${nombreAnimal} es un reptil`);
// } else if (anfibios.includes(nombreAnimal)) {
//     alert(`${nombreAnimal} es un anfibio.`);
// } else if (peces.includes(nombreAnimal)) {
//     alert(`${nombreAnimal} es un pez`);
// } else {
//     alert(`${nombreAnimal} no se encuentra en la lista de clasificació.`);
// }
// __________________________________________________________________________________________

//ESTRUCTURA DE CONTROL ANIDADA:
// Ejercicio 1:  Escribe un programa que pida al usuario un número y muestre si es positivo, negativo o cero.
 
 //let numero = parseInt(prompt("ingresa un numero"));

//  if (numero > 0) {
//      alert(`${numero} es positivo`);
//  } else if (numero < 0) {
//      alert(`${numero} es negativo`);
//  } else {
//      alert(`${numero} es cero`);
//  }
//_____________________________________________________________________________________________

//Ejercicio 2:  Escribe un programa que pida al usuario tres números y muestre el mayor, el menor y el medio de ellos.

// const num1 = parseInt(prompt("Introduce el primer número"));
// const num2 = parseInt(prompt("Introduce el segundo número"));
// const num3 = parseInt(prompt("Introduce el tercer número"));

// let mayor, menor, medio;

// if (num1 >= num2 && num1 >= num3) {
//     mayor = num1;
//     if (num2 >= num3) {
//         medio = num2;
//         menor = num3;
//     } else {
//         medio = num3;
//         menor = num2;
//     }
// } else if (num2 >= num1 && num2 >= num3) {
//     mayor = num2;
//     if (num1 >= num3) {
//         medio = num1;
//         menor = num3;
//     } else {
//         medio = num3;
//         menor = num1;
//     }
// } else {
//     mayor = num3;
//     if (num1 >= num2) {
//         medio = num1;
//         menor = num2;
//     } else {
//         medio = num2;
//         menor = num1;
//     }
// }

// alert(`El mayor es ${mayor}, el menor es ${menor} y el medio es ${medio}`);
//________________________________________________________________

//Ejercicio 3:  Escribe un programa que pida al usuario un día de la semana y muestre si es laboral o no.

// let dia = parseInt(prompt("Ingresa un día de la semana del 1"));

// // verifico que el numero este entre 1 y 7

// if (dia >= 1 && dia <= 7) {
//     if (dia >= 1 && dia <= 7) { 
//         if (dia <= 5) {
//             alert("Es un día laboral");
//         } else {
//             alert("Es un día no laboral");
//         }
//     } else {
//         alert("Es un día no laboral");
//     }
// } else {
//     alert("El día introducido no es correcto");
// }
//_________________________________________________________________________________________

//Ejercicio: 4  Escribe un programa que pida al usuario un mes y muestre la estación del año a la que pertenece.

// let mes = prompt("Ingresa un mes:").toLocaleLowerCase();

// // Verifica el mes y muestra la estación correspondiente
// if (mes === "enero" || mes === "febrero" || mes === "diciembre") {
//     alert("La estación es invierno.");
// } else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
//     alert("La estación es primavera.");
// } else if (mes === "junio" || mes === "julio" || mes === "agosto") {
//     alert("La estación es verano.");
// } else if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
//     alert("La estación es otoño.");
// } else {
//     alert("Mes no válido. Por favor, ingresa un mes válido.");
// }
//______________________________________________________________________________

//Ejercicio 5: Escribe un programa que pida al usuario una edad y muestre si es menor de edad, mayor de edad o jubilado.

// let edad = parseInt(prompt("Ingresa tu edad:"));

// if(edad >= 18){
//     if(edad >= 65){
//         alert("Es jubilado");
//     }else{
//         alert("Es mayor de edad");
//     }
// }else{
//     alert("Es menor de edad");
// }
//________________________________________________________________________________________

//Ejercicio 6: Escribe un programa que pida al usuario un carácter y muestre si es una letra mayúscula, una letra minúscula, un número o un símbolo.

// let caracter = prompt("Ingresa un caracter:");

// //el charCodeAt devuelve el valor ASCII de un caracter y el valor ASCII de las letras mayúsculas va de 65 a 90 y las minúsculas de 97 a 122

// if (caracter.charCodeAt(0) >= 65 && caracter.charCodeAt(0) <= 90) {
//     alert("Es una letra mayúscula.");
// }else if (caracter.charCodeAt(0) >= 97 && caracter.charCodeAt(0) <= 122) {
//     alert("Es una letra minúscula.");

// }else if (caracter.charCodeAt(0) >= 48 && caracter.charCodeAt(0) <= 57) {
//     alert("Es un número.");

// }else{
//     alert("Es un símbolo.");
// }
//_________________________________________________________________________________

// Ejercicio 7: Escribe un programa que pida al usuario dos números enteros y muestre si son divisibles entre sí o no

// let num1 = parseInt(prompt("Ingresa un número:"));
// let num2 = parseInt(prompt("Ingresa otro número:"));

// if (num1 % num2 == 0) {
//     alert("Son divisibles entre sí.");
// }else{
//     alert("No son divisibles entre sí.");
// }if (num2 % num1 == 0) {
//     alert("Son divisibles entre sí.");
// }else{
//     alert("No son divisibles entre sí.");
// }
//_________________________________________________________________________________

//Ejercicio 8:  Escribe un programa que pida al usuario una nota numérica y muestre su equivalente en letras según el siguiente criterio: A ( 10 - 9), B (8 - 7), C (6 - 5), D (4 - 3), F (2 - 0)

// let nota = parseInt(prompt("Ingresa una nota numérica:"));

// if (nota === 10 || nota === 9) {
//     alert("su calificacion es: A");
// }else if (nota === 8 || nota === 7) {
//     alert("sus calificacion es: B");

// }if (nota === 6 || nota === 5) {
//     alert("su calificacion es: C");
// } else if (nota === 4 || nota === 3) {
//     alert("su calificacion es: D");

// }if (nota === 2 || nota === 0) {
//     alert("su calificacion es: F");
// }else{
//     alert("Nota no válida.");
// }
//














