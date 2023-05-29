const textArea = document.querySelector(".texto-input");
const mensaje = document.querySelector(".mensaje");
const boton_copiar = document.querySelector(".copiar");

boton_copiar.style.display = "none";

function validarTexto() {
    let textoEscrito = document.querySelector(".texto-input").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if (!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos");
        location.reload();
        return true;
    }
}

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

let matriz_codigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function encriptar(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matriz_codigo.length; i++) {
        if (stringEncriptada.includes(matriz_codigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matriz_codigo[i][0], matriz_codigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btn_Encriptar() {
    if (!validarTexto()) {
        const texto_encriptado = encriptar(textArea.value);
        mensaje.value = texto_encriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        boton_copiar.style.display = "block";
    }
}

function desencriptar(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matriz_codigo.length; i++) {
        if (stringEncriptada.includes(matriz_codigo[i][1])) {
            stringEncriptada = stringEncriptada.replaceAll(matriz_codigo[i][1], matriz_codigo[i][0]);
        }
    }

    return stringEncriptada;
}

function btn_Desencriptar() {
    const texto_encriptado = desencriptar(textArea.value);
    mensaje.value = texto_encriptado;
    textArea.value = "";
    boton_copiar.style.display = "block";
}

function btn_Copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto Copiado")
    textArea.select();
}