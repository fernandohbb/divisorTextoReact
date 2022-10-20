import { FaDivide} from "react-icons/fa";
import React from 'react';



export const Textoarea = ({textoUsuario, setTextoarea}) => {

    return (
    <section className="section-area">
    <h5>Divisor de texto <FaDivide size={25} color="black" /> </h5>
    <textarea id = "dividir"  value={textoUsuario} onChange={(e) => setTextoarea(e.target.value)} className="textoarea" placeholder="Digite ou cole o texto aqui....">
    </textarea>
      </section>
           
           

     
     
    )
}