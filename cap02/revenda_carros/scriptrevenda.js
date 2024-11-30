const form = document.querySelector("form");
const entradaOut = document.querySelector("h2");
const parcelasOut = document.querySelector("h3");
const p = document.querySelector("p");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let incarro = form.incarro.value;
    let invalor = form.invalor.value;

    let calcEntrada = invalor*0.5; 
    let calcParcela = (invalor/3);

    p.innerText = `${incarro}`
    entradaOut.innerText = `Entrada:R$ ${calcEntrada.toFixed(2)}`
    parcelasOut.innerText = `Parcelas: 12x de R$ ${Math.round(calcParcela).toFixed(2)}`
});