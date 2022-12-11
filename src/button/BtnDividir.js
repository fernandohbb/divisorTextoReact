import React from 'react'
import { Button } from 'react-bootstrap';

export const BtnDividir = ({setDivisoes}) => {
       function encontrarCaractereDivisor(ultimaLinha, tamanhoTextoSlide) {
          const ultimaLinhaInvertida = ultimaLinha.split('').reverse().join('');
          let indiceCaractereInvertido = ultimaLinhaInvertida.search(/[123456789]/);

          if (indiceCaractereInvertido === -1){
            indiceCaractereInvertido = ultimaLinhaInvertida.search(/[?!:;,]/);
          }
          if(indiceCaractereInvertido === -1){
            indiceCaractereInvertido = ultimaLinhaInvertida.search(/[ ]/);

          }
          const indiceCaractereDivisor = tamanhoTextoSlide - indiceCaractereInvertido;
             return indiceCaractereDivisor;
          }

        function dividirTexto(){
          let slides = [];
          let textoUsuario = document.querySelector('#dividir').value
          while (textoUsuario.trim().length > 0) {
            let textoSlide = textoUsuario.substring(0,385);
            const indiceInicioUltimaLinha = 310;
            let ultimaLinha = textoSlide.substring(indiceInicioUltimaLinha);   
         
            console.log({ultimaLinha})
            const indiceCaractereDivisor = encontrarCaractereDivisor(ultimaLinha, textoSlide.length)
            textoSlide = textoUsuario.substring(0, indiceCaractereDivisor -1);
            textoUsuario = textoUsuario.substring( indiceCaractereDivisor -1);
            slides.push(textoSlide.trim());
          }
            setDivisoes(slides);
          }

return (
    <div>
        <Button 
            variant="primary"
            onClick={dividirTexto}
            className="btn-dividir">
            Dividir
        </Button>
    </div>
       )
      }
   