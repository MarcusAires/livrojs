const form = document.getElementById("form");
const p = document.getElementById("resposta");


form.addEventListener("submit",(e) => {
    e.preventDefault();
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    let media = (nota1 + nota2) / 2;

        if(media >= 7){
            p.textContent = `A média foi ${media}
            Aluno aprovado!`
            p.style.backgroundColor = "green"
            p.style.color = "white"
        } 
          if(media < 7){p.textContent = `A média foi ${media}
          Aluno reprovado`
            p.style.backgroundColor = "red"
            p.style.color ="white"
    }
    });

