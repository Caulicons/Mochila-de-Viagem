export default function removendoDoLS(li) {

   let tchau = li.replace(/(\d+X)/g, '')
 
   let bolsa = JSON.parse(localStorage.getItem('bolsa'))

   bolsa.forEach((item, índice, bolsa) => {
 
     if (item.nome === tchau) bolsa.splice(índice, 1)
   })
 
   localStorage.bolsa = JSON.stringify(bolsa)
 }