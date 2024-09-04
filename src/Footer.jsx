import React from 'react';
import ig from '../images/camara.png'
import wsp from '../images/sin-nombre.png'
import mail from '../images/nuevo-correo-electronico.png'

function Footer() {
  return (
    <footer className="flex justify-center items-center flex-direction-row p-4" >
      <div className=" ">
        <span className='text-5xl pt-4 '>🐶</span>
        <div  className="flex text-left mt-4 ml-10 w-2/3">Espacio dedicado para encontrar, regalar y adoptar a mascotas.</div>
        <div className="flex text-left mt-4 ml-10 w-2/3">hola@portalmascotas.com</div>
      </div>
      <div className="flex justify-center items-center flex-direction-col border border-red-500 border-solid border-3">
        <div className='flex justify-center items-center flex-direction-row'> <img src={ig} className='mr-4' /> <img src={wsp}  className='mr-4' /> <img src={mail}  className='mr-4'/></div>
        <div className='border border-red-500 border-solid border-3'>PortalMascotas Copyright 2024. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}

export default Footer;