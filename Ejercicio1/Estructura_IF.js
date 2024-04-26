
// Ejercicio 1: un programa que pida al usuario un número y muestre si es par o impar  

// paso 1: declaro la variable numero para almacenar el valor ingresado
/*let numero =  parseInt(prompt("ingresa un número"));
// paso 3: verificar si el número es par o impar para ello declaro la siguiente variable 
/*let esPar = numero % 2 === 0;
// paso 3: con la estructura if else verifico si el número es par o impar 
/*if (esPar) {
    /* realizo la siguiente concatenacion para mostrar el resultado */
   /*alert("El número" + " " + numero + " " + "es par.");
} else {
    alert("El número" + " " + numero + " " + "es impar.");
}
//_________________________________________________________________________________________________

// Ejercicio 2: Escribe un programa que pida al usuario dos números y muestre el mayor de ellos  
// paso 1: creo dos variables para almacenar los numeros solicitador
/* let numero1 = parseInt(prompt("ingresa un número"));
let numero2 = parseInt(prompt("ingresa un segundo número"));

if (numero1 > numero2) {
    alert("El número" + " " + numero1 + " " + "es mayor que" + " " + numero2 )
    
} else{
    alert("El número" + " " + numero2 + " " + "es mayor que" + " " + numero1)
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
//     alert( `El mes ${mes} tiene 31 dias`)
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
let calificacion = parseFloat(prompt("ingresa tu calificacion del 1 a 5"));
if (calificacion >= 5.0) {
    alert("Tu calificacion es A");
} else if (calificacion >= 4.5) {
    alert("Tu calificacion es B");

} else if (calificacion >= 3.5) {
    alert("Tu calificacion es C");

} else if (calificacion >= 3.0) {
    alert("Tu calificacion es D");

} else if (calificacion >= 2.5) {
    alert("Tu calificacion es E");

} else if (calificacion <= 2.0) {
    alert("Tu calificacion es F");

} else if (calificacion <= 1.5) {
    alert("Tu calificacion es F");

} else if (calificacion <= 1.0) {
    alert("Tu calificacion es F");

} else {
    alert("Por favor ingresa una calificacion valida");
}
//_________________________________________________________________________________________________

//EJERCICIO 7: Escribe un programa que pida al usuario una temperatura en grados Celsius y muestre su equivalente en grados Fahrenheit