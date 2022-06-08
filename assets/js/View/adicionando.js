import { editandoLS, enviandoParaLS, removendoDoLS } from "../service/localS.js"

export function triagemLi(nome, quantidade) {

    let nomeFormatado = nome.trim()

    if(encontroAlgum(nomeFormatado, quantidade)) {return}     
    else {criandoLi(nome, quantidade)}
}

function encontroAlgum(nome, quantidade){
    let res = false
    let itens = document.querySelectorAll('#item')

    itens.forEach(item => {

        if(item.innerHTML.includes(nome)) {
            item.innerHTML = `${nome}<strong>${quantidade}</strong><button>x</button>`
            editandoLS(nome, quantidade)
            res = true }
        }
    )
    return res
}

function criandoLi(nome, quantidade) {

    enviandoParaLS(nome, quantidade)

    const lista = document.querySelector('#lista')

    let li = document.createElement(`li`)
    li.classList.add('item')
    li.setAttribute('id', 'item')
    li.textContent = nome

    let strong = document.createElement(`strong`) 
    strong.textContent = quantidade

    li.appendChild(strong)
    li.appendChild(botãoDeletar())

    lista.appendChild(li)

    li.addEventListener('dblclick', function () {

        this.remove() 
        removendoDoLS(this.textContent)
    }) 
}

function botãoDeletar() {

    let excluir = document.createElement('button')
    excluir.textContent = 'X'

    excluir.addEventListener('click', function () {

        this.parentElement.remove() 
        removendoDoLS(this.parentElement.textContent)
    }) 

    return excluir
}
