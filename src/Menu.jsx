
import React from 'react'
import { useState, useEffect } from "react"
import { Route, Link } from 'wouter'
import perro from '../images/perro.png'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc , getDocs , query } from 'firebase/firestore/lite';



// Firebase configuration...
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
const db = getFirestore(app);


function Menu(){
  const [formData, setFormData] = useState({
    nombre: '',
    raza: '',
    tamaño: '',
    microchip:'',
    marcas:'',
    fecha_de_perdida:'',
    descripcion:''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 


    const { nombre, raza, tamaño, microchip, marcas, fecha_de_perdida, descripcion } = formData;

    try {
      const colRef = collection(db, 'peludos'); // Replace with your collection name
      const newDoc = await addDoc(colRef, {
        nombre,
        raza,
        tamaño,
        microchip,
        marcas,
        fecha_de_perdida,
        descripcion
      });
      console.log("Document written with ID:", newDoc.id); // Success message (optional)
      // Optionally clear the form or redirect after successful submission
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const [darkMode, setDarkMode] = useState(false)
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const getDatos = async () => {
      const q = query(collection(db, "peludos")); // Crea una consulta
      try {
        const querySnapshot = await getDocs(q);
        const datosArray = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setDatos(datosArray);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    getDatos();
  }, []);

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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className='navbar p-4'>
        <div className="flex items-center justify-end mb-4">
          <p className="xs:text-xs md:text-lg text-gray-700 dark:text-gray-300 font-bold mr-2">Dark mode</p>
          <label htmlFor="darkmode" className=" bg-gray-300 dark:bg-gray-600 w-14 h-7 rounded-full cursor-pointer p-1 relative">
            <input onClick={handleClick} type="checkbox" id="darkmode" className="sr-only peer" checked={darkMode} readOnly />
            <div className="w-5 h-5 bg-white rounded-full peer-checked:translate-x-7 transition-all"></div>
          </label>
        </div>
        <h1 className='lg:text-7xl xs:text-5xl md:text-6xl font-bold text-center mb-8'>Portal Mascotas </h1>
        
        <nav className='flex justify-center items-center space-x-4 mb-2'>
          <Link href="/" className="lg:text-2xl md:text-xl hover:text-purple-700 dark:hover:text-purple-400 transition-colors">Inicio</Link>
          <Link href="/registrar" className="lg:text-2xl md:text-xl hover:text-purple-700 dark:hover:text-purple-400 transition-colors">Registrar</Link>
          <Link href="/buscar" className="lg:text-2xl md:text-xl hover:text-purple-700 dark:hover:text-purple-400 transition-colors">Buscar</Link>
          <Link href="/darenadopcion" className="lg:text-2xl md:text-xl hover:text-purple-700 dark:hover:text-purple-400 transition-colors">Dar</Link>
          <Link href="/adoptar" className="lg:text-2xl md:text-xl hover:text-purple-700 dark:hover:text-purple-400 transition-colors">Adoptar</Link>
        </nav>
      </div>

      <Route path="/">
        <h3 className=" xs:p-3 text-gray-500 text-center mt-8 mx-auto max-w-2xl text-xl lg:text-2xl xs:text-base  md:text-xl">Este sitio web brinda un espacio exclusivo para la publicación de valiosa información acerca de mascotas perdidas. </h3>      
        <img src={perro} className='relative lg:top-[-3rem] xs:w-full md:w-3/4 lg:w-1/2  mx-auto rounded '  />
        <h3 className="relative top-[-3rem] xs:text-xs lg:top-[-6rem] text-gray-500 xs:p-4 md:text-lg xs:pb-4 text-center pb-4 mx-auto max-w-xl lg:text-xl lg:pb-8 "> Para contribuir de manera efectiva a la concientización y promoción de la tenencia responsable de animales puedes registrar tu mascota, adoptar y dar en adopción.</h3>
      </Route>
      
      <Route path="/registrar">
        <h1 className="text-center text-3xl mt-8 mb-4">Registrar</h1>   
        <form onSubmit={handleSubmit} className="sombra  pb-8  shadow-lg max-w-md mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          {/* Form fields... */}
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Pon el nombre de tu amigo peludo" value={formData.nombre} onChange={handleChange} required 
                   className="bg-white  shadow-lg border-2 appearance-none rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="raza" className="block text-gray-700 text-sm font-bold mb-2">Raza:</label>
            <input type="text" id="raza" name="raza" placeholder="Raza de tu mascota" value={formData.raza} onChange={handleChange} required 
                   className="bg-white shadow-lg border-2  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          
          <div className="mb-4">
            <label htmlFor="tamaño" className="block text-gray-700 text-sm font-bold mb-2">Tamaño:</label>
            <input type="text" id="tamaño" name="tamaño"   placeholder="Pequeño, mediano, grande" value={formData.tamaño} onChange={handleChange} required 
                   className="bg-white shadow-lg border-2  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
      
          <div className="mb-4">
            <label htmlFor="microchip" className="block text-gray-700 text-sm font-bold mb-2">Microchip:</label>
            <input type="text" id="microchip" name="microchip" placeholder="Número de microchip" value={formData.microchip} onChange={handleChange} required 
                   className="bg-white shadow-lg border-2  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
      
          <div className="mb-4">
            <label htmlFor="marcas" className="block text-gray-700 text-sm font-bold mb-2">Marcas:</label>
            <input type="text" id="marcas" name="marcas" placeholder='Descripción de cualquier marca distintiva' value={formData.marcas} onChange={handleChange} required 
                   className="bg-white shadow-lg border-2  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
      
          <div className="mb-4">
            <label htmlFor="fecha_de_perdida" className="block text-gray-700 text-sm font-bold mb-2">Fecha de pérdida:</label>
            <input type="date" id="fecha_de_perdida" name="fecha_de_perdida" value={formData.fecha_de_perdida} onChange={handleChange} required 
                   className="bg-white shadow-lg border-2  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
      
          <div className="mb-6">
            <label htmlFor="descripcion" className="block text-gray-700 text-sm font-bold mb-2">Descripción:</label>
            <textarea id="descripcion" placeholder='Detalles sobre tu mascota' name="descripcion" value={formData.descripcion} onChange={handleChange} required 
                      className="bg-white shadow-lg border-2  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"></textarea>
          </div>
            
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Enviar
            </button>
          </div>
        </form>     
      </Route>

      <Route path="/buscar">
        <h1 className="text-center text-3xl mt-8 mb-4">Buscar</h1>  
        <hr/><br/>
        <div className='flex justify-center items-center md:flex-direction-row lg:flex-direction-row xs:block'>
          <div className='mb-2 mr-40 md:mr-20'>
          <label htmlFor="raza" className="block text-gray-700 text-sm font-bold ">Raza</label>
          <select name="miSeleccion">
            <option value="" selected>- Seleccione una opción -  </option>
            <option value="raza1">raza 1</option>
            <option value="raza2">raza 2</option>
            <option value="raza3">raza 3</option>
          </select>
          </div>
          <div className='mb-2 mr-40 md:mr-20'>
          <label htmlFor="tamaño" className="block text-gray-700 text-sm font-bold">Tamaño</label>
          <select name="miSeleccion">
          <option value="" selected>- Seleccione una opción -  </option>
            <option value="pequeño">pequeño</option>
            <option value="mediano">mediano</option>
            <option value="grande">grande</option>
          </select>  
          </div>
          <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Buscar
            </button>
          </div>  
        
        <div >
              {datos.map((dato) => (
          <div key={dato.id} className='mt-4 pb-2 text-center'>
            <p >Nombre: {dato.nombre}</p>
            <p >Raza: {dato.raza}</p>
            <p>Tamaño: {dato.tamaño}</p>
            <p>Microchip: {dato.microchip}</p>
            <p>Marcas: {dato.marcas}</p>
            <p>Fecha de pérdida: {dato.fecha_de_perdida}</p>
            <p>Descripción: {dato.descripcion}</p>
        </div>
      ))}
    </div>
      </Route>
      <Route path="/darenadopcion">
        <h1 className="text-center text-3xl mt-8 mb-4">Dar en Adopción</h1>        
        <form onSubmit='' className="sombra  pb-8  shadow-lg max-w-md mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
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
      <Route path="/adoptar">
        <h1 className="text-center text-3xl mt-8 mb-4">Adoptar</h1>        
      </Route>
    </div>
  )
}

export default Menu;