
import React from 'react';
import { useState, useEffect } from "react"
import { Route, Link } from 'wouter';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref as dbRef, push, set } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

// Firebase configuration...

function Menu(){
  const [darkMode, setDarkMode] = useState(false)

  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className='navbar p-4'>
        <div className="flex items-center justify-end mb-4">
          <p className="text-gray-700 dark:text-gray-300 font-bold mr-2">Dark mode</p>
          <label htmlFor="darkmode" className="bg-gray-300 dark:bg-gray-600 w-14 h-7 rounded-full cursor-pointer p-1 relative">
            <input onClick={handleClick} type="checkbox" id="darkmode" className="sr-only peer" checked={darkMode} readOnly />
            <div className="w-5 h-5 bg-white rounded-full peer-checked:translate-x-7 transition-all"></div>
          </label>
        </div>
        <h1 className='text-5xl font-bold text-center mb-8'>Portal Mascotas 🐶</h1>
        
        <nav className='flex justify-center items-center space-x-4'>
          <Link href="/" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Inicio</Link>
          <Link href="/buscar" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Buscar</Link>
          <Link href="/encontrar" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Encontrar</Link>
          <Link href="/darenadopcion" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Dar en adopción</Link>
          <Link href="/adoptar" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Adoptar</Link>
        </nav>
      </div>

      <Route path="/">
        <h1 className="text-center mt-8 mb-12 mx-auto max-w-2xl text-xl">Este sitio web brinda un espacio exclusivo para la publicación de valiosa información acerca de mascotas disponibles para buscar, encontrar, dar en adopción y adoptar.</h1>        
      </Route>

      <Route path="/buscar">
        <h1 className="text-center text-3xl mt-8 mb-4">Buscar</h1>   
        <form onSubmit='' className="max-w-md mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          {/* Form fields... */}
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Pon el nombre de tu amigo peludo" value='' onChange='' required 
                   className="bg-white  shadow-lg border-2 appearance-none rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="raza" className="block text-gray-700 text-sm font-bold mb-2">Raza:</label>
            <input type="text" id="raza" name="raza" placeholder="Raza de tu mascota" value='' onChange='' required 
                   className="bg-white shadow-lg border-2  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          
          <div className="mb-4">
            <label htmlFor="tamaño" className="block text-gray-700 text-sm font-bold mb-2">Tamaño:</label>
            <input type="text" id="tamaño" name="tamaño"   placeholder="Pequeño, mediano, grande" value='' onChange='' required 
                   className="bg-white shadow-lg border-2  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
      
          <div className="mb-4">
            <label htmlFor="microchip" className="block text-gray-700 text-sm font-bold mb-2">Microchip:</label>
            <input type="text" id="microchip" name="microchip" placeholder="Número de microchip" value='' onChange=''required 
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
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Enviar
            </button>
          </div>
        </form>     
      </Route>

      <Route path="/encontrar">
        <h1 className="text-center text-3xl mt-8 mb-4">Encontrar</h1>        
      </Route>
      <Route path="/darenadopcion">
        <h1 className="text-center text-3xl mt-8 mb-4">Dar en Adopción</h1>        
      </Route>
      <Route path="/adoptar">
        <h1 className="text-center text-3xl mt-8 mb-4">Adoptar</h1>        
      </Route>
    </div>
  )
}

export default Menu;