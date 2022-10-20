import React from 'react';
import Table from 'react-bootstrap/Table';

export const TableDivisoes = ({textoDividido}) => {

  const copiarTextoDividido = (textoParaCopiar)=>{
                          navigator.clipboard.writeText();
  }


    return (
        <Table striped bordered hover variant="dark" id="tab">
              
              <tbody id='tbody'>
                    { textoDividido.map(divisao => (
                        <tr>
                      <th id="qnt">#</th>
                      <th id="texto-dividido" >{divisao}</th>
                      <th id="copiar-texto"><button onClick={copiarTextoDividido(divisao)}>Copiar</button></th>
                      </tr>
                      )
                      ) 
                      }
             </tbody>
      </Table>
      
    )
}
                    //btn.onclick = function (){ copiarTextoDividido("tdDividido" + (i + 1))};
