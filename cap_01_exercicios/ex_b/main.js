const parcial = document.getElementById('parcial');
const form = document.getElementById('form')


form.addEventListener("submit",(e) => {
    //previne que a página recarregue ao submeter o formulário
    e.preventDefault();
    //variavel que recebe o valor inserido no formulário    
    const valTotal = document.getElementById('val-total').value;
    //variavel que recebe a quantidade de clientes
    const nClientes = document.getElementById('n-clientes').value;
    let total = Number(valTotal);
    let clientes = Number(nClientes);
    let result = `O valor a ser pago por cliente é: R$${total/clientes}`;
    total/clientes < 60 ? parcial.style.backgroundColor = "green" : parcial.style.backgroundColor = 'red'
    parcial.textContent = `${result}`
    parcial.style.color = 'white'
    parcial.style.fontSize = 'large'
    parcial.style.padding = '20px'
    parcial.style.width = '20%'
});


