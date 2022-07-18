import  editandoLS  from "../service/editandoLS.js"

export default function vendoSerJaExisteOItem(nome, quantidade) {
 
    let res = false
    let itens = document.querySelectorAll('#item')

    itens.forEach(item => {
        const nomeItem = item.innerHTML
        .replace(/\<strong>\d+<\/strong>\<button>X<\/button>/, '')

        if (nomeItem.includes(nome)) {

            item.innerHTML = `${nome}<strong>${quantidade}</strong><button>x</button>`
            editandoLS(nome, quantidade)
            res = true
        }
    })
    
    return res
}



