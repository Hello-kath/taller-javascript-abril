
/* 1. un programa que pida al usuario un número y muestre si es par o impar  */

/* paso 1: declaro la variable numero para almacenar el valor ingresado*/
let numero =  parseInt(prompt("ingresa un número"));
/* paso 3: verificar si el número es par o impar para ello declaro la siguiente variable */
let esPar = numero % 2 === 0;
/* paso 3: con la estructura if else verifico si el número es par o impar */ 
if (esPar) {
    /* realizo la siguiente concatenacion para mostrar el resultado */
   alert("El número" + " " + numero + " " + "es par.");
} else {
    alert("El número" + " " + numero + " " + "es impar.");
}