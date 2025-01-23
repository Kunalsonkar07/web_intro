import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import HomePage from './component/HomePage'
import Themepage from './component/Themepage'

function App() {

  return (
    <div className=' bg-opacity-80  h-[100%] w-screen ' >
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/grid' element={<Themepage/>} />

        </Routes>
    </div>
  )
}

export default App
