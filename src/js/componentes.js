import '../css/componentes.css';
import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar =(nombre)=>{
    
    console.log('Creando una etiqueta html');

    const h1 =document.createElement('h1');

    h1.innerText=`hola, ${nombre} Hora de movile legens`;

    document.body.append(h1);

    //img
    console.log(webpacklogo);
    const img=document.createElement('img');
    img.src=webpacklogo;
    document.body.append(img);

}
