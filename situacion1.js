/*Imagina que estás desarrollando un formulario de registro y necesitas validar el campo de contraseña según ciertos criterios. El requisito es que la contraseña debe cumplir con las siguientes condiciones:

Debe tener al menos 8 caracteres de longitud.
Debe contener al menos una letra minúscula.
Debe contener al menos una letra mayúscula.
Debe contener al menos un número.*/

let contraseña;
const mensajeError = "Recuerda, la contraseña debe tener al menos 8 caracteres, 1 mayúscula, 1 minúscula y un número :)";
const formatoCorrecto = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

do {
    contraseña = prompt("Ingresa tu contraseña");

    if (!formatoCorrecto.test(contraseña)) {
        alert(mensajeError);
    }
} while (!formatoCorrecto.test(contraseña));

alert("Contraseña aceptada!")