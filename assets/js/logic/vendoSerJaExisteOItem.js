import  editandoLS  from "../LocalStorage/editandoLS.js"

export default function vendoSerJaExisteOItem(nome, quantidade) {
 
    let existe = false
    let itens = document.querySelectorAll('#item')
    
    itens.forEach(item => {
    
        const nomeItem = item.innerHTML
        .replace(/\<strong>\d+<\/strong>\<button>X<\/button>/, '')

        if (nomeItem === nome) {

            item.innerHTML = `${nome}<strong>${quantidade}</strong><button>x</button>`
            editandoLS(nome, quantidade)
            existe = true
        }
    })
    
    return existe
}



