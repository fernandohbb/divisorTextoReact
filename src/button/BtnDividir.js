import React from 'react'
import { Button } from 'react-bootstrap';

export const BtnDividir = ({setDivisoes}) => {
   

    function dividirTexto(){
          let slides = [];
          let textoUsuario = document.querySelector('#dividir').value
          while (textoUsuario.trim().length > 0) {
          let textoSlide = textoUsuario.substring(0,385);
          const indiceInicioUltimaLinha = 310;
          let ultimaLinha = textoSlide.substring(indiceInicioUltimaLinha);   
          let posicaoDosCaracteres= indiceInicioUltimaLinha + ultimaLinha.indexOf(' 1') ;

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
               posicaoDosCaracteres= indiceInicioUltimaLinha + ultimaLinha.indexOf(' 2');
          }

          if(versiculo1NaoEncontrado 
             && versiculo2NaoEncontrado){
               posicaoDosCaracteres= indiceInicioUltimaLinha + ultimaLinha.indexOf(' 3');
          }

          if(versiculo1NaoEncontrado 
             && versiculo2NaoEncontrado 
             && versiculo3NaoEncontrado ){
              posicaoDosCaracteres= indiceInicioUltimaLinha + ultimaLinha.indexOf(' 4');
          }

          if(versiculo1NaoEncontrado 
             && versiculo2NaoEncontrado 
             && versiculo3NaoEncontrado
             && versiculo4NaoEncontrado ){
              posicaoDosCaracteres= indiceInicioUltimaLinha + ultimaLinha.indexOf(' 5');
          }

          if(versiculo1NaoEncontrado 
             && versiculo2NaoEncontrado 
             && versiculo3NaoEncontrado
             && versiculo4NaoEncontrado 
             && versiculo5NaoEncontrado){
              posicaoDosCaracteres= indiceInicioUltimaLinha + ultimaLinha.indexOf(' 6');
          }

          if(versiculo1NaoEncontrado 
             && versiculo2NaoEncontrado 
             && versiculo3NaoEncontrado
             && versiculo4NaoEncontrado 
             && versiculo5NaoEncontrado 
             &&  versiculo6NaoEncontrado  ){
             posicaoDosCaracteres= indiceInicioUltimaLinha + ultimaLinha.indexOf(' 7');
          }

          if(versiculo1NaoEncontrado 
             && versiculo2NaoEncontrado 
             && versiculo3NaoEncontrado
             && versiculo4NaoEncontrado 
             && versiculo5NaoEncontrado 
             &&  versiculo6NaoEncontrado
             && versiculo7NaoEncontrado ){
               posicaoDosCaracteres= indiceInicioUltimaLinha + ultimaLinha.indexOf(' 8');
          }

          if(versiculo1NaoEncontrado 
             && versiculo2NaoEncontrado 
             && versiculo3NaoEncontrado
             && versiculo4NaoEncontrado 
             && versiculo5NaoEncontrado 
             && versiculo6NaoEncontrado 
             && versiculo7NaoEncontrado 
             && versiculo8NaoEncontrado ){
               posicaoDosCaracteres= indiceInicioUltimaLinha + ultimaLinha.indexOf(' 9');
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
               posicaoDosCaracteres= indiceInicioUltimaLinha + ultimaLinha.indexOf('. ');
          }     

          if(pontoFinalNaoEncontrado){
               posicaoDosCaracteres= indiceInicioUltimaLinha + pontoInterrogacaoNaoEncontrado;
          }

          if(pontoFinalNaoEncontrado 
             && pontoInterrogacaoNaoEncontrado){
               posicaoDosCaracteres= indiceInicioUltimaLinha + ultimaLinha.indexOf('!');
          }

          if(pontoFinalNaoEncontrado 
             && pontoInterrogacaoNaoEncontrado 
             && pontoExclamacaoNaoEncontrado){
               posicaoDosCaracteres= indiceInicioUltimaLinha + ultimaLinha.indexOf(':');
          }

          if(pontoFinalNaoEncontrado 
             && pontoInterrogacaoNaoEncontrado 
             && pontoExclamacaoNaoEncontrado 
             && doisPontosNaoEncontrado){
               posicaoDosCaracteres= indiceInicioUltimaLinha + ultimaLinha.indexOf(';');
          }

          if(pontoFinalNaoEncontrado  
             && pontoInterrogacaoNaoEncontrado
             && pontoExclamacaoNaoEncontrado
             && doisPontosNaoEncontrado 
             && pontoVirgulaNaoEncontrado){
               posicaoDosCaracteres= indiceInicioUltimaLinha + ultimaLinha.indexOf(',');
          }
          if(pontoFinalNaoEncontrado  
             && pontoInterrogacaoNaoEncontrado 
             && pontoExclamacaoNaoEncontrado 
             && doisPontosNaoEncontrado 
             && pontoVirgulaNaoEncontrado 
             && virgulaNaoEncontrado){
               posicaoDosCaracteres= indiceInicioUltimaLinha + ultimaLinha.indexOf(' ');
          }    

          console.log({ultimaLinha})
          textoSlide = textoUsuario.substring(0,posicaoDosCaracteres+1);
          textoUsuario = textoUsuario.substring(posicaoDosCaracteres+1);
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