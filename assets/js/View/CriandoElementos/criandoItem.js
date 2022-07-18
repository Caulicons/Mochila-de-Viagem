import removendoDoLS from "../../service/removendoLS.js"
import botãoDeletar from "./botaoDeletar.js"

export default function CriandoLi(nome, quantidade) {

    const lista = document.querySelector('#lista')

    const li = document.createElement(`li`)
    li.classList.add('item')
    li.setAttribute('id', 'item')
    li.textContent = nome

    const strong = document.createElement(`strong`)
    strong.textContent = quantidade

    li.appendChild(strong)
    li.appendChild(botãoDeletar())

    lista.appendChild(li)

    li.addEventListener('dblclick', function () {

        this.remove()
        removendoDoLS(this.textContent)
    })
}
