/*Estás desarrollando un formulario de registro y necesitas validar el campo de dirección de correo electrónico según los siguientes criterios:

El correo electrónico debe contener exactamente un símbolo "@".
El símbolo "@" no puede estar al principio ni al final del correo electrónico.
Después del símbolo "@", debe haber al menos un carácter antes del punto (.) del dominio.
El dominio debe contener al menos un punto (.), que separa el dominio de nivel superior (como "com", "net", "org", etc.). */

let email;
const mensajeError = "Formato de correo electrónico inválido";
const formatoCorrecto = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ //[^\s@] Obliga que haya al menos un caracter que no sea S(espacio) o @ en el correo


do {
    email = prompt("Ingresa tu correo electrónico");

    if (!formatoCorrecto.test(email)) {
        alert(mensajeError);
    }
} while (!formatoCorrecto.test(email));

alert("Email aceptado!")