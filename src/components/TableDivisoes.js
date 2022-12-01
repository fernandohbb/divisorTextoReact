import React from 'react';
import Table from 'react-bootstrap/Table';

export const TableDivisoes = ({ textoDividido }) => {

  const copiarTextoDividido = (textoParaCopiar) => {
    navigator.clipboard.writeText(textoParaCopiar);
    alert("Copiado!")
}

  return (
    <Table striped bordered hover variant="dark" id="tab">

      <tbody id='tbody'>
        {
          textoDividido.map(
          divisao => {
            return (
                  <tr>
                        <th id="qnt">
                              {divisao.lenght}
                        </th>
                        <th id="texto-dividido" >
                              {divisao}
                        </th>
                        <th id="copiar-texto">
                              <button onClick={ function() { copiarTextoDividido(divisao) }}>
                              Copiar
                      </button>
                        </th>
                  </tr>
            )
          }
        )
        }
      </tbody>
    </Table>

  )
}
