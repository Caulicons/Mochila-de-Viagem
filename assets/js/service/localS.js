import { triagemLi } from "../view/adicionando.js"

const bolsa = []

function verificandoLS() {

  if(!localStorage.getItem('bolsa')) {
    localStorage.setItem('bolsa', JSON.stringify(new Array))
    verificandoLS()
}

    let bolsaLS = JSON.parse(localStorage.getItem('bolsa'))
    
    bolsaLS.forEach(conteúdo => {

      triagemLi(Object.keys(conteúdo).toString(), Object.values(conteúdo).toString()) 
    })
}verificandoLS() 

export function enviandoParaLS(nome, quantidade) {

  bolsa.push({[nome]: quantidade})

  localStorage.bolsa = JSON.stringify(bolsa)
}

export function editandoLS(nome, quantidade) {

    let b = JSON.parse(localStorage.getItem('bolsa'))

    b.forEach(item => {

         if(item[nome]) item[nome] = quantidade
        })

   localStorage.bolsa = JSON.stringify(b) 
}

export function removendoDoLS(li) {
  
  let tchau = li.replace(/(\d+X)/g, '')

  let bolsa = JSON.parse(localStorage.getItem('bolsa'))

  bolsa.forEach( (item, índice, bolsa) => {

      if(item[tchau]) bolsa.splice(índice, 1) 
  })

  localStorage.bolsa = JSON.stringify(bolsa)
  
}  

