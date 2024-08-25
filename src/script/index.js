class MensagemCliente {
    constructor(nomeCli,emailCli,telefoneCli, mensagemCli) {
        this.nomeCli = nomeCli; this.emailCli = emailCli; this.telefoneCli = telefoneCli;
        this.mensagemCli = mensagemCli;
    }
}
const inputs = document.querySelectorAll("input");
const spans = document.querySelectorAll("span");
const buttonAtivo = document.querySelector("button");
let i=0;
buttonAtivo.addEventListener("click",async ()=>{
inputs.forEach((input, i) =>{
    if(input.value === ''){
        spans[i].classList.add("mostrar");
    }

    input.addEventListener("change",()=>{
        if(input.value !== ''){
            spans[i].classList.remove("mostrar");
            spans[i].classList.add("esconder");
        }
        i++;
    })
})

await new Promise(resolve => setTimeout(resolve, 0)); // Simplesmente aguarda o final do evento do loop

    // Segundo loop para criar a mensagem apenas se todos os campos estiverem preenchidos
    let allFilled = true;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
            allFilled = false;
            break;
        }
    }

    if (allFilled) {
        const mensagem1 = new MensagemCliente(
            document.getElementById("nome").value,
            document.getElementById("email").value,
            document.getElementById("telefone").value,
            document.getElementById("mensagem").value
        );
        alert("Sua mensagem foi salva com sucesso!!!");
        console.log(mensagem1);
    }
});
