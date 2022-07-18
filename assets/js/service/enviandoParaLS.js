export default function enviandoParaLS(nome, quantidade) {

  const bolsa = JSON.parse(localStorage.getItem('bolsa'))

  bolsa.push({
    nome: nome,
    quantidade: quantidade
  })

  localStorage.bolsa = JSON.stringify(bolsa)
}

