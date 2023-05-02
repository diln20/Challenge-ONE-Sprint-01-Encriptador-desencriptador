
input = document.getElementById("text");

buttonEncriptar = document.getElementById("buttonEncriptar");
buttonDesencriptar = document.getElementById("buttonDesencriptar");
buttonCopiar = document.getElementById("buttonCopiar");
textArea = document.getElementById("resultado");

function encriptar() {
    var texto = input.value;
    // Validar el texto
    if (/[^a-z\s]/.test(texto)) {
        alert("El texto solo puede contener letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }
    // Encriptar el texto
    var encriptado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    textArea.value = encriptado;

    alternarDivs();
}


function desencriptar() {
    var texto = input.value;
    var encriptado = texto.replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    textArea.value = encriptado;

    alternarDivs();
}
function copiar() {
    navigator.clipboard.writeText(
        document.getElementById("resultado").value
    );
}


const divConTexto = document.querySelector('#divConTexto');
const divSinTexto = document.querySelector('#divSinTexto');

function alternarDivs() {
    const tieneTexto = !!input.value;
    divConTexto.classList.toggle('oculto', !tieneTexto);
    divSinTexto.classList.toggle('oculto', tieneTexto);
}


buttonEncriptar.onclick = encriptar;
buttonDesencriptar.onclick = desencriptar;
buttonCopiar.onclick = copiar;






