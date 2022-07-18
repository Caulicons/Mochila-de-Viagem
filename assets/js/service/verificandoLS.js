import CriandoLi from "../view/CriandoElementos/CriandoItem.js"

export default function verificandoLS() {

  if (!localStorage.getItem('bolsa')) {
    localStorage.setItem('bolsa', JSON.stringify(new Array))
    verificandoLS()
  }

  let bolsaLS = JSON.parse(localStorage.getItem('bolsa'))

  bolsaLS.forEach(conteúdo =>
    CriandoLi(conteúdo.nome, conteúdo.quantidade, true)
  )
} 