import React from 'react';
import { Route, Link } from 'wouter';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref as dbRef, push, set } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBELDPDQP7qLlIOB9XANhcU-7Ur7-U_x-8",
  authDomain: "mascotas-8f711.firebaseapp.com",
  projectId: "mascotas-8f711",
  storageBucket: "mascotas-8f711.appspot.com",
  messagingSenderId: "209912647562",
  appId: "1:209912647562:web:d2f038c303b4304ae04273"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);  
const storage = getStorage(app);


function Menu(){
  return (
    <>
    <div className='navbar'>
      <h1 className='mb-4 text-5xl pb-2 pt-8 mt-0  md:w-1/2 lg:w-1/2 mx-auto '>Portal Mascotas 🐶</h1>
      
      <nav className='w-full flex justify-center items-center'>
        <Link href="/" className="ml-2 mr-5 pb-4 xs:text-md md:text-lg lg:text-lg">Inicio</Link>
        <Link href="/buscar" className="ml-2 mr-8 pb-4 xs:text-md xs:whitespace-nowrap md:text-lg lg:text-lg">Buscar</Link>
        <Link href="/encontrar" className="mr-10 pb-4 xs:text-md md:text-lg lg:text-lg">Encontrar</Link>
        <Link href="/darenadopcion" className="mr-10 pb-4 xs:text-md md:text-lg lg:text-lg">Dar en adopción</Link>
        <Link href="/adoptar" className="mr-10 pb-4 xs:text-md md:text-lg lg:text-lg">Adoptar</Link>
      </nav>
      </div>
      <Route path="/">
        <h1 className="text-center">info</h1>        
      </Route>
      <Route path="/buscar">
        <h1 className="text-center">Buscar</h1>   
        <form onSubmit='' className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
    <div className="mb-4">
      <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
      <input type="text" id="name" name="name" placeholder="Pon el nombre de tu amigo peludo" value='' onChange='' required 
             className="bg-white shadow-lg border-2 appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>  
    
    <div className="mb-4">
      <label htmlFor="raza" className="block text-gray-700 text-sm font-bold mb-2">Raza:</label>
      <input type="text" id="raza" name="raza" placeholder="Raza de tu mascota" value='' onChange='' required 
             className="bg-white shadow-lg border-2  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    
    <div className="mb-4">
      <label htmlFor="tam" className="block text-gray-700 text-sm font-bold mb-2">Tamaño:</label>
      <input type="text" id="tam" name="tam"   placeholder="Pequeño, mediano, grande" value='' onChange='' required 
             className="bg-white shadow-lg border-2  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>

    <div className="mb-4">
      <label htmlFor="micro" className="block text-gray-700 text-sm font-bold mb-2">Microchip:</label>
      <input type="text" id="micro" name="micro" placeholder="Número de microchip" value='' onChange=''required 
             className="bg-white shadow-lg border-2  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>

    <div className="mb-4">
      <label htmlFor="marcas" className="block text-gray-700 text-sm font-bold mb-2">Marcas:</label>
      <input type="text" id="marcas" name="marcas" placeholder='Descripción de cualquier marca distintiva' value='' onChange='' required 
             className="bg-white shadow-lg border-2  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>

    <div className="mb-4">
      <label htmlFor="fecha_de_perdida" className="block text-gray-700 text-sm font-bold mb-2">Fecha de pérdida:</label>
      <input type="date" id="fecha_de_perdida" name="fecha_de_perdida" value='' onChange='' required 
             className="bg-white shadow-lg border-2  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>

    <div className="mb-6">
      <label htmlFor="descripcion" className="block text-gray-700 text-sm font-bold mb-2">Descripción:</label>
      <textarea id="descripcion" placeholder='Detalles sobre tu mascota' name="descripcion" value='' onChange='' required 
                className="bg-white shadow-lg border-2  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"></textarea>
    </div>
    
    <div className="flex items-center justify-between">
      <button type="submit"  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline `}
          >
       
      </button>
    </div>

   
  </form>     
      </Route>
      <Route path="/encontrar">
        <h1 className="text-center">Encontrar</h1>        
      </Route>
      <Route path="/darenadopcion">
        <h1 className="text-center">Dar en Adopción</h1>        
      </Route>
      <Route path="/adoptar">
        <h1 className="text-center">Adoptar</h1>        
      </Route>
    </>

  )
}


export default Menu;