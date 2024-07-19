/*Escriba un programa que valide una cadena de texto, debe indicar si la cadena de texto es:
vacía.
una única palabra (sólo letras).
dos palabras (sólo letras, separadas por uno o varios espacios).
una cadena de vocales minúsculas sin acentuar (a, e, i, o, u) en orden alfabético (se pueden repetir las vocales). Por ejemplo, "aaaeeu" es válida, pero "aauee" no.
un único número (sin decimales ni signo).
un único número par (sin decimales ni signo).*/

let Cadena = prompt("Escribe algo:");

const resultado = cadena => {
    const palabraUnica = /^[a-zA-Z]+$/i;
    const dosPalabras = /^[a-zA-Z]\s+[a-zA-Z]+$/i;
    const vocales = /^a+e+i+o+u+$/;
    const unicoNumero = /^[0-9]+/;
    const numeroPar = /^[0-9]+[02468]\d*/;

    if (vocales.test(cadena)) {
        alert("Lo que escribiste son vocales en orden alfabético!")
    } else if (dosPalabras.test(cadena)) {
        alert("Lo que escribiste son dos palabras!")
    } else if (palabraUnica.test(cadena)) {
        alert("Lo que escribiste es una sola palabra!")
    } else if (numeroPar.test(cadena)) {
        alert("Lo que escribiste es un solo número par!")
    } else if (unicoNumero.test(cadena)) {
        alert("Lo que escribiste es un solo número!")
    } else {
        alert ("No aplica a ninguna caracteristica")
    }
}

resultado(Cadena)