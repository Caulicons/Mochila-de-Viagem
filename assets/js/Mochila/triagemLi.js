import vendoSerJaExisteOItem from "../Mochila/vendoSerJaExisteOItem.js"
import CriandoLi from "./CriandoElementos/criandoItem.js"
import enviandoParaLS from "../LocalStorage/enviandoParaLS.js"

export default function triagemLi(nome, quantidade) {

   if(vendoSerJaExisteOItem(nome.trim(), quantidade)) {return}     
   else {
      CriandoLi(nome, quantidade) 
      enviandoParaLS(nome, quantidade)
   }
}