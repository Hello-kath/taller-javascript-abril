//Ejercicio 1: Calificación de letras: Escribe un programa que tome una letra como entrada y devuelva un mensaje según la letra ingresada (A, B, C, D, F)
//toUppercase convierte las letras a mayúsculas
// let letra = prompt("ingresa una letra (A, B, C, D, F):").toUpperCase();
// let mensaje;

// //los parentisis son para que se ejecute la funcion del switch
// switch (letra ) {
//     //el caso es para comparar con la condicion
//     case "A":
//         mensaje = "Excelente";
//         //break es para que se detenga el switch
//         break
//     case "B":
//         mensaje = "Muy bien";
//         break
//     case "C":
//         mensaje = "Bien";
//         break
//     case "D":
//         mensaje = "Regular";
//         break
//     case "F":
//         mensaje = "Insuficiente";
//         break
//         //default es para que se ejecute si no se cumple ninguna de las condiciones
//     default:
//         alert(`la letra ${letra} no contiene ningún mensaje, intenta de nuevo`)
//         break

// } alert(mensaje);
//___________________________________________________________________________________________

//Ejercicio 2:Días de la semana: Crea un programa que tome un número del 1 al 7 y devuelva el día correspondiente de la semana.

// let numeroDia = parseInt(prompt("Ingrese un número del 1 al 7 para conocer el día de la semana:"));

// let diaSemana;

// switch (numeroDia) {
//     case 1:
//         diaSemana = "Lunes";
//         break;
//     case 2:
//         diaSemana = "Martes";
//         break;
//     case 3:
//         diaSemana = "Miércoles";
//         break;
//     case 4:
//         diaSemana = "Jueves";
//         break;
//     case 5:
//         diaSemana = "Viernes";
//         break;
//     case 6:
//         diaSemana = "Sábado";
//         break;
//     case 7:
//         diaSemana = "Domingo";
//         break;
//     default:
//         diaSemana = "Número inválido, ingrese un número del 1 al 7.";
// }

// alert(diaSemana);
//_____________________________________________________________________________________
//Ejercicio 3: Meses del año: Escribe un programa que tome un número del 1 al 12 y devuelva el nombre del mes correspondiente.

// let numeroMes = parseInt(prompt("Ingrese un número del 1 al 12 para conocer el mes del año:"));

// let mesyear; 

// switch(numeroMes){
//     case 1:
//         mesyear = "Enero";
//         break;
//     case 2:
//         mesyear = "Febrero";
//         break;
//     case 3:
//         mesyear = "Marzo";
//         break;
//     case 4:
//         mesyear = "Abril";
//         break;
//     case 5:
//         mesyear = "Mayo";
//         break;
//     case 6:
//         mesyear = "Junio";
//         break;
//     case 7:
//         mesyear = "Julio";
//         break;
//     case 8:
//         mesyear = "Agosto";
//         break;
//     case 9:
//         mesyear = "Septiembre";
//         break;
//     case 10: 
//         mesyear = "Octubre";
//         break;
//     case 11:
//         mesyear = "Noviembre";
//         break;
//     case 12:
//         mesyear = "Diciembre";
//         break;

//         default:
//          alert(`numero no valido, ingresaa un número del 1 al 12`)
//         break
// } alert(mesyear)
//___________________________________________________________________________________

//Ejercicio 4: Operaciones matemáticas básicas: Desarrolla un programa que tome dos números y un operador (+, - , *, /) y realice la operación correspondiente.

// Solicitar al usuario que ingrese dos números y un operador

// let numero1 = parseFloat(prompt("Ingrese el primer número:"));
// let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
// let operador = prompt("Ingrese el operador aritmético (+, -, *, /):");

// let resultado;

// switch (operador) {
//     case '+':
//         resultado = numero1 + numero2;
//         break;
//     case '-':
//         resultado = numero1 - numero2;
//         break;
//     case '*':
//         resultado = numero1 * numero2;
//         break;
//     case '/':
//         if (numero2 !== 0) {
//             resultado = numero1 / numero2;
//         } else {
//             resultado = "Error: división por cero";
//         }
//         break;
//     default:
//         resultado = "Operador no válido";
// }
// alert(`resultado; ${resultado}`);
// _________________________________________________________________________________

//Ejercicio 5:  Traductor de idiomas: Crea un programa que tome una palabra en inglés y la traduzca a otro idioma utilizando switch para diferentes casos.

//  let palabra = prompt("Ingrese una palabra en inglés para traducir :");
//  let primeraLetraMayuscula = palabra.charAt(0).toUpperCase() + palabra.slice(1);
//  let traduccion; 

//  switch (primeraLetraMayuscula)
//  {
//     case "Hello":
//         traduccion = "Hola";
//         break;
//     case "Goodbye":
//         traduccion = "Adios";
//         break;  
//     case "Thank you":
//         traduccion = "Gracias";
//         break;
//     case "Welcome":
//         traduccion = "Bienvenido";
//         break;
//     case "Good morning":
//         traduccion = "Buenos dias";
//         break;
//     case "Good afternoon":
//         traduccion = "Buenas tardes";
//         break;
//     case "Good evening":
//         traduccion = "Buenas noches";
//         break;
//     case "I love you":
//         traduccion = "Te amo";
//         break;
//     default:
//         traduccion = "No se ha encontrado la palabra";
//         break;
//  } alert("Traducciön:" + " " + traduccion);

// _________________________________________________________________________________

//Ejercicio 6: Calculadora de tarifa de envío: Desarrolla un programa que calcule la tarifa de envío de acuerdo al peso del paquete y el destino

// let pesoPaquete = parseFloat(prompt("Ingrese el peso del paquete (en kg):"));
// let destino = prompt("Ingrese el destino del paquete (A, B, C):");

