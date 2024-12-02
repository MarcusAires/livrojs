const form = document.querySelector("form");
const resp = document.querySelector("pre");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const number = Number(form.inNumero.value);

    let resultado = ""
    
    for(let i = 1; i <= 10; i++){
        resultado += `${number} x ${i} = ${number * i} \n`
    }
    resp.innerText = resultado;
})

