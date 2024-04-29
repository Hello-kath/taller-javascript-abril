//Estructura Repetitiva Ciclos Do
//Ejercicio 1:  Sumar los números del 1 al 10 utilizando un bucle.

// let numero = 1;
// let suma = 0;

// do {
//     suma += numero; // Sumar el número actual a la suma acumulada
//     numero++; // Incrementar el número para pasar al siguiente
// } while (numero <= 10); // Continuar el bucle mientras el número sea menor o igual a 10

// console.log("La suma de los números del 1 al 10 es:", suma);
//________________________________________________________________________________________

//Ejercici 2: Pedir al usuario que ingrese un número mayor que 100 utilizando un bucle. 

// let numeroMayor;

// do {
//     numeroMayor = parseInt(prompt("Ingrese un número mayor que 100:"));
//     if (isNaN(numeroMayor)) {
//         alert("Por favor, ingrese un número válido.");
//     } else if (numeroMayor <= 100) {
//         alert("Por favor, ingrese un número mayor que 100.");
//     }
// } while (isNaN(numeroMayor) || numeroMayor <= 100);

// alert("¡Gracias! Ha ingresado un número mayor que 100.");
//________________________________________________________________________________________

//Ejercicio 3: Generar un número aleatorio entre 1 y 10 hasta que se obtenga un 7.

// let numAleatorio;

// do {
//     numAleatorio = Math.floor(Math.random() * 10) + 1;
//     alert("El número generado es: " + numAleatorio);
// } while (numAleatorio !== 7);

// alert("¡Se ha obtenido el número 7!");
//________________________________________________________________________________________

//Ejercicio 4: Imprimir los números pares del 0 al 20 

// let numInicio = 0;

// do {
//     if (numInicio % 2 === 0) {
//         console.log(numInicio);
//     }
//     numInicio++;
// } while (numInicio <= 20);
//________________________________________________________________________________________

//Ejercicio 5: Pedir al usuario que ingrese un número entre 1 y 5.
//la variable opcion es el numero ingresado
// let opcion;

// do {
//     opcion = parseInt(prompt("Ingrese un número entre 1 y 5:")); // Solicitar al usuario que ingrese un número
//     if (isNaN(opcion) || opcion < 1 || opcion > 5) { // Verificar si el número ingresado no es válido
//         alert("Por favor, ingrese un número válido entre 1 y 5."); // Mostrar un mensaje de alerta si el número no es válido
//     }
// } while (isNaN(opcion) || opcion < 1 || opcion > 5); // Repetir el bucle mientras el número no sea válido

// alert("Ha ingresado el número " + opcion + "."); 
//________________________________________________________________________________________

//Ejercicio 6: Imprimir los primeros 10 números de la serie de Fibonacci  

// Inicializamos los primeros dos números de la serie de Fibonacci

// let a = 0;
// let b = 1;

// // Imprimimos los primeros 10 números de la serie de Fibonacci
// console.log("Los primeros 10 números de la serie de Fibonacci son:");
// console.log(a); // Imprimimos el primer número
// console.log(b); // Imprimimos el segundo número

// // Generamos y mostramos los siguientes 8 números de la serie de Fibonacci utilizando un ciclo do-while
// let contador = 2;
// do {
//     let temp = a + b; // Calculamos el siguiente número de la serie
//     console.log(temp); // Imprimimos el siguiente número de la serie
//     a = b; // Actualizamos el primer número con el segundo número
//     b = temp; // Actualizamos el segundo número con el resultado del cálculo
//     contador++; // Incrementamos el contador
// } while (contador < 10); // Continuamos el ciclo mientras el contador sea menor que 10
//________________________________________________________________________________________

//Ejercicio 7: Pedir al usuario que ingrese una contraseña y repetir la solicitud hasta que ingrese una contraseña válida (por ejemplo, "contraseña123").

// let contraseña;

// do {
//     contraseña = prompt("Ingrese la contraseña:"); // Solicitar al usuario que ingrese la contraseña
//     if (contraseña !== "contraseña123") { // Verificar si la contraseña no es válida
//         alert("Contraseña incorrecta. Por favor, inténtelo de nuevo."); // Mostrar un mensaje de alerta si la contraseña es incorrecta
//     }
// } while (contraseña !== "contraseña123"); // Repetir el ciclo mientras la contraseña no sea válida

// alert("¡Contraseña válida!"); 
//________________________________________________________________________________________

//Ejercicio 8: Imprimir los primeros 5 números primos.

// let numero1 = 2; // Empezamos desde el primer número primo, que es 2
// let cantidadPrimos = 0; // Contador para llevar la cuenta de los números primos encontrados

// console.log("Los primeros 5 números primos son:");

// do {
//     let esPrimo = true; // Variable para verificar si el número actual es primo

//     // Verificamos si el número actual es primo
//     for (let divisor = 2; divisor <= Math.sqrt(numero1); divisor++) {
//         if (numero1 % divisor === 0) {
//             esPrimo = false;
//             break;
//         }
//     }

//     // Si el número actual es primo, lo imprimimos
//     if (esPrimo) {
//         console.log(numero1);
//         cantidadPrimos++;
//     }

//     numero1++; // Pasamos al siguiente número para verificar si también es primo
// } while (cantidadPrimos < 5); // Continuamos el ciclo hasta encontrar los primeros 5 números primos
// //________________________________________________________________________________________

//Ejercicio 9: Pedir al usuario que ingrese un número positivo utilizando un bucle do - while y mostrar un mensaje de error si no lo hace.
// let entrada;

// do {
//     entrada = parseInt(prompt("Ingrese un número positivo:")); // Solicitar al usuario que ingrese un número
//     if (entrada <= 0 || isNaN(entrada)) { // Verificar si el número no es positivo o no es un número
//         alert("Error: Por favor, ingrese un número positivo válido."); // Mostrar un mensaje de alerta si no es válido
//     }
// } while (entrada <= 0 || isNaN(entrada)); // Repetir el bucle mientras la entrada no sea válida

// alert("¡Número positivo ingresado correctamente!"); // Mostrar un mensaje de alerta cuando se ingrese un número positivo válido


//________________________________________________________________________________________

//Ejercicio 10:  Imprimir los números del 10 al 1
// Inicializamos la variable con el valor inicial de 10
// let numero = 10; 

// do {
//     console.log(numero); // Imprimimos el número actual
//     numero--; // Decrementamos el número en cada iteración para imprimir los números en orden descendente
// } while (numero >= 1); // Continuamos el bucle mientras el número sea mayor o igual a 1

