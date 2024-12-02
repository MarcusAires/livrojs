const resp = document.querySelector("pre");
const form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    const numero = Number(form.numero.value);

    let resultado = `entre ${numero} e 1: \n`

    for(let i = numero; i > 0; i--){
        resultado += i + ", ";
    }
    resp.innerText = resultado;
})