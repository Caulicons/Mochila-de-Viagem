export default function editandoLS(nome, quantidade) {

   const mochilaLS = JSON.parse(localStorage.getItem('bolsa'))
 
   mochilaLS.forEach(item => {
 
     if (item.nome === nome) {
      item.quantidade = quantidade
     }
   })
 
   localStorage.bolsa = JSON.stringify(mochilaLS)
}
 