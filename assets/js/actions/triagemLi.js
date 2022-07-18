import vendoSerJaExisteOItem from "./vendoSerJaExisteOItem.js"
import CriandoLi from "./CriandoElementos/criandoLi.js"
import enviandoParaLS from "../enviandoParaLS.js"

export default function triagemLi(nome, quantidade) {

   if(vendoSerJaExisteOItem(nome.trim(), quantidade)) {return}     
   else {
      CriandoLi(nome, quantidade) 
      enviandoParaLS(nome, quantidade)
   }
}
