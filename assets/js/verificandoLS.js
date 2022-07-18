import CriandoLi from "./actions/CriandoElementos/criandoLi.js"

export default function verificandoLS() {

  const bolsaLS = JSON.parse(localStorage.getItem('bolsa'))
  if (!bolsaLS) {localStorage.setItem('bolsa', '[]')}

  bolsaLS.forEach(conteúdo =>
      CriandoLi(conteúdo.nome, conteúdo.quantidade, true)
  )
} 