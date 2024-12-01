const tempo = document.querySelector('h2');
const troco = document.querySelector('h3');
const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let deposito = Number(form.indeposito.value).toFixed(2);
    if (deposito != 0 && deposito >= 1 && deposito < 1.75) {
       '' tempo.textContent = `tempo: 30 min`
        troco.textContent = deposito -  // corrigir o acumulo de dados que está ocorrendo.
    }if(deposito>= 1.75 && deposito < 3){
        tempo.textContent += `60 min`
        troco.textContent += deposito - 1.75
    }
        tempo.textContent += `120 min`
        troco.textContent +=  deposito - 3
    })
