/*Imagina que tienes un texto que contiene fechas en el formato "dd/mm/aaaa" (día/mes/año). Escribe una expresión regular que te permita extraer todas las fechas de este formato del texto. Intenta crear la expresión regular y asegúrate de que pueda identificar correctamente todas las fechas en el formato indicado dentro del texto proporcionado */

const validar = fecha => {
    const formatoCorrecto = /^[0-3]{1}[0-9]{1}\/[0-1]{1}[0-9]{1}\/[0-9]{1}[0-9]{1}[0-9]{1}[0-9]$/
    const mensajeError = "El formato de la fecha es inválido"

    do {
        fecha = prompt("Ingresa una fecha en el formato dd/mm/aaaa");

        if (!formatoCorrecto.test(fecha)) {
            alert(mensajeError);
        }
    } while (!formatoCorrecto.test(fecha));

    return alert("Fecha en formato válido!")
}

let Fecha;
validar(Fecha)