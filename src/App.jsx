import React from 'react';

import { useState } from 'react'
import Menu from './Menu';
import Footer from './Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>   
    <Menu/>
    <Footer/>
    </>
  )
}

export default App
