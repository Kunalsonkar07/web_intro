import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import HomePage from './component/HomePage'

function App() {

  return (
    <div className=' h-[100%] w-screen'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/grid' />

        </Routes>
    </div>
  )
}

export default App
