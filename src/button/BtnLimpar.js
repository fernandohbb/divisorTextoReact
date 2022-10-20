import { Button } from 'react-bootstrap';
import React from 'react'
export const BtnLimpar = ({setLimpar}) => {

    function limparTexto(){
        let limpar = document.querySelector("#dividir")
        limpar.value = '';
      // let limpar =  location.reload();
       setLimpar(limpar)
    }

    return (
     <div>
      <Button variant="primary" className='btn-limpar' onClick={limparTexto}>Limpar</Button>
         </div>
    )
}