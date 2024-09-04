import React from 'react';
import ig from '../images/camara.png'
import wsp from '../images/whatsapp.png'
import mail from '../images/nuevo-correo-electronico.png'

function Footer() {
  return (
    <footer>
      {/*<img src={image3} alt="Camarógrafo" className=' w-full md:mt-4 xs:mt-12 ' />*/}
      <div>
        <span>🐶</span>
        <div>Espacio dedicado para encontrar, regalar y adoptar a mascotas.</div>
        <div>hola@portalmascotas.com</div>
      </div>
      <div>
        <div> <img src={ig}></img> <img src={wsp}></img> <img src={mail}></img></div>
        <div>PortalMascotas Copyright 2024. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}

export default Footer;