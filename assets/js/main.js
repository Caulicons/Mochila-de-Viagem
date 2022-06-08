import { triagemLi } from "./view/adicionando.js"
import { mascaraNome} from "./view/mascara.js"

document.querySelector('form').onsubmit = (event) => {

    event.preventDefault();
    const nome = event.target['nome']
    const quantidade = event.target['quantidade']

    if(nome.value && quantidade.value){
    triagemLi(nome.value, quantidade.value)

    nome.value = ''
    quantidade.value = ''
    nome.focus()
    }
} 

document.querySelector('#nome')
.addEventListener('input', input => {
    input.target.value = mascaraNome(input.target.value)
})