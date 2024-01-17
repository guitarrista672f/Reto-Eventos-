


let anuncio=document.getElementById('anuncio');

let contenedor=document.getElementById('contenedor');



let handler=function({target}){

    console.log(target);
    
    if (target.className=='botonCarrito'){
         console.log('Evento click detectado');
        const h2=target.parentElement.childNodes[3].innerText;
        anuncio.childNodes[1].innerText=h2 ;
        // console.log(h2);
        // anuncio.classList.add('getTransition');

        anuncio.classList.remove('animar');
        setTimeout(()=>{anuncio.classList.add('animar');},100);
        
  
        
        

    }
}





contenedor.addEventListener('click',handler);



