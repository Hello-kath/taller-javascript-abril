////Estructuras repetitivas ciclos for

//Ejercicio 1: Calcular el factorial de un número dado
// let numero = parseInt(prompt("Ingrese un número para calcular su factorial:")); // Solicitar al usuario que ingrese un número
// let factorial = 1; // Inicializar el factorial en 1

// // Verificar si el número ingresado es válido (mayor o igual a 0)
// if (numero >= 0) {
//     // Calcular el factorial del número utilizando un ciclo for
//     for (let i = 1; i <= numero; i++) {
//         factorial *= i; // Multiplicar el factorial por cada número del 1 al número ingresado
//     }
//     console.log(`El factorial de ${numero} es: ${factorial}`); // Mostrar el resultado en la consola
// } else {
//     console.log("Por favor, ingrese un número válido mayor o igual a 0."); // Mostrar un mensaje de error si el número ingresado no es válido
// }
//___________________________________________________________________________________

//Ejercicio 2: Imprimir los primeros 5 números primos 

// Inicializamos un contador para llevar la cuenta de los números primos encontrados
// let contadorPrimos = 0;

// // Iteramos sobre los números hasta encontrar los primeros 5 números primos
// for (let numero = 2; contadorPrimos < 5; numero++) {
//     let esPrimo = true;

//     // Verificamos si el número actual es primo
//     for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
//         if (numero % divisor === 0) {
//             esPrimo = false;
//             break;
//         }
//     }

//     // Si el número es primo, lo imprimimos y aumentamos el contador
//     if (esPrimo) {
//         console.log(numero);
//         contadorPrimos++;
//     }
// } console.log("Los primeros 5 números primos son:");
//_________________________________________________________________________________________
//Ejercicio 3: Imprimir la secuencia de números del 1 al 100, pero para múltiplos de 3 imprimir " Fizz ", para múltiplos de 5 imprimir " Buzz " y para múltiplos de ambos 3 y 5 imprimir " FizzBuzz “

// for (let i = 1; i <= 100; i++) {
//     // Verificamos si el número actual es múltiplo de 3 y 5
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     // Verificamos si el número actual es múltiplo de 3
//     else if (i % 3 === 0) {
//         console.log("Fizz");
//     }
//     // Verificamos si el número actual es múltiplo de 5
//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     }
//     // Si no es múltiplo ni de 3 ni de 5, simplemente imprimimos el número
//     else {
//         console.log(i);
//     }
// }
//_______________________________________________________________________________________

//Ejercicio 4: Imprimir los números del 10 al 1 en orden descendente. 

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }
//_______________________________________________________________________________________

//Ejercicio 5:  Imprimir los primeros 10 términos de la serie de Fibonacci

// Inicializamos los primeros dos términos de la serie de Fibonacci
// let a = 0;
// let b = 1;

// // Imprimimos los primeros dos términos
// console.log(a);
// console.log(b);

// // Utilizamos un ciclo for para calcular y imprimir los siguientes 8 términos
// for (let i = 2; i < 10; i++) {
//     let temp = a + b; // Calculamos el siguiente término
//     console.log(temp); // Imprimimos el término calculado
//     a = b; // Actualizamos el primer término con el segundo
//     b = temp; // Actualizamos el segundo término con el término calculado
// }
