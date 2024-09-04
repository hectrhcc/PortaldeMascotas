import React from 'react';
import ig from '../images/camara.png'
import wsp from '../images/sin-nombre.png'
import mail from '../images/nuevo-correo-electronico.png'

function Footer() {
  return (
    <footer className="flex justify-center items-center flex-direction-row p-4" >
      <div className=" ">
        <span className='text-5xl pt-4  '>🐶</span>
        <div  className="flex text-left mt-4 ml-10 w-2/3">Espacio dedicado para encontrar, regalar y adoptar a mascotas.</div>
        <div className="flex text-left mt-4 ml-10 w-2/3">hola@portalmascotas.com</div>
      </div>
      <div >
        <div className='flex justify-center items-center flex-direction-row mt-8 pt-2 ml-8'> 
        <a href="https://www.instagram.com/aricamascotas/"><img src={ig} className='mr-4' /></a> 
        <a href="https://web.whatsapp.com/"><img src={wsp}  className='mr-4' /></a>
        <a href="https://www.gmail.com/"><img src={mail}  className='mr-4'/></a></div>
        <div className='mt-14 ml-8 pt-2 text-left  w-2/3'>PortalMascotas Copyright 2024. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}

export default Footer;