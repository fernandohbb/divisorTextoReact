
import Table from 'react-bootstrap/Table';

export const TableDivisoes = ({textoDividido}) => {

  

    return (
        <Table striped bordered hover variant="dark" id="tab">
              
              <tbody id='tbody'>
                    { textoDividido.map(divisao => (
                        <tr>
                      <th id="qnt"></th>
                      <th id="texto-dividido" >{divisao}</th>
                      <th id="copiar-texto"><button>Copiar</button></th>
                      </tr>
                      )
                      ) 
                      }
             </tbody>
      </Table>
      
    )
}