const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let num = Number(form.inNumero.value);
    let numDivisores = 0;
    
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            numDivisores++
        }
    }
    if(numDivisores === 2){
        resp.innerText = `${num} é primo!`
    }else{
        resp.innerText = `${num} não é primo!`
    }
});