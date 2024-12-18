const form = document.querySelector('form');
const rErros = document.querySelector('#outErros');
const rChances = document.querySelector('#outChances');
const rDicas = document.querySelector('#outDicas');

const erros = [];
const sorteado = Math.floor(Math.random()*100) + 1;
const chances = 6

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const numero = Number(form.inNum.value);
    if(numero === sorteado){
        rDicas.innerText =  `Parabéns! Número sorteado ${sorteado}`
        form.btSubmit.disabled = true;
        form.btNovo.className = "show";
    }else{
        if(erros.includes(numero)) {
            alert(`você já apostou esse número (${numero}). Tente outro...`)
        }else{
            erros.push(numero);
            const numErros = erros.length;
            const numChances = chances - numErros
            rErros.innerText = `${numErros} (${erros.join(", ")})`
            rChances.innerText = numChances;
            if(numChances===0){
                alert("Suas chances acabaram...")
                form.btSubmit.disabled = true
                form.btNovo.className = "show"
                rDicas.innerText = `Game Over!! Número sorteado: ${sorteado}`
            }else{
                const dica = numero < sorteado ? "maior" : "menor"
                rDicas.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }
    form.inNum.value="";
    form.inNum.focus();
    form.btNovo.addEventListener('click', ()=>{
        location.reload();
    })
})
