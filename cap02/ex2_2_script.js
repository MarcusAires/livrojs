const resultado = document.querySelector("h3");
const form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    const inFilme = document.querySelector("#inFilme").value;
    const inDuracao = document.querySelector("#inDuracao").value;
    const nomeDoFilme = document.querySelector("#inFilme").value;
    
    let convertHora = Math.round(inDuracao/60);
    let convertMin =  inDuracao%60

    resultado.innerText = `O filme ${nomeDoFilme}, dura ${convertHora} horas e ${convertMin} minutos`

    e.preventDefault();
})