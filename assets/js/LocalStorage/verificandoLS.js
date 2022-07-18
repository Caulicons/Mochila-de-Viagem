import CriandoLi from "../view/CriandoElementos/CriandoItem.js"

export default function verificandoLS() {

  const bolsaLS = JSON.parse(localStorage.getItem('bolsa'))
  if (!bolsaLS) {localStorage.setItem('bolsa', '[]')}

  bolsaLS.forEach(conteúdo =>
      CriandoLi(conteúdo.nome, conteúdo.quantidade, true)
  )
} 