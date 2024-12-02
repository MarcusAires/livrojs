const resultado = document.querySelector("h3");
const form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    const inFilme = form.inFilme.value;
    const inDuracao = form.inDuracao.value;
    
    let convertHora = Math.round(inDuracao/60);
    let convertMin =  inDuracao%60

    resultado.innerText = `O filme ${inFilme}, dura ${convertHora} horas e ${convertMin} minutos`

    e.preventDefault();
})