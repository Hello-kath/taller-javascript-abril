//Ejercicio 1: Suma de números: Escribe un programa que sume todos los números enteros positivos desde 1 hasta un número ingresado por el usuario utilizando un bucle while 

// Número hasta el cual queremos sumar los enteros positivos
// const numeroLimite = 10;

// let suma = 0;

// // Inicializar un contador en 1
// let contador = 1;

// while (contador <= numeroLimite) {
//     suma += contador; // Sumar el valor actual del contador a la suma total
//     contador++; // Incrementar el contador en 1 para pasar al siguiente número
// }

// // mostrar resultado
// console.log("La suma de los números enteros positivos desde 1 hasta", numeroLimite, "es:", suma);
//_________________________________________________________________________________________

//Ejercicio 2: Contador regresivo: Crea un programa que imprima una cuenta regresiva desde un número ingresado por el usuario hasta 1 utilizando un bucle while.

// Solicitar al usuario que ingrese un número
//let numero = parseInt(prompt("Ingrese un número:"));

// Validar si el número ingresado es válido
// if (isNaN(numero) || numero <= 0) {
//     console.log("Por favor, ingrese un número entero positivo válido.");
// } else {
//     // Imprimir la cuenta regresiva desde el número ingresado hasta 1
//     console.log("Cuenta regresiva desde", numero, "hasta 1:");
//     while (numero >= 1) {
//         console.log(numero);
//         numero--; 
//     }
// }
//_________________________________________________________________________________

//Ejercicio 3: Factorial: Desarrolla un programa que calcule el factorial de un número ingresado por el usuario utilizando un bucle while.

// Solicitar al usuario que ingrese un número
// let numero = parseInt(prompt("Ingrese un número:"));

//     // Calcular el factorial utilizando un bucle while
//     let factorial = 1;
//     let contador = 1;
//     while (contador <= numero) {
//         // Multiplicar el factorial por el valor actual del contador
//         factorial *= contador;
//         // Incrementar el contador en 1 para pasar al siguiente número 
//         contador++; 
//     }
//     alert(`El factorial de ${numero} es: ${factorial}`);
//________________________________________________________________________________

//Ejercicio 4:  Adivina el número: Implementa un juego donde el usuario debe adivinar un número aleatorio generado por el programa. Utiliza un bucle while para repetir el proceso hasta que el usuario adivine el número correcto. 

// Generar un número aleatorio entre 1 y 100
// let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// // Variable para almacenar el número de intentos
// let intentos = 0;

// // Bucle para que el usuario adivine el número
// let adivinado = false;
// while (!adivinado) {
//     // Solicitar al usuario que ingrese un número
//     let numeroIngresado = parseInt(prompt("Adivina el número (entre 1 y 100):"));

//     // Incrementar el número de intentos
//     intentos++;

//     // Verificar si el número ingresado es igual al número aleatorio
//     if (numeroIngresado === numeroAleatorio) {
//         alert("¡Felicidades! ¡Adivinaste el número en " + intentos + " intentos!");
//         adivinado = true;
//     } else if (numeroIngresado > numeroAleatorio) {
//         alert("El número ingresado es demasiado alto. Intenta con un número más bajo.");
//     } else {
//         alert("El número ingresado es demasiado bajo. Intenta con un número más alto.");
//     }
// }
//_________________________________________________________________________________

//Ejercicio 5: Generador de secuencia Fibonacci: Escribe un programa que genere los primeros N números de la secuencia Fibonacci utilizando un bucle while.

// Variables para almacenar los números de la secuencia Fibonacci
// let fibonacci = [];

// // Inicializar los primeros dos números de la secuencia Fibonacci
// let a = 0;
// let b = 1;

// // Generar los primeros 10 números de la secuencia Fibonacci
// for (let i = 0; i < 10; i++) {
//     fibonacci.push(a); // Agregar el número actual de la secuencia al array
//     let temp = a + b; // Calcular el siguiente número de la secuencia
//     a = b; // Actualizar el primer número con el segundo número
//     b = temp; // Actualizar el segundo número con el resultado del cálculo
// }

// // Mostrar los primeros números de la secuencia Fibonacci generados
// console.log("Los primeros números de la secuencia Fibonacci son:", fibonacci.join(", "));
//__________________________________________________________________________________________

//Ejercicio 6: Contador de dígitos: Crea un programa que cuente y muestre la cantidad de dígitos en un número ingresado por el usuario utilizando un bucle while . 

// let numero = parseInt(prompt("Ingrese un número:"));

