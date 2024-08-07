/*Imagina que estás desarrollando un formulario de registro y necesitas validar el campo de número de teléfono según ciertos criterios. El requisito es que el número de teléfono debe cumplir con las siguientes condiciones:

Debe contener exactamente 10 dígitos.
Opcionalmente, puede comenzar con el código de país "+1" seguido de 10 dígitos adicionales.*/



const validar = tel => {
    const formatoCorrecto = /^(\+1)?\d{10}$/;
    const mensajeError = "Recuerda, el numero debe tener 10 dígitos";

    do {
        tel = prompt("Ingresa tu número");

        if (!formatoCorrecto.test(tel)) {
            alert(mensajeError);
        }
    } while (!formatoCorrecto.test(tel));

    return alert("Número aceptado!")
}

let numeroTel;
validar(numeroTel)