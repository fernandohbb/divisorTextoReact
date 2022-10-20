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
    const[limpar, setLimpar] = useState();    
    //const[qnt, setQnt] = useState([]);    
    const [textoUsuario, setTextoarea] = useState("")

  return (
    <div className="App">
      <Menu name=".com" />
      <Textoarea textoUsuario={textoUsuario} setTextoarea={setTextoarea}/>
      <BtnDividir setDivisoes={setDivisoes} />
      <BtnLimpar setLimpar={setLimpar}/>
      <TableDivisoes textoDividido={divisoes}/>
      <Footer></Footer>
          </div>
  );
}

export default App;
