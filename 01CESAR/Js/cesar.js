const desplazamiento = document.getElementById("desplazamiento");
const desplazamiento2 = document.getElementById("desplazamiento2");
const texto = document.getElementById("texto");
const texto2 = document.getElementById("texto2");
const textoCifrado = document.getElementById("cifrado");
const textoDescifrado = document.getElementById("descifrado");

//Vamos a crear una función para poder cifrar

function cifrado(texto, desplazamiento) {
    return texto.split('').map(c => {
        let mayus = (c === c.toUpperCase()) ? true : false;
        let valorEntero = c.toLowerCase().charCodeAt(0);
        if (valorEntero >= 97 && valorEntero <= 122) {
            valorEntero = (valorEntero - 97 + desplazamiento) % 26 + 97;
        }
        let cifrado = String.fromCharCode(valorEntero);
        return mayus ? cifrado.toUpperCase() : cifrado;
    }).join('');
}

// Este función descifra siempre y cuando tenga el mismo desplazamiento que el original

function descifrado(textoCifrado, desplazamiento) {
    return cifrado(textoCifrado, 26 - desplazamiento);
}

// Acciones del Cifrado
texto.addEventListener("input", function () {
    const valorDesplazamiento = parseInt(desplazamiento.value);
    textoCifrado.value = cifrado(texto.value, valorDesplazamiento);
});
desplazamiento.addEventListener("input", function () {
    const valorDesplazamiento = parseInt(desplazamiento.value);
    textoCifrado.value = cifrado(texto.value, valorDesplazamiento);
});

// Acciones del Descifrado
texto2.addEventListener("input", function () {
    const valorDesplazamiento = parseInt(desplazamiento2.value);
    textoDescifrado.value = descifrado(texto2.value, valorDesplazamiento);
});
desplazamiento2.addEventListener("input", function () {
    const valorDesplazamiento = parseInt(desplazamiento2.value);
    textoDescifrado.value = descifrado(texto2.value, valorDesplazamiento);
});

/*function cifrado() {
    const textoIngresado = texto.value;
    textoCifrado.value = textoIngresado.split('').map(c => {
        let mayus = (c === c.toUpperCase()) ? true : false;
        let valorEntero = c.toLowerCase().charCodeAt(0);
        if (valorEntero >= 97 && valorEntero <= 122) {
            const valorDesplazamiento = parseInt(desplazamiento.value);

            if (valorEntero + valorDesplazamiento > 122) {
                valorEntero = 97 + (valorEntero - 122) + valorDesplazamiento - 1;
            } else {
                valorEntero = valorEntero + valorDesplazamiento;
            }
        }
        let cifrado = String.fromCharCode(valorEntero);
        return mayus ? cifrado.toUpperCase() : cifrado;
    }).join('');
}*/