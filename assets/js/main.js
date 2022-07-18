import  triagemLi from "./Mochila/triagemLi.js"
import mascaraNomeInput from "./Mochila/mascara.js"
import verificandoLS from "./LocalStorage/verificandoLS.js";

verificandoLS()

document.querySelector('#cadastrar').onclick = (event) => {
    console.log(event)
    event.preventDefault();
    
    const nome = document.querySelector('#nome')
    const quantidade = document.querySelector('#quantidade')

    if(nome.value && quantidade.value){
    triagemLi(nome.value, quantidade.value)

    nome.value = ''
    quantidade.value = ''
    nome.focus()
    }
} 

document.querySelector('#nome')
.addEventListener('input', input => {
    input.target.value = mascaraNomeInput(input.target.value)
})