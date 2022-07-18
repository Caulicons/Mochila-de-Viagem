import removendoDoLS from "../../service/removendoLS.js"

export default function botãoDeletar() {

   let excluir = document.createElement('button')
   excluir.textContent = 'X'

   excluir.addEventListener('click', function () {
    
       this.parentElement.remove() 
       removendoDoLS(this.parentElement.textContent)
   }) 

   return excluir
}