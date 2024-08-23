const containerTextoCodificar = document.getElementById("containerTextoCodificar");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const containerMuneco = document.getElementById("containerMuneco");
const textoCodificado = document.getElementById("textoCodificado");
const containerDecodificar = document.getElementById("containerDecodificar");


let reemplazar = [
    
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],    
    ["a", "ai"],
    ["u", "ufat"],
];

const replace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    containerMuneco.classList.add("oculto");
    containerTextoCodificar.value = ""
    textoCodificado.style.display = "none";
    botonCopiar.style.display = "block";
    containerDecodificar.classList.add("ajustes");
    mensajeFinal.classList.add("ajustes");
};

const reset = () => {
    mensajeFinal.innerHTML = "";
    containerMuneco.classList.remove("oculto");
    textoCodificado.style.display = "block";
    botonCopiar.style.display = "none";
    containerDecodificar.classList.remove("ajustes");
    mensajeFinal.classList.remove("ajustes");
    containerTextoCodificar.focus();
};

botonEncriptar.addEventListener("click", () => {
    const texto = containerTextoCodificar.value.toLowerCase();

    function encriptar(nuevoTexto) {
            for (let i = 0; i < reemplazar.length; i++) {
                if (nuevoTexto.includes(reemplazar[i][0])) {
                    nuevoTexto = nuevoTexto.replaceAll(reemplazar[i][0], reemplazar[i][1]);
                }
            }
            return nuevoTexto;
        }
    if (texto != "") {
        replace(encriptar(texto));
    } else {
        swal("Ups", "Debes ingresar algún texto", "warning");
        reset();
    }
});

botonDesencriptar.addEventListener("click", () => {
    const texto = containerTextoCodificar.value.toLowerCase();

    function desencriptar(nuevoTexto) {
        for (let i = 0; i < reemplazar.length; i++) {
            if (nuevoTexto.includes(reemplazar[i][1])) {
                nuevoTexto = nuevoTexto.replaceAll(reemplazar[i][1], reemplazar[i][0]);
            }
        }
        return nuevoTexto;
    }

    if (texto != "") {
        replace(desencriptar(texto));
    } else {
        swal("Ups", "Debes ingresar algún texto", "warning");
        reset();
    }
});

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    navigator.clipboard.writeText(texto.value);
    texto.select();
    swal("Bien!!!", "El texto ha sido copiado", "success");
    reset();
});