// let tarifaEnvio;

// switch (destino.toUpperCase()) {
//     case 'A':
//         //if para determinar el peso del paquete
//         if (pesoPaquete <= 75 || pesoPaquete <= 100) {
//             tarifaEnvio = 10.000;
//         } else if (pesoPaquete <= 150) {
//             tarifaEnvio = 15.000;
//         } else {
//             tarifaEnvio = 20.000;
//         }
//         break;
//     case 'B':
//         if (pesoPaquete <= 75 || pesoPaquete <= 100) {
//             tarifaEnvio = 12.000;
//         } else if (pesoPaquete <= 150) {
//             tarifaEnvio = 18.000;
//         } else {
//             tarifaEnvio = 25.000;
//         }
//         break;
//     case 'C':
//         if (pesoPaquete <= 75 || pesoPaquete <= 100) {
//             tarifaEnvio = 15.000;
//         } else if (pesoPaquete <= 150) {
//             tarifaEnvio = 20.000;
//         } else {
//             tarifaEnvio = 30.000;
//         }
//         break;
//     default:
//         tarifaEnvio = "Destino no válido";
// }

// // Mostrar la tarifa de envío
// if (typeof tarifaEnvio === 'number') {
//     alert("La tarifa de envío es: $" + tarifaEnvio.toFixed(2));
// } else {
//     alert(tarifaEnvio);
// }
//______________________________________________________________________________________

//Ejercicio 7: Conversor de unidades: Escribe un programa que convierta entre diferentes unidades de medida (por ejemplo, centímetros a pulgadas, kilogramos a libras, etc.).

// let opcion = parseInt(prompt("Seleccione el tipo de conversión:1. Centímetros a pulgadas, 2. Kilogramos a libras"));

// let valor;
// let resultado;

// switch (opcion) {
//     case 1:
//         valor = parseFloat(prompt("Ingrese la longitud en centímetros:"));
//         resultado = valor / 2.54; 
//         // Convertir centímetros a pulgadas
//         alert(`${valor} centímetros equivale a ${resultado.toFixed(2)} pulgadas.`);
//         break;
//     case 2:
//         valor = parseFloat(prompt("Ingrese el peso en kilogramos:"));
//         resultado = valor * 2.20462; 
//         // Convertir kilogramos a libras
//         alert(`${valor} kilogramos equivale a ${resultado.toFixed(2)} libras.`);
//         break;
//     default:
//         alert("Opción no válida.");
// }
//___________________________________________________________________________________________

//Ejercicio 8:  Detección de tipo de dato: Crea un programa que tome un valor y determine si es un número, una cadena de texto, un booleano o un objeto.

// let valor = parseFloat(prompt("Ingrese un valor:"));

// // Determinar el tipo de dato del valor ingresado con typeof
// let tipoDato = typeof valor;

// switch (tipoDato) {
//     case 'number':
//         alert("El valor ingresado es un número.");
//         break;
//     case 'string':
//         alert("El valor ingresado es una cadena de texto.");
//         break;
//     case 'boolean':
//         alert("El valor ingresado es un booleano.");
//         break;
//     case 'object':
//         alert("El valor ingresado es un objeto.");
//         break;
//     default:
//         alert("No se pudo determinar el tipo de dato.");
//         break
// } falta arreglar este
//_____________________________________________________________________________________

//Ejercicio 9: Generador de mensajes personalizados: Desarrolla un programa que tome un evento como entrada y devuelva un mensaje personalizado dependiendo del evento (cumpleaños, boda, graduación, etc.)

// // Pedir al usuario que ingrese el evento
// let evento = prompt("Ingrese el evento:").toLowerCase();

// // Seleccionar un mensaje personalizado dependiendo del evento
// let mensaje = "";

// switch (evento) {
//     case 'cumpleaños':
//         mensaje = "¡Feliz cumpleaños! Que este día esté lleno de alegría y bonitos recuerdos.";
//         break;
//     case 'boda':
//         mensaje = "¡Felicidades por tu boda! Que este día marque el comienzo de una vida llena de amor y felicidad.";
//         break;
//     case 'graduacion':
//         mensaje = "¡Felicidades por tu graduación! Todo tu esfuerzo ha dado frutos. ¡Que sigan los éxitos!";
//         break;
//     case 'aniversario':
//         mensaje = "¡Feliz aniversario! Que este día especial esté lleno de amor, risas y bellos recuerdos.";
//         break;
//     default:
//         mensaje = "¡Felicitaciones por tu evento!";
//         break;
// }
// alert(mensaje);
//_____________________________________________________________________________________

//Ejercicio 10: Menú de opciones: Implementa un programa que muestre un menú con diferentes opciones y realice una acción correspondiente según la opción seleccionada. 

// Mostrar el menú 
// alert("Menú de tipos de mascotas: 1. Perro 2. Gato 3. Pájaro 4. Otro n5. Salir");

// // el usuario ingrsa la opcion deseada
// let opcion = prompt("Ingrese el número correspondiente al tipo de mascota que desea llevar:");

// // Convertir la opción ingresada a un número entero
// opcion = parseInt(opcion);

// switch (opcion) {
//     case 1:
//         alert("Has seleccionado llevar un perro.");
//         break;
//     case 2:
//         alert("Has seleccionado llevar un gato.");
//         break;
//     case 3:
//         alert("Has seleccionado llevar un pájaro.");
//         break;
//     case 4:
//         alert("Has seleccionado llevar otro tipo de mascota.");
//         break;
//     case 5:
//         alert("Saliendo del programa...");
//         break;
//     default:
//         alert("Opción no válida. Por favor, ingrese un número válido del menú.");
//         break;
// }
