const form = document.querySelector("form");
const oPeso = document.querySelector("h2");

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    let sexo = form.sexo.value;   
    let nome = form.inome.value;
    let altura = Number(form.ialtura.value);

    
    oPeso.innerText = sexo === "masculino"
    ? `O peso ideal para ${nome} é ${Math.round(Math.pow(altura, 2)*22).toFixed(2)}kg`
    : `O peso ideal para ${nome} é ${Math.round(Math.pow(altura, 2)*21).toFixed(2)}kg`;
})


form.addEventListener("reset", () =>{
    oPeso.innerText = "";
})