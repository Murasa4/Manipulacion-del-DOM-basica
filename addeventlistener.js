const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calcular1");
const input2 = document.querySelector("#calcular2");
const boton = document.querySelector("#botoncalculo");
const resultado = document.querySelector("#resultadosuma")

const gokufeliz = document.querySelector("#goku1")

boton.addEventListener("click", eventoboton);
gokufeliz.addEventListener("click", pegaragoku)
gokufeliz.addEventListener("dblclick", vuelvegoku)

function eventoboton() {
    event.preventDefault();
    const suma = Number(input1.value) + Number(input2.value);
    resultadosuma.innerText = "El resultado es: "+ suma;
};

function pegaragoku() {
    event.preventDefault();
    goku1.setAttribute("src", "./2.jpeg");
    
}

function vuelvegoku() {
    event.preventDefault();
    goku1.setAttribute("src", "./1.jpg");
    
}