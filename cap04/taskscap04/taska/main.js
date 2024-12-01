const tempo = document.querySelector('h2');
const troco = document.querySelector('h3');
const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const deposito = Number(form.indeposito.value).toFixed(2);
    if (deposito != 0 && deposito >= 1 && deposito < 1.75) {
       tempo.textContent = `tempo: 30 min`
        troco.textContent = `troco R$: ${(deposito - 1).toFixed(2)}`
    }else if(deposito >= 1.75 && deposito < 3){
        tempo.textContent = `tempo: 60 min`
        troco.textContent = `troco R$: ${(deposito - 1.75).toFixed(2)}`
    }else{
        tempo.textContent = `tempo: 120 min`
        troco.textContent =  `troco R$: ${(deposito - 3).toFixed(2)} `
    }
});
    form.addEventListener('reset', ()=>{
        tempo.textContent = "Tempo: ";
        troco.textContent = "Troco R$: ";
    })
