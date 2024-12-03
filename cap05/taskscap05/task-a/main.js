const form = document.querySelector("form");
const resp = document.querySelector("h3")

form.addEventListener("submit", (e)=>{
   
    e.preventDefault();

    const num = Number(form.inValor.value);
    const frutas = form.inFruta.value
    let counter = ""
    for(let i = 1; i<=num; i++){
        if(i % 2 === 0){
            counter += frutas
        }else{
            counter += "*"
        }
    }
    resp.innerText = counter;   
})