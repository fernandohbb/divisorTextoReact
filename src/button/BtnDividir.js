import React from 'react'
import { Button } from 'react-bootstrap';

export const BtnDividir = ({setDivisoes}) => {
   

    function dividirTexto(){
          let slides = [];
          let textoUsuario = document.querySelector('#dividir').value
          while (textoUsuario.trim().length > 0) {
          let textoSlide = textoUsuario.substring(0,385);
          let ultimaLinha = textoSlide.substring(310);     
          let indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 1') ;

          const versiculo1NaoEncontrado = ultimaLinha.indexOf(' 1') === -1 ;
          const versiculo2NaoEncontrado = ultimaLinha.indexOf(' 2') === -1 ;
          const versiculo3NaoEncontrado = ultimaLinha.indexOf(' 3') === -1 ;
          const versiculo4NaoEncontrado = ultimaLinha.indexOf(' 4') === -1 ;
          const versiculo5NaoEncontrado = ultimaLinha.indexOf(' 5') === -1 ;
          const versiculo6NaoEncontrado = ultimaLinha.indexOf(' 6') === -1 ;
          const versiculo7NaoEncontrado = ultimaLinha.indexOf(' 7') === -1 ;
          const versiculo8NaoEncontrado = ultimaLinha.indexOf(' 8') === -1 ;
          const versiculo9NaoEncontrado = ultimaLinha.indexOf(' 9') === -1 ;

          const pontoFinalNaoEncontrado = ultimaLinha.indexOf('. ') === -1 ;
          const pontoInterrogacaoNaoEncontrado = ultimaLinha.indexOf('?   ') === -1 ;
          const pontoExclamacaoNaoEncontrado = ultimaLinha.indexOf('! ') === -1 ;
          const doisPontosNaoEncontrado = ultimaLinha.indexOf(': ') === -1 ;
          const pontoVirgulaNaoEncontrado = ultimaLinha.indexOf('; ') === -1;
          const virgulaNaoEncontrado = ultimaLinha.indexOf(' ') === -1;

          if(versiculo1NaoEncontrado){
               indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 2');
          }

          if(versiculo1NaoEncontrado 
             && versiculo2NaoEncontrado){
               indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 3');
          }

          if(versiculo1NaoEncontrado 
             && versiculo2NaoEncontrado 
             && versiculo3NaoEncontrado ){
              indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 4');
          }

          if(versiculo1NaoEncontrado 
             && versiculo2NaoEncontrado 
             && versiculo3NaoEncontrado
             && versiculo4NaoEncontrado ){
              indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 5');
          }

          if(versiculo1NaoEncontrado 
             && versiculo2NaoEncontrado 
             && versiculo3NaoEncontrado
             && versiculo4NaoEncontrado 
             && versiculo5NaoEncontrado){
              indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 6');
          }

          if(versiculo1NaoEncontrado 
             && versiculo2NaoEncontrado 
             && versiculo3NaoEncontrado
             && versiculo4NaoEncontrado 
             && versiculo5NaoEncontrado 
             &&  versiculo6NaoEncontrado  ){
             indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 7');
          }

          if(versiculo1NaoEncontrado 
             && versiculo2NaoEncontrado 
             && versiculo3NaoEncontrado
             && versiculo4NaoEncontrado 
             && versiculo5NaoEncontrado 
             &&  versiculo6NaoEncontrado
             && versiculo7NaoEncontrado ){
               indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 8');
          }

          if(versiculo1NaoEncontrado 
             && versiculo2NaoEncontrado 
             && versiculo3NaoEncontrado
             && versiculo4NaoEncontrado 
             && versiculo5NaoEncontrado 
             && versiculo6NaoEncontrado 
             && versiculo7NaoEncontrado 
             && versiculo8NaoEncontrado ){
               indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 9');
          }

          if(versiculo1NaoEncontrado 
             && versiculo2NaoEncontrado 
             && versiculo3NaoEncontrado
             && versiculo4NaoEncontrado 
             && versiculo5NaoEncontrado 
             && versiculo6NaoEncontrado 
             && versiculo7NaoEncontrado 
             && versiculo8NaoEncontrado 
             && versiculo9NaoEncontrado){
               indicePontoTextoUsuario = 310 + ultimaLinha.indexOf('. ');
          }     

          if(pontoFinalNaoEncontrado){
               indicePontoTextoUsuario = 310 + pontoInterrogacaoNaoEncontrado;
          }

          if(pontoFinalNaoEncontrado 
             && pontoInterrogacaoNaoEncontrado){
               indicePontoTextoUsuario = 310 + ultimaLinha.indexOf('!');
          }

          if(pontoFinalNaoEncontrado 
             && pontoInterrogacaoNaoEncontrado 
             && pontoExclamacaoNaoEncontrado){
               indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(':');
          }

          if(pontoFinalNaoEncontrado 
             && pontoInterrogacaoNaoEncontrado 
             && pontoExclamacaoNaoEncontrado 
             && doisPontosNaoEncontrado){
               indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(';');
          }

          if(pontoFinalNaoEncontrado  
             && pontoInterrogacaoNaoEncontrado
             && pontoExclamacaoNaoEncontrado
             && doisPontosNaoEncontrado 
             && pontoVirgulaNaoEncontrado){
               indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(',');
          }
          if(pontoFinalNaoEncontrado  
             && pontoInterrogacaoNaoEncontrado 
             && pontoExclamacaoNaoEncontrado 
             && doisPontosNaoEncontrado 
             && pontoVirgulaNaoEncontrado 
             && virgulaNaoEncontrado){
               indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' ');
          }    

          console.log({ultimaLinha})
          textoSlide = textoUsuario.substring(0,indicePontoTextoUsuario +1);
          textoUsuario = textoUsuario.substring(indicePontoTextoUsuario +1);
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