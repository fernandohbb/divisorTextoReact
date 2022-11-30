import React from 'react'
import { Button } from 'react-bootstrap';

export const BtnDividir = ({setDivisoes}) => {
   

    function dividirTexto(){
     var slides = [];
     var textoUsuario = document.querySelector('#dividir').value
     while (textoUsuario.trim().length > 0) {
     var textoSlide = textoUsuario.substring(0,385);
     var ultimaLinha = textoSlide.substring(310);     
     var indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 1') ;
     if(ultimaLinha.indexOf(' 1')=== -1){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 2');
     }
     if(ultimaLinha.indexOf(' 1')=== -1 && ultimaLinha.indexOf(' 2')=== -1){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 3') ;
     }
      if(ultimaLinha.indexOf(' 1')=== -1 && ultimaLinha.indexOf(' 2')=== -1 && ultimaLinha.indexOf(' 3')=== -1  ){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 4') ;
     }
     if(ultimaLinha.indexOf(' 1')=== -1 && ultimaLinha.indexOf(' 2')=== -1 && ultimaLinha.indexOf(' 3')=== -1 && ultimaLinha.indexOf(' 4')=== -1 ){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 5') ;
     }
     if(ultimaLinha.indexOf(' 1')=== -1 && ultimaLinha.indexOf(' 2')=== -1 && ultimaLinha.indexOf(' 3')=== -1 && ultimaLinha.indexOf(' 4')=== -1 && ultimaLinha.indexOf(' 5')=== -1){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 6') ;
     }
     if(ultimaLinha.indexOf(' 1')=== -1 && ultimaLinha.indexOf(' 2')=== -1 && ultimaLinha.indexOf(' 3')=== -1 && ultimaLinha.indexOf(' 4')=== -1 && ultimaLinha.indexOf(' 5')=== -1 &&  ultimaLinha.indexOf(' 6')=== -1  ){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 7') ;
     }
     if(ultimaLinha.indexOf(' 1')=== -1 && ultimaLinha.indexOf(' 2')=== -1 && ultimaLinha.indexOf(' 3')=== -1 && ultimaLinha.indexOf(' 4')=== -1 && ultimaLinha.indexOf(' 5')=== -1 &&  ultimaLinha.indexOf(' 6')=== -1 && ultimaLinha.indexOf(' 7')=== -1 ){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 8') ;
     }
     if(ultimaLinha.indexOf(' 1')=== -1 && ultimaLinha.indexOf(' 2')=== -1 && ultimaLinha.indexOf(' 3')=== -1 && ultimaLinha.indexOf(' 4')=== -1 && ultimaLinha.indexOf(' 5')=== -1 &&  ultimaLinha.indexOf(' 6')=== -1 && ultimaLinha.indexOf(' 7')=== -1 && ultimaLinha.indexOf(' 8')=== -1 ){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(' 9') ;
     }
     if(ultimaLinha.indexOf(' 1')=== -1 && ultimaLinha.indexOf(' 2')=== -1 && ultimaLinha.indexOf(' 3')=== -1 && ultimaLinha.indexOf(' 4')=== -1 && ultimaLinha.indexOf(' 5')=== -1 &&  ultimaLinha.indexOf(' 6')=== -1 && ultimaLinha.indexOf(' 7')=== -1 && ultimaLinha.indexOf(' 8')=== -1 && ultimaLinha.indexOf(' 9')=== -1 ){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf('. ') ;
     }          
     if(ultimaLinha.indexOf('. ')===-1){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf('?') ;
     }
     if(ultimaLinha.indexOf('. ')=== -1 && ultimaLinha.indexOf('?')=== -1){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf('!') ;
     }
     if(ultimaLinha.indexOf('. ')=== -1 && ultimaLinha.indexOf('?')=== -1 && ultimaLinha.indexOf('!')=== -1){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(':') ;
     }
     if(ultimaLinha.indexOf('. ')=== -1 && ultimaLinha.indexOf('?')=== -1 && ultimaLinha.indexOf('!')=== -1 && ultimaLinha.indexOf(':')=== -1){
        indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(';') ;
     }
     if(ultimaLinha.indexOf('. ')=== -1 && ultimaLinha.indexOf('?')=== -1 && ultimaLinha.indexOf('!')=== -1 && ultimaLinha.indexOf(':')=== -1 && ultimaLinha.indexOf(';')=== -1){
       indicePontoTextoUsuario = 310 + ultimaLinha.indexOf(',');
     }
     if(ultimaLinha.indexOf('. ')=== -1 && ultimaLinha.indexOf('?')=== -1 && ultimaLinha.indexOf('!')=== -1 && ultimaLinha.indexOf(':')=== -1 && ultimaLinha.indexOf(';')=== -1 && ultimaLinha.indexOf(',')=== -1 ){
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