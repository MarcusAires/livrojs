const resultado = document.getElementById("resultado");
const submitButton = document.getElementById("calcular");

submitButton.addEventListener("click",(e) => {
    e.preventDefault();
    
    const inputNumber = document.getElementById("inputnumber").value;
    let number = Number(inputNumber);
    let vizinhos = `${number - 1} e ${number +1}`;
    resultado.style.background = "green"
    resultado.textContent = vizinhos;
});
