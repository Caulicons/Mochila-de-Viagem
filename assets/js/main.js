import triagemLi from "./actions/triagemLi.js"
import mascaraNomeInput from "./actions/mascara.js"
import verificandoLS from "./verificandoLS.js"

verificandoLS()

document.querySelector('form').onsubmit = (event) => {

    event.preventDefault();

    const nome = event.target['nome']
    const quantidade = event.target['quantidade']

    if (nome.value && quantidade.value) {
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