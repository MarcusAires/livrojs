const totalR = document.getElementById("output total");
const avistaR = document.getElementById("output avista");
const parceladoR = document.getElementById("output parcelado");
const form = document.getElementById("form");
const block = document.getElementById("block");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const inputR = document.getElementById("input").value;
    let input = Number(inputR);
    let avista = parseInt(input*0.9)
    let parcelado = parseInt(input/3)

    totalR.textContent = `O total da compra foi R$:${input}`;
    avistaR.textContent = `O valor a vista é R$:${avista}`;
    parceladoR.textContent = `Parcelado em 3x de R$:${parcelado}`;
    block.style.backgroundColor = "coral"
    block.style.color = "white"
    block.style.padding = "5%"
    block.style.width = "300px"
});


