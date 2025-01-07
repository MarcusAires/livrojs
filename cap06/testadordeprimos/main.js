const resp = document.getElementById('resposta');
const verificador = document.getElementById('verificar');
const numeroin = document.getElementById('numeroinput');

verificador.addEventListener('click', (e) => {
    e.preventDefault();

    const num = Number(numeroin.value); // Corrigir para pegar o valor do input
    if (isNaN(num) || num <= 1) {
        resp.innerText = `Por favor, insira um número maior que 1.`;
        return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        resp.innerText = `O número ${num} é primo.`;
    } else {
        resp.innerText = `O número ${num} não é primo.`;
    }
});
