import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import {Portada} from './portada/portada'
import { Formulario } from './formulario/formulario'
import { ContainerForm } from './formulario/container-form'
function App() {

  return (
    <div className='container'>
    <Portada></Portada>
    <ContainerForm></ContainerForm>
    </div>
  )
}




export default App
