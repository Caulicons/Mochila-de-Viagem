import { triagemLi } from "./View/adicionando.js"

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