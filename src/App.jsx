import { useState } from 'react'
import './App.css'
import { IoMdRadioButtonOn } from 'react-icons/io'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer, toast } from 'react-toastify'

function App() {
 
toast.error("toast checking ")
  return (
    <>
      <h5>Coming soon</h5>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App