// if (!isNaN(numero) && numero !== null && numero.toString().trim() !== "") {
//     // Convertir el número ingresado a una cadena para contar sus dígitos
//     let numeroCadena = numero.toString();
//     // Inicializar el contador de dígitos y el índice
//     let contador = 0;
//     let indice = 0;

//     // Contar la cantidad de dígitos utilizando un bucle while
//     while (indice < numeroCadena.length) {
//         if (!isNaN(parseInt(numeroCadena[indice]))) {
//             contador++;
//         }
//         indice++;
//     }

//     alert(`El número ingresado tiene ${contador} dígitos`);
// } else {
//     //mesaje de error
//     alert("Por favor, ingrese un número válido.");
// }
//____________________________________________________________________________________

//Ejercicio 7: Tabla de multiplicar: Desarrolla un programa que imprima la tabla de multiplicar de un número ingresado por el usuario utilizando un bucle while 

// // Solicitar al usuario que ingrese un número
// let numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));

// // Verificar si el número ingresado es válido
// if (!isNaN(numero)) {
//     // Inicializar el multiplicador
//     let multiplicador = 1;

//     // Imprimir la tabla de multiplicar utilizando un bucle while
//     console.log(`Tabla de multiplicar del número ${numero}:`);
//     while (multiplicador <= 10) {
//         console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`);
//         multiplicador++;
//     }
// } 
//_____________________________________________________________________________________

//Ejercicio 8: Conversor de temperatura: Implementa un programa que convierta una temperatura en grados Celsius a grados Fahrenheit utilizando un bucle while para permitir al usuario realizar múltiples conversiones. 

// let continuar = true;
// while (continuar) {
//     let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));

//     if (!isNaN(celsius)) {
//         let fahrenheit = (celsius * 9/5) + 32;
//         alert(`${celsius} grados Celsius equivalen a ${fahrenheit.toFixed(2)} grados Fahrenheit.`);

//         let respuesta = prompt("¿Desea realizar otra conversión? (Sí/No)").toLowerCase();
//         if (respuesta !== "sí" && respuesta !== "si") {
//             continuar = false;
//         }
//     } else {
//         alert("Por favor, ingrese un número válido.");
//     }
// }

// alert("Fin del programa.");
//_____________________________________________________________________________________

//Ejercicio 9: Detección de números primos: Escribe un programa que determine si un número ingresado por el usuario es primo o no utilizando un bucle while.

// let numero = parseInt(prompt("Ingrese un número para verificar si es primo:"));

// if (numero <= 1) {
//     alert("El número no es primo.");
// } else {
//     let divisor = 2;
//     let esPrimo = true;

//     while (divisor < numero) {
//         if (numero % divisor === 0) {
//             esPrimo = false;
//             break;
//         }
//         divisor++;
//     }

//     if (esPrimo) {
//         alert("El número es primo.");
//     } else {
//         alert("El número no es primo.");
//     }
// }
//______________________________________________________________________________________

//Ejercicop 10: Simulador de ahorro: Crea un programa que simule un plan de ahorro, donde el usuario ingresa un monto de dinero a ahorrar mensualmente y una tasa de interés. Utiliza un bucle while para calcular el saldo acumulado después de un número de meses especificado por el usuario.

// let montoMensual = parseFloat(prompt("Ingrese el monto a ahorrar mensualmente:"));

// let tasaInteresAnual = parseFloat(prompt("Ingrese la tasa de interés anual (en porcentaje):"));

// // Verificar si los valores ingresados son válidos
// if (!isNaN(montoMensual) && !isNaN(tasaInteresAnual) && montoMensual > 0 && tasaInteresAnual >= 0) {
//     // Convertir la tasa de interés anual a mensual (en decimal)
//     let tasaInteresMensual = tasaInteresAnual / 12 / 100;

//     // Solicitar al usuario que ingrese el número de meses
//     let numeroMeses = parseInt(prompt("Ingrese el número de meses a simular:"));

//     // Inicializar el saldo acumulado
//     let saldoAcumulado = 0;
//     let meses = 0;

//     // Calcular el saldo acumulado utilizando un bucle while
//     while (meses < numeroMeses) {
//         saldoAcumulado += montoMensual; // Agregar el monto mensual al saldo acumulado
//         saldoAcumulado *= (1 + tasaInteresMensual); // Aplicar la tasa de interés al saldo acumulado
//         meses++; // Incrementar el contador de meses
//     }

//     // Mostrar el saldo acumulado después del período especificado
//     alert(`Después de ${numeroMeses} meses, el saldo acumulado es de: $${saldoAcumulado.toFixed(2)}`);
// } else {
//     // Mostrar un mensaje de error si los valores ingresados no son válidos
//     alert("Por favor, ingrese montos y tasas de interés válidos.");
// }
