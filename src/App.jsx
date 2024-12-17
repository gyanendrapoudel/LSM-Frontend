import { useState } from 'react'
import './App.css'
import { IoMdRadioButtonOn } from 'react-icons/io'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from 'react-toastify'
import AppRoutes from './routes/AppRoutes'


function App() {

  return (
    <>
      <AppRoutes/>
      
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App
