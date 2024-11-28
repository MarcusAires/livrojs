const form = document.querySelector('form');
const diasInput = document.getElementById('dias-input');
const horasInput = document.getElementById('horas-input');
const totalElement = document.getElementById('total');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const dias = Number(diasInput.value);
    const horas = Number(horasInput.value);
    const total = (dias * 24) + horas;

    totalElement.textContent = `O tempo total da sua viagem em horas é: ${total}`;
});