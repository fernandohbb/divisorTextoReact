import { Button } from 'react-bootstrap';
import React from 'react'
export const BtnLimpar = ({funcaoLimpar}) => {

    function limparTexto(){
      funcaoLimpar("");
    }

    return (
    <div>
        <Button variant="primary"
                className='btn-limpar'
                onClick={limparTexto}>
                Limpar 
        </Button>
    </div>
    )
}