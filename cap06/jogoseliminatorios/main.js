const form = document.querySelector('form');
const outLista = document.querySelector('#outLista');

//array que armazena a lista de clubes
let clubes = [];

//botão para adicionar clubes a lista
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const clube = form.inClube.value;
    clubes.push({clube});
    
    // reseta o forms após a adição do clube
    // foca novamente no campo de adição do clube
    // dispara event de click no botão lista para lista automaticamente após a adição
    form.reset();
    form.inClube.focus();
    form.btListar.dispatchEvent(new Event('click'))
    
})
//botão para listagem dos clubes
form.btListar.addEventListener("click", (e)=>{
    e.preventDefault();
    
    if(clubes.length === 0){
        alert('Adicione o nome de um clube para continuar');
    }
    
    let lista = '';
    
    outLista.innerText = lista
})