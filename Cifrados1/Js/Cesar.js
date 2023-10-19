const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");
const textoDescifrado = document.getElementById("descifrado");

function camposVacios(){
    var texto = document.getElementById("texto").value;
    if(texto == ""){
        alert("Ingrese un texto para cifrar")
    }
}

function colocar1(){
    var copiar = document.getElementById("cifrado").value;
    document.getElementById("texto").value = copiar
}


function reiniciar(){
    document.getElementById("texto").value = "";
    document.getElementById("cifrado").value = "";
    document.getElementById("descifrado").value = "";
}

function cifrado() {
    camposVacios();
    const textoIngresado = texto.value;
    textoCifrado.value = textoIngresado.split('').map(c => {
        let mayus = (c === c.toUpperCase()) ? true : false;
        let valorEntero = c.toLowerCase().charCodeAt(0);
        if (valorEntero >= 97 && valorEntero <= 122) {
            const valorDesplazamiento = parseInt(desplazamiento.value);
            valorEntero -= 97
            valorEntero = (valorEntero + valorDesplazamiento) % 26
            valorEntero += 97
        }
        let cifrado = String.fromCharCode(valorEntero);
        return mayus ? cifrado.toUpperCase() : cifrado;
    }).join('');
}

function descifrado() {
    camposVacios();
    const textoIngresado = texto.value;
    textoCifrado.value = textoIngresado.split('').map(c => {
        let mayus = (c === c.toUpperCase()) ? true : false;
        let valorEntero = c.toLowerCase().charCodeAt(0);
        if (valorEntero >= 97 && valorEntero <= 122) {
            const valorDesplazamiento = parseInt(desplazamiento.value);
            valorEntero -= 97
            valorEntero = (valorEntero - valorDesplazamiento) % 26

            if(valorEntero<0){
                valorEntero+=123
            }else{
            valorEntero += 97
            }
        }
        let cifrado = String.fromCharCode(valorEntero);
        return mayus ? cifrado.toUpperCase() : cifrado;
    }).join('');
}

function Index(){
    location.href="./index.html";
} 