import './App.css';
import React from 'react'
import { useState } from "react"
import { Menu} from './components/Menu';
import { Textoarea} from './components/Textoarea';
import { BtnDividir} from './button/BtnDividir';
import { BtnLimpar} from './button/BtnLimpar';
import { TableDivisoes} from './components/TableDivisoes';
import { Footer} from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

const[divisoes, setDivisoes] = useState([]);
const [textoUsuario, setTextoUsuario] = useState("1No princípio, criou Deus os céus e a terra. 2A terra, porém, estava sem forma e vazia; havia trevas sobre a face do abismo, e o Espírito de Deus pairava por sobre as águas.3Disse Deus: Haja luz; e houve luz. 4E viu Deus que a luz era boa; e fez separação entre a luz e as trevas. 5Chamou Deus à luz Dia e às trevas, Noite. Houve tarde e manhã, o primeiro dia.6E disse Deus: Haja firmamento no meio das águas e separação entre águas e águas. 7Fez, pois, Deus o firmamento e separação entre as águas debaixo do firmamento e as águas sobre o firmamento. E assim se fez. 8E chamou Deus ao firmamento Céus. Houve tarde e manhã, o segundo dia.")

return (
    <div className="App">
      <Menu name=".com" />
      <Textoarea textoUsuario={textoUsuario} 
                 setTextoUsuario={setTextoUsuario}/>
      <BtnDividir setDivisoes={setDivisoes} />
      <BtnLimpar funcaoLimpar={setTextoUsuario}/>
      <TableDivisoes textoDividido={divisoes}/>
      <Footer></Footer>
    </div>
  );
}

export default App;
