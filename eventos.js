const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calcular1");
const input2 = document.querySelector("#calcular2");
const boton = document.querySelector("#botoncalculo");
const resultado = document.querySelector("#resultadosuma")

function eventoboton() {
    const suma = Number(input1.value) + Number(input2.value);
    resultadosuma.innerText = "El resultado es: "+ suma;
};