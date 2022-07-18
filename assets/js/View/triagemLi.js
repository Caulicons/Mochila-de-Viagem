import vendoSerJaExisteOItem from "../logic/vendoSerJaExisteOItem.js"
import CriandoLi from "./CriandoElementos/criandoItem.js"
import enviandoParaLS from "../service/enviandoParaLS.js"

export default function triagemLi(nome, quantidade) {

   if(vendoSerJaExisteOItem(nome.trim(), quantidade)) {return}     
   else {
      CriandoLi(nome, quantidade) 
      enviandoParaLS(nome, quantidade)
   }
